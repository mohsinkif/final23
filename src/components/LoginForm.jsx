import React from 'react';

const LoginForm = ({ setIsLoggedIn }) => {
  const handleLogin = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;
    if (!username || !password) {
      alert('Please fill all fields');
      return;
    }
    setIsLoggedIn(true);
  };

  return (
    <div
      className="bg-cover bg-center h-screen flex items-center"
      style={{
        backgroundImage: "url('logo.avif')",
        backgroundSize: 'cover',
        minHeight: '100vh',
      }}
    >
      <div className="container mx-auto p-4">
        <div className="bg-white p-8 rounded shadow-md max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Username:
              </label>
              <input
                type="text"
                required
                id="username"
                name="username"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password:
              </label>
              <input
                type="password"
                required
                id="password"
                name="password"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="mr-2"
              />
              <label htmlFor="remember" className="text-gray-600">
                Remember me
              </label>
            </div>
            <div className="mb-4">
              <a href="#" className="text-blue-500 text-sm">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white p-2 rounded w-full"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
