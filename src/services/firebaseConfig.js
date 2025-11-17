import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyBOw3AgWwn8sZZwB5Hj9obQ-cAtx5iRV2w",
  authDomain: "intechsupport-68f59.firebaseapp.com",
  projectId: "intechsupport-68f59",
  storageBucket: "intechsupport-68f59.appspot.com",
  messagingSenderId: "170146160660",
  appId: "1:170146160660:web:f1958c3349190f038a8701"

};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };


