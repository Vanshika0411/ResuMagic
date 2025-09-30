import React, { useState } from 'react';

const AuthForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-purple-500">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <div className="flex justify-center mb-4">
          <button
            onClick={() => setIsSignIn(true)}
            className={`px-4 py-2 rounded-t-lg w-1/2 flex justify-center items-center gap-2 ${
              isSignIn ? 'bg-green-400 text-white' : 'text-gray-700'
            }`}
          >
            <span>🔐</span> Sign In
          </button>
          <button
            onClick={() => setIsSignIn(false)}
            className={`px-4 py-2 rounded-t-lg w-1/2 flex justify-center items-center gap-2 ${
              !isSignIn ? 'bg-green-400 text-white' : 'text-gray-700'
            }`}
          >
            <span>👤</span> Sign Up
          </button>
        </div>

        <h2 className="text-center text-2xl font-bold mb-6">
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </h2>

        {!isSignIn && (
          <div className="mb-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-md outline-none focus:ring"
            />
          </div>
        )}

        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md outline-none focus:ring"
          />
        </div>

        <div className="mb-6 relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md outline-none focus:ring"
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            type="button"
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500"
          >
            👁
          </button>
        </div>

        <button className="w-full bg-green-400 text-white py-2 rounded-md hover:bg-green-500 transition">
          {isSignIn ? 'Login' : 'Register User'}
        </button>

        <p className="text-center mt-6 text-sm">
          {isSignIn ? (
            <>
              Don’t have an account?{' '}
              <span
                onClick={() => setIsSignIn(false)}
                className="text-blue-600 cursor-pointer"
              >
                Sign Up
              </span>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <span
                onClick={() => setIsSignIn(true)}
                className="text-blue-600 cursor-pointer"
              >
                Sign In
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
