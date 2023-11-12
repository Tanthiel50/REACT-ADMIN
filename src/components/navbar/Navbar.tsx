import "./navbar.scss";
import {useState} from "react";

const Navbar =() => {
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    }

    return (
        <div className="navbar">
            <div className="logo">
                <img src="logo.svg" alt="" />
                <span>Immolead</span>
            </div>
            <div className="icons">
                {/* <div className="notification">
                    <img src="/notifications.svg" alt="" />
                    <span>1</span>
                </div> */}
                <div className="user">
                    <span>Username</span>
                </div>
                <img 
                    src={dropdownOpen ? "/close.svg" : "/settings.svg"} 
                    alt="" 
                    className="icon" 
                    onClick={toggleDropdown}
                />
                {dropdownOpen && (
                    <div className="dropdown-menu">
                        <span 
                        >
                            Paramètres
                        </span>
                        <span>
                            Deconnexion
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar