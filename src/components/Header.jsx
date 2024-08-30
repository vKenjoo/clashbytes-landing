    import React from 'react';

    const Header = () => {
    return (
        <header className="w-full bg-gray-900 text-white py-3 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4">
            {/* Smaller Logo */}
            <img 
            src="/public/header-logo.svg" 
            alt="Clash Bytes Logo" 
            className="h-6 md:h-8 w-auto" 
            style={{ maxWidth: '100px', height: 'auto' }} 
            />

            {/* Navigation Links */}
            <nav>
            <ul className="flex space-x-6 text-sm md:text-base list-none p-0 m-0">
                <li>
                <a href="/" className="hover:text-yellow-400 no-underline">
                    Home
                </a>
                </li>
                <li>
                <a href="/singleplayer" className="hover:text-yellow-400 no-underline">
                    Singleplayer
                </a>
                </li>
                <li>
                <a href="/multiplayer" className="hover:text-yellow-400 no-underline">
                    Multiplayer
                </a>
                </li>
            </ul>
            </nav>
        </div>
        </header>
    );
    };

    export default Header;
