// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import GoogleSign from "../Google/GoogleSign";

const Login = () => {
  const { signInUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(`Submitted email: ${email}, password: ${password}`);
    setError("");
    event.target.reset();
    signInUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate("/");

        // if (!loggedUser.emailVerified) {
        //   alert(
        //     "Please verify your email Otherwise we will block your account"
        //   );
        // }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="mb-20 lg:mt-0 mt-5" data-aos="zoom-in-down">
      <form
        onSubmit={handleSubmit}
        className="lg:max-w-sm max-w-md mx-auto bg-white p-8 rounded-md shadow-md"
      >
        <p className="text-3xl text-black  font-semibold">Sign in</p>
        <small className="">Stay with us for unique toys</small>
        <div className="mt-5 mb-4">
          <input
            placeholder="Email or Phone"
            type="email"
            id="email"
            value={email}
            onChange={handleEmail}
            className="border-gray-400 border-2 p-3 text-black text-lg rounded-md w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            onChange={handlePassword}
            className="border-gray-400 border-2 p-3 rounded-md w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-md font-semibold mb-5 text-blue-600">
          Forgot password?
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3  rounded-3xl focus:outline-none focus:shadow-outline w-full"
        >
          Sign in
        </button>
        <div className="text-red-500 py-2">{error}</div>

        <div className="my-5">
          <GoogleSign> </GoogleSign>
        </div>

        <div className="text-center mt-10">
          Already on ChefHouse?
          <Link to="/signup" className="font-semibold text-blue-700 ml-2">
            Join now
          </Link>{" "}
          <br />
        </div>
      </form>
    </div>
  );
};

export default Login;
