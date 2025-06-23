import React from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import useAuth from './useAuth';
import images from '../assets/images';

const Body = () => {
  const { isLoginMode, toggleMode } = useAuth();

  return (
    <div id="Body_1" className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div id="Body_2" className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div id="Body_3" className="text-center">
          <img id="Body_4" className="mx-auto h-12 w-auto" src={images[0]} alt="Logo" />
          <h2 id="Body_5" className="mt-6 text-3xl font-extrabold text-gray-900">
            {isLoginMode ? 'Sign in to your account' : 'Create a new account'}
          </h2>
        </div>
        
        {isLoginMode ? <LoginForm /> : <RegistrationForm />}
        
        <div id="Body_6" className="text-center mt-4">
          <button
            id="Body_7"
            onClick={toggleMode}
            className="text-sm text-indigo-600 hover:text-indigo-500"
          >
            {isLoginMode ? 'Need an account? Sign up' : 'Already have an account? Sign in'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;