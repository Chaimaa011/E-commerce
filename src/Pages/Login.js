import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Copyright from '../components/Copyright';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'chaimaa' && password === '123') {
      const user = { username, role: 'admin', token: 'jwt-token-example' };
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/dashboard');   
    } else {
      alert('Nom d\'utilisateur ou mot de passe incorrect');
    }
  };

  return (
    <div className="container mt-3 mb-5">
      <h2 className="text-center mb-4">Connexion</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleLogin} className="p-4 border rounded bg-light shadow-sm">
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="username"
                style={{width:'100%'}}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Se connecter</button>
          </form>
        </div>
      </div>
      <Copyright />

    </div>
  );
};

export default Login;
