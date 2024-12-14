// src/firestore.js
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import app from "./firebase";

const db = getFirestore(app);

export const addMenuItem = async (item) => {
  try {
    const docRef = await addDoc(collection(db, "menuItems"), item);
    return docRef.id;
  } catch (error) {
    throw error;
  }
};

export const fetchMenuItems = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "menuItems"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    throw error;
  }
};
