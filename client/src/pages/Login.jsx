import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="mt-10 min-h-screen flex items-center justify-center w-full">
      <div className="bg-white shadow-2xl rounded-3xl px-5 py-6 w-full sm:w-[27vw]">
        <h1 className="text-xl font-bold text-center mb-4">Let's Connect</h1>
        <form>
          {/* For Email */}
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-md font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="your@gmail.com"
              className="shadow-lg rounded-md w-full px-3 py-1 border-2 border-gray-400 focus:outline-none focus:ring-black focus:border-black"
            />
          </div>
          {/* For Password */}
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-md font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="shadow-lg rounded-md w-full px-3 py-1 border-2 border-gray-400 focus:outline-none focus:ring-black focus:border-black"
            />
          </div>
          {/* For forgot password */}
          <a href="#" className="text-sm text-gray-500 hover:text-black">
            Forgot Password
          </a>
          {/* Signup with account */}
          <div className="flex items-center justify-end mb-4">
            <Link to={"/signup"} className="text-sm text-black">
              Create Account
            </Link>
          </div>
          <button type="submit" className="w-full py-2 px-4 rounded-md shadow-md text-sm font-medium text-white bg-black">
            Signin
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
