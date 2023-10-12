import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCKmQrd6g44spi9hVHP-LQyposXd16T9NA",
  authDomain: "prodo-30ad0.firebaseapp.com",
  projectId: "prodo-30ad0",
  storageBucket: "prodo-30ad0.appspot.com",
  messagingSenderId: "741764715020",
  appId: "1:741764715020:web:5ae5736edfd7af70c6d429"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;