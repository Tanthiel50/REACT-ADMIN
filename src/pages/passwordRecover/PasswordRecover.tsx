import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const PasswordRecover = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const auth = getAuth();

        try {
            await sendPasswordResetEmail(auth, email);
            setMessage('Password reset email sent! Check your inbox.');
            setError(null);  // reset any previous errors
        } catch (e) {
            setError(e.message);
            setMessage(null);  // reset any previous success messages
        }
    };

    return (
        <div>
            <h1>Password Recovery</h1>
            <p>Please enter your email address to recover your password.</p>
            {message && <p className="success-message">{message}</p>}
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                />
                <button type="submit">Recover Password</button>
            </form>
        </div>
    );
};

export default PasswordRecover;
