import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Error from './pages/errror'; // `errror` o'rniga `error`
import { BsSunFill, BsMoonFill } from 'react-icons/bs';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ $isDarkMode }) => ($isDarkMode ? '#1a1a1a' : '#ffffff')};
    color: ${({ $isDarkMode }) => ($isDarkMode ? '#ffffff' : '#000000')};
    transition: background-color 0.3s ease, color 0.3s ease;
    margin: 0;
    font-family: Arial, sans-serif;
  }
`;

const Nav = styled.nav`
  background: ${({ $isDarkMode }) => ($isDarkMode ? '#111' : '#333')};
  padding: 1rem 2rem;
  display: flex;
  gap: 1.5rem;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
`;

const NavLink = styled(Link)`
  color: ${({ $active, $isDarkMode }) => ($active ? '#00e0ff' : $isDarkMode ? '#fff' : '#ddd')};
  text-decoration: none;
  font-size: 1.1rem;

  &:hover {
    color: #00e0ff;
  }
`;

const ToggleButton = styled.button`
  background: ${({ $isDarkMode }) => ($isDarkMode ? '#444' : '#ccc')};
  color: ${({ $isDarkMode }) => ($isDarkMode ? '#fff' : '#000')};
  border: none;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({ $isDarkMode }) => ($isDarkMode ? '#555' : '#bbb')};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const Home = () => <h1>Home page</h1>;
const About = () => <h1></h1>;
const Contact = () => <h1></h1>;

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const location = useLocation();

  return (
    <Nav $isDarkMode={isDarkMode}>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <NavLink to="/" $active={location.pathname === '/'} $isDarkMode={isDarkMode}>
          Home
        </NavLink>
        <NavLink to="/about" $active={location.pathname === '/about'} $isDarkMode={isDarkMode}>
          About
        </NavLink>
        <NavLink to="/contact" $active={location.pathname === '/contact'} $isDarkMode={isDarkMode}>
          Contact
        </NavLink>
        
      </div>
      <ToggleButton onClick={toggleDarkMode} $isDarkMode={isDarkMode}>
        {isDarkMode ? <BsSunFill /> : <BsMoonFill />}
      </ToggleButton>
    </Nav>
  );
};

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? '#1a1a1a' : '#ffffff';
    document.body.style.color = isDarkMode ? '#ffffff' : '#000000';
  }, [isDarkMode]);

  return (
    <>
      <GlobalStyle $isDarkMode={isDarkMode} />
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;