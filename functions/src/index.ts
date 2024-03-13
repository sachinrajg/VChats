const functions = require('firebase-functions');
const { Storage: CloudStorage } = require('@google-cloud/storage');
const sharp = require('sharp');
const path = require('path');
const os = require('os');
const fs = require('fs');

const storage = new CloudStorage({
  projectId: 'chats-916e1' // Replace 'chats-916e1' with your Firebase project ID
});
const bucket = storage.bucket('gs://chats-916e1.appspot.com'); // Replace with your bucket name

exports.resizeImage = functions.storage.object().onFinalize(async (object) => {
  const fileBucket = object.bucket; // The Storage bucket that contains the file.
  const filePath = object.name; // File path in the bucket.
  const contentType = object.contentType; // File content type.

  // Exit if this is triggered on a file that is not an image.
  if (!contentType.startsWith('image/')) {
    console.log('This is not an image.');
    return null;
  }

  // Exit if the image is already resized.
  if (filePath.startsWith('resized/')) {
    console.log('Already resized.');
    return null;
  }

  // Download the file.
  const tempFilePath = path.join(os.tmpdir(), path.basename(filePath));
  await bucket.file(filePath).download({ destination: tempFilePath });
  console.log('Image downloaded locally to', tempFilePath);

  // Resize the image using Sharp.
  const resizedFilePath = path.join(path.dirname(filePath), 'resized', path.basename(filePath));
  const resizedTempFilePath = path.join(os.tmpdir(), resizedFilePath);
  await sharp(tempFilePath).resize({ width: 100, height: 100 }).toFile(resizedTempFilePath);
  console.log('Image resized:', resizedTempFilePath);

  // Upload the resized image to the same folder.
  await bucket.upload(resizedTempFilePath, {
    destination: resizedFilePath,
    metadata: {
      contentType: contentType,
    },
  });
  console.log('Resized image uploaded to Storage at', resizedFilePath);

  // Cleanup: Delete the temporary files.
  fs.unlinkSync(tempFilePath);
  fs.unlinkSync(resizedTempFilePath);

  return null;
});
