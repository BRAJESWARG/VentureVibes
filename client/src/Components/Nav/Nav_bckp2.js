import React, { useState, useEffect } from 'react';
import './Nav.css';

const Navbar = () => {

  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSolid(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isSolid ? 'solid' : 'transparent'}`}>
      {/* Your navbar content here */}
      Hotels
    </nav>
  );
}

export default Navbar;