import React, { useState, useEffect } from 'react';
import { getAuth, signOut } from '@firebase/auth';
import { getFirestore, doc, getDoc } from '@firebase/firestore';
import "./navbar.scss";

const Navbar = () => {
    const [userfirstName, setUserName] = useState<string | null>(null);
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const auth = getAuth();
    const db = getFirestore();

    useEffect(() => {
        const fetchUserName = async () => {
            const user = auth.currentUser;
            if (user) {
                const userDoc = await getDoc(doc(db, 'users', user.uid));
                if (userDoc.exists()) {
                    setUserName(userDoc.data()?.firstName);
                }
            }
        };

        fetchUserName();
    }, [auth, db]);

    const handleSignOut = () => {
        signOut(auth);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    }

    return (
        <div className="navbar">
            <div className="logo">
                <img src="logo.svg" alt="" />
                <span>Cara</span>
            </div>
            <div className="icons">
                <div className="notification">
                    <img src="/notifications.svg" alt="" />
                    <span>1</span>
                </div>
                <div className="user">
                    <span style={{textTransform:'capitalize'}}>{userfirstName || 'Loading...'}</span>
                </div>
                <img 
                    src={dropdownOpen ? "/close.svg" : "/settings.svg"} 
                    alt="" 
                    className="icon" 
                    onClick={toggleDropdown}
                />
                {dropdownOpen && (
                    <div className="dropdown-menu">
                        <span>
                            Paramètres
                        </span>
                        <span 
                            onClick={handleSignOut} 
                        >
                            Déconnexion
                        </span>

                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;