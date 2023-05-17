/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {

  const { error } = useRouteError();

  return (
    <section >
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
       <img className="w-96 h-96 lg:error" src="https://img.lovepik.com/element/40021/7866.png_1200.png" alt="" />

        <div className="max-w-md text-center">
          <p className="text-2xl text-red-600 mb-8">
            {error?.message}
          </p>
          <Link
            to="/"
            className="px-6 py-3 text-xl rounded-lg bg-violet-500 text-white"
          >
            Back to your Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};
export default ErrorPage;
