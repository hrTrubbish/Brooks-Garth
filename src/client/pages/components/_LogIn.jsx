import React, { useState, useContext } from 'react';
import { AuthContext } from './_AuthProvider.jsx';

export function LogIn() {
  const { handleLogInWithEmail, userId, status } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogInWithEmail(email, password);
  };

  return (
    <div>
      {status === 'authenticated' && userId ? <div className="m-4 flex items-center justify-center">Successfully Log In!</div>
        : (
          <form className="m-2 flex flex-col items-center" onSubmit={handleSubmit}>
            <label htmlFor="log-email" className="m-1 p-1 tracking-wider">
              Email:
              <input
                className="m-2"
                id="log-email"
                type="email"
                value={email}
                placeholder="Email ..."
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label htmlFor="log-pass" className="m-1 p-1 tracking-wider">
              Email:
              <input
                className="m-2"
                id="log-pass"
                type="password"
                value={password}
                placeholder="Password ..."
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <button type="submit" className="text-1xl m-5 p-2 tracking-wider">Login With Email</button>
          </form>
        )}
    </div>
  );
}