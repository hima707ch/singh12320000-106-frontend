import { useState } from 'react';

const useAuth = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [registerForm, setRegisterForm] = useState({ name: '', email: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [registerError, setRegisterError] = useState('');

  const toggleMode = () => setIsLoginMode(!isLoginMode);

  const handleLoginChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleRegisterChange = (e) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginForm)
      });
      const data = await response.json();
      
      if (data.error) {
        setLoginError(data.error);
      } else {
        localStorage.setItem('token', data.token);
        // Handle successful login (e.g., redirect)
      }
    } catch (error) {
      setLoginError('An error occurred during login');
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(registerForm)
      });
      const data = await response.json();
      
      if (data.error) {
        setRegisterError(data.error);
      } else {
        // Handle successful registration (e.g., switch to login mode)
        setIsLoginMode(true);
      }
    } catch (error) {
      setRegisterError('An error occurred during registration');
    }
  };

  return {
    isLoginMode,
    toggleMode,
    loginForm,
    registerForm,
    loginError,
    registerError,
    handleLoginChange,
    handleRegisterChange,
    handleLoginSubmit,
    handleRegisterSubmit
  };
};

export default useAuth;