import React, { useEffect, useState } from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import Home from '../../pages/home/Home';
import Login from '../../pages/login/Login';
import Registration from '../../pages/registration/Registration';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const [isAuth, setIsAuth] = useState<boolean | null>(null);
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setIsAuth(!!user);
        });

        return () => unsubscribe();
    }, [auth]);

    if (isAuth === null) return null;  // Ou un composant de chargement

    return isAuth ? children : <Navigate to="/login" />;
};

const PrivateRoute = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route
                path="/"
                element={
                    <PrivateRoute>
                        <Outlet />
                    </PrivateRoute>
                }
            >
                <Route path="/" element={<Home />} />
                {/* Autres routes protégées ici */}
            </Route>
        </Routes>
    );
};

export default ProtectedRoute;