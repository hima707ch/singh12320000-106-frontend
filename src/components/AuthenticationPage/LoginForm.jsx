import React from 'react';
import useAuth from './useAuth';

const LoginForm = () => {
  const { loginForm, handleLoginSubmit, handleLoginChange, loginError } = useAuth();

  return (
    <form id="LoginForm_1" onSubmit={handleLoginSubmit} className="mt-8 space-y-6">
      <div id="LoginForm_2" className="rounded-md shadow-sm -space-y-px">
        <div id="LoginForm_3">
          <label htmlFor="email" className="sr-only">Email address</label>
          <input
            id="LoginForm_4"
            name="email"
            type="email"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
            value={loginForm.email}
            onChange={handleLoginChange}
          />
        </div>
        <div id="LoginForm_5">
          <label htmlFor="password" className="sr-only">Password</label>
          <input
            id="LoginForm_6"
            name="password"
            type="password"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
            value={loginForm.password}
            onChange={handleLoginChange}
          />
        </div>
      </div>

      {loginError && (
        <div id="LoginForm_7" className="text-red-500 text-sm text-center">
          {loginError}
        </div>
      )}

      <div id="LoginForm_8">
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign in
        </button>
      </div>
    </form>
  );
};

export default LoginForm;