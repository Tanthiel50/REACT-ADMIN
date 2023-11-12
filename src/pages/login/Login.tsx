// LoginPage.tsx
import React, { useState, useEffect } from 'react';
import './login.scss';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import initFirebase from '../../config/firebase_init';

const auth = getAuth(initFirebase);

function Login() {

  const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                // Redirigez l'utilisateur vers la page d'accueil s'il est déjà connecté
                navigate ('/')
            }
        });

        return () => unsubscribe();
    }, [auth]);
  // console.log('LoginPage success');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  
  const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const auth = getAuth();
    try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('Utilisateur connecté:', user);

      // Redirection home if login success
      navigate('/');

    } catch (error) {
      console.error('Erreur lors de la connexion:', error.message);
      setErrorMessage(error.message);
      }
      };
      
      return (
        <div className="login-page">
          <div className="login-container">
            <h2 className="login-title">Connexion</h2>
            {errorMessage && <p className="error-message">Identifiants incorrects</p>}
            <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Entrez votre email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Entrez votre mot de passe"
              required
            />
          </div>
          <button type="submit" className="login-button">Se connecter</button>
        </form>
        <div className='bottomInformation'>
          <Link to="/passwordrecover">Mot de passe oublié ?</Link>
          <Link to="/registration">Je ne possède pas de compte</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;