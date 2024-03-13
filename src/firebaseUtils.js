import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

// Function to check if userChats collection exists and create if not
export const createUserChatsCollectionIfNeeded = async (userId) => {
  try {
    const userChatsDoc = doc(db, "userChats", userId);
    const userChatsSnapshot = await getDoc(userChatsDoc);

    if (!userChatsSnapshot.exists()) {
      await setDoc(userChatsDoc, {});
    }
  } catch (error) {
    console.error("Error creating userChats collection:", error);
  }
};
