import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAeAXd0kLhv3vBbtRK8uvRGwlxIMkaa8GM",
  authDomain: "vezzeta-3f5f9.firebaseapp.com",
  projectId: "vezzeta-3f5f9",
  storageBucket: "vezzeta-3f5f9.appspot.com",
  messagingSenderId: "236970156041",
  appId: "1:236970156041:web:75fd405482371334dd18d8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db,storage,ref,uploadBytes,getDownloadURL };