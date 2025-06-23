import React from 'react';
import useAuth from './useAuth';

const RegistrationForm = () => {
  const { registerForm, handleRegisterSubmit, handleRegisterChange, registerError } = useAuth();

  return (
    <form id="RegistrationForm_1" onSubmit={handleRegisterSubmit} className="mt-8 space-y-6">
      <div id="RegistrationForm_2" className="rounded-md shadow-sm -space-y-px">
        <div id="RegistrationForm_3">
          <label htmlFor="name" className="sr-only">Full name</label>
          <input
            id="RegistrationForm_4"
            name="name"
            type="text"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Full name"
            value={registerForm.name}
            onChange={handleRegisterChange}
          />
        </div>
        <div id="RegistrationForm_5">
          <label htmlFor="email" className="sr-only">Email address</label>
          <input
            id="RegistrationForm_6"
            name="email"
            type="email"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
            value={registerForm.email}
            onChange={handleRegisterChange}
          />
        </div>
        <div id="RegistrationForm_7">
          <label htmlFor="password" className="sr-only">Password</label>
          <input
            id="RegistrationForm_8"
            name="password"
            type="password"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
            value={registerForm.password}
            onChange={handleRegisterChange}
          />
        </div>
      </div>

      {registerError && (
        <div id="RegistrationForm_9" className="text-red-500 text-sm text-center">
          {registerError}
        </div>
      )}

      <div id="RegistrationForm_10">
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create Account
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;