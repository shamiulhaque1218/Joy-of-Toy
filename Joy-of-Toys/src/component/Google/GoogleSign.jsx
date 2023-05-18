// eslint-disable-next-line no-unused-vars
import React from "react";
//import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
//import app from '../firebase/firebase.config';

const GoogleSign = () => {
//   const auth = getAuth(app);
//   const provider = new GoogleAuthProvider();
//   const handelGoogleSign = () => {
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         const user = result.user;
//         console.log(user);
//       })
//       .catch((error) => {
//         console.log(error.message);
//       });
//   };

  return (
    <div>
      <button
       // onClick={handelGoogleSign}
        className="bg-white text-gray-700 border-2 border-gray-400 py-2  rounded-3xl focus:outline-none focus:shadow-outline w-full text-ok"
      >
        {" "}
        <img className="h-5 w-5 inline mr-2" src="google.jpeg" alt="" />{" "}
        <span className="font-semibold ">Continue with Google</span>
      </button>
    </div>
  );
};

export default GoogleSign;
