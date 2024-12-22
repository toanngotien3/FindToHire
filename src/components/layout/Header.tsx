import { MENU } from '@/consts';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons from react-icons
import { Link } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="bg-red-900 text-white p-4">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold uppercase">FindToHire</h1>
                <div className="flex justify-between items-center gap-4">
                    <Link to="/request"><button className="z-10 px-4 py-2 bg-white text-black font-bold rounded-lg text-xs uppercase">Request to list</button></Link>
                    <button onClick={toggleMenu}>
                        {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
                    </button>
                </div>
            </div>
            <nav className={`${menuOpen ? 'block' : 'hidden'}`}>
                <ul className="flex space-x-4 mt-4 lg:mt-0">
                    {MENU.map((item, index) => <li key={index} className="hover:underline"><Link to={item.link}>{item.title}</Link></li>)}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
