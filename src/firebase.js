import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { execOnce } from "next/dist/shared/lib/utils";
import { addDoc, collection, query, where, getDocs } from "firebase/firestore";


import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCKmQrd6g44spi9hVHP-LQyposXd16T9NA",
  authDomain: "prodo-30ad0.firebaseapp.com",
  projectId: "prodo-30ad0",
  storageBucket: "prodo-30ad0.appspot.com",
  messagingSenderId: "741764715020",
  appId: "1:741764715020:web:5ae5736edfd7af70c6d429"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function senddata(params) {
  const usersCollection = collection(db, "users");

  // Create a query to check if data with the same UID exists
  const q = query(usersCollection, where("uid", "==", params.uid));

  // Execute the query to get matching documents
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    // No matching document found, so add the data
    await addDoc(usersCollection, {
      name: params.displayName,
      email: params.email,
      profile: params.photoURL,
      uid: params.uid,
    });
  } else {
    // Data with the same UID already exists
    console.log("Data with UID already exists. Not adding.");
  }
}
export const auth = getAuth(app);
export default app;