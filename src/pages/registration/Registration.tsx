import React, { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from '@firebase/auth';
import { getFirestore, doc, setDoc } from '@firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
import "./registration.scss";

const Registration = () => {
    const [email, setEmail] = useState('');
    const [firstName, setfirstName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const auth = getAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                // Redirigez l'utilisateur vers la page d'accueil s'il est déjà connecté
                navigate('/');
            }
        });

        return () => unsubscribe();
    }, [auth, navigate]);

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value);
    };
    const handlefirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setfirstName(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Save the user data to Firestore after successful registration
            const db = getFirestore();
            await setDoc(doc(db, 'users', user.uid), {
                email: user.email,
                firstName: firstName,
                // Add other fields if needed
            });

            setError(null);

            navigate('/');  // Redirigez l'utilisateur vers la page d'accueil
        } catch (error: any) {
            setError(error.message);
        }
    };

    return (
        <div className='registration'>
            {error && <p className='errorMessage'>{error}</p>}
            <form onSubmit={handleSubmit} className='registrationContainer'>
                <h1>Création de compte</h1>
                <div className='registrationForm'>
                    <label htmlFor="firstName">Prénom:</label>
                    <input type="text" id="text" placeholder='Prénom' value={firstName} onChange={handlefirstNameChange} required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" placeholder='Email' value={email} onChange={handleEmailChange} required />
                </div>
                <div>
                    <label htmlFor="password">Mot de passe:</label>
                    <input type="password" id="password" placeholder='Mot de passe' value={password} onChange={handlePasswordChange} required />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirmez votre mot de passe:</label>
                    <input type="password" id="confirmPassword" placeholder='Mot de passe' value={confirmPassword} onChange={handleConfirmPasswordChange} required />
                </div>
                <button type="submit" className='registrationButton'>Créer mon compte</button>
                <div className='bottomInformation'>
                    <Link to="/login">Je possède déjà un compte</Link>
                </div>
            </form>

        </div>
    );
};

export default Registration;