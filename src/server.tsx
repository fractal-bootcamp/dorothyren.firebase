// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


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


// Initialize Firebase 
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }

const users = [
    {
        email: "email@email.com"
    },
    {
        email: "sarah@sarah.com"
    },
    {
        email: "lui@lui.com"
    },
]


//EXPRESS ROUTES 
app.get('/user', (req, res) => {
    //req.headers.authorization is where we are going to find the tokens
    //all tokens are retrieved from "bearer 58932r73829732" need to split and grab the second item in array 
    const userToken = req.headers.authorization?.split(" ")[1]
    console.log('REQ HEADERS', req.headers)

    console.log("user token is: ", userToken)
    return res.send("hello")
})


function App() {

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
