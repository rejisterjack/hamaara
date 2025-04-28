import { useState } from 'react';
import './navbar.scss';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const navItems = ['Home', 'About', 'Our Project', 'Invest Now'];

  return (
    <div className="navbar">
      <div className="left">
        <img src="/logo.png" alt="Hamaara Logo" />
        <h1>Hamaara</h1>
      </div>
      
      <div className="middle">
        <ul>
          {navItems.map((item) => (
            <li 
              key={item} 
              className={activeTab === item ? 'active' : ''}
              onClick={() => setActiveTab(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="right">
        <button className="get-in-touch">Get in Touch</button>
        <button className="invest">Invest</button>
      </div>
    </div>
  );
};

export default Navbar;
