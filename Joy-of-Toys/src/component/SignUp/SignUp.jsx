// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import GoogleSign from "../Google/GoogleSign";
import { AuthContext } from "../provider/AuthProvider";

const SignUp = () => {

  const {signUpUser,logOutUser} = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL, setPhotoUrl] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handlePhotoUrl = (event) => {
    setPhotoUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, email, photoURL, password);
    setError("");
    setSuccess("");
    //event.target.form.reset();

    // eslint-disable-next-line no-useless-escape
    if (!/(?=.{6,8}$)/.test(password)) {
      setError("wrong password give 6 to 8 character");
      return;
    }
    if ((name, email, password, photoURL)) {
      signUpUser(email,password)
        .then((result) => {
          console.log(result.user);
          setSuccess("welcome ! Create User Successfully");
          logOutUser();
        })
        .catch((err) => {
          setError(err.message);
        });
    }
  };

  return (
    <div className="mb-20 mt-5">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md"
      >
        <p className="text-2xl text-center m-5 font-semibold">
          Find your Happiness {" "}
        </p>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-600 font-semibold mb-2 text-sm"
          >
            UserName
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleName}
            className="border-gray-600 border-2 p-1 rounded-md w-full focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-600 font-semibold mb-2 text-sm "
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmail}
            className="border-gray-600 border-2 p-1 rounded-md w-full focus:outline-none focus:border-blue-500"
            required
          />
        </div>

         <div className="mb-4">
        <label htmlFor="photoUrl" className="block text-gray-600 font-semibold mb-2 text-sm">Photo URL</label>
        <input type="text" id="photoUrl" value={photoURL} onChange={handlePhotoUrl} className="border-gray-400 border-2 p-2 rounded-md w-full focus:outline-none focus:border-blue-500" required/>
      </div> 
        <div className="">
          <label
            htmlFor="password"
            className="block text-gray-600 font-semibold mb-2 text-sm"
          >
            Password (6 or more characters)
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePassword}
            className="border-gray-600 border-2 p-1 rounded-md w-full focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="text-red-600 mb-2">{error}</div>
        <div className="mt-4 mb-5 text-center text text-gray-500">
          <p>
            By clicking Agree & Join, you agree to the
            <span className="text-blue-600 font-semibold px-1">
              Joy Of Toys User <br /> Agreement, Privacy Policy
            </span>{" "}
            , and{" "}
            <span className="text-blue-600 font-semibold">Cookie Policy</span>.
          </p>
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3  rounded-3xl focus:outline-none focus:shadow-outline w-full"
        >
          Agree & Join
        </button>

        <div className="text-green-600">{success}</div>

        <div className="grid grid-cols-5">
          <hr className="mt-3 border-gray-300 col-span-2" />{" "}
          <p className="text-center">or</p>{" "}
          <hr className="mt-3 border-gray-300 col-span-2" />
        </div>

        <div className="my-5">
          <GoogleSign> </GoogleSign>
        </div>
        <div className="text-center">
          Already on Joy Of Toys?
          <Link to="/login" className="font-semibold text-blue-700 ml-2">
            Sign in
          </Link>
          <br />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
