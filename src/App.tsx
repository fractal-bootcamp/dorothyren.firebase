// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useEffect, useState } from "react";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebase = require('firebase')

const firebaseConfig = {
  apiKey: "AIzaSyDxoKfkY8Fe_gsl8ZBMG70yFbLwiWBNKWQ",
  authDomain: "fir-auth-1-58839.firebaseapp.com",
  projectId: "fir-auth-1-58839",
  storageBucket: "fir-auth-1-58839.appspot.com",
  messagingSenderId: "803440858758",
  appId: "1:803440858758:web:4ffa1c95269356eb46a307"
};


// Initialize Firebase. this has a fetch inside that lets us make calls to Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }

const handleClick = async () => {
  const token = await auth.currentUser?.getIdToken()
  const realToken = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  return fetch('http://localhost:/user', realToken)
}



<button onClick={() => handleClick}>Register</button>

function App() {

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const signUp = async (email: string, password: string) => {
    const returnValue = await createUserWithEmailAndPassword(auth, email, password)
    console.log("returnValue is: ", returnValue)
  }

  useEffect(() => {
    const nestedASyncFunction = async () => {
      const getResults = await handleClick()
      console.log("useEffect inside: ", getResults)
    }
    nestedASyncFunction()
  }, [])

  console.log("current User is: ", auth.currentUser)

  return (
    <>
      <div>
        <h2>
          Click on the Vite and React logos to learn more
        </h2>
      </div>

    </>
  )
}

export default App
