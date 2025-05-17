import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import GlobalStyles from './styles/GlobalStyles';


// Components will be imported here
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Socials from './components/Socials';

const AppContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  color: #ffffff;
  position: relative;
  min-height: 100vh;
`;

const Navbar = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.scrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  z-index: 1000;
  border-bottom: 1px solid ${props => props.scrolled ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};
  transition: all 0.3s ease-in-out;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(motion.a)`
  color: ${props => props.active ? '#ffffff' : 'rgba(255,255,255,0.7)'};
  text-decoration: none;
  font-size: 1rem;
  font-weight: ${props => props.active ? '600' : '400'};
  text-transform: capitalize;
  cursor: pointer;
  position: relative;
  text-shadow: ${props => !props.scrolled ? '0 2px 4px rgba(0,0,0,0.5)' : 'none'};
  transition: text-shadow 0.3s ease;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: ${props => props.active ? '100%' : '0'};
    height: 2px;
    background: white;
    box-shadow: ${props => !props.scrolled ? '0 2px 4px rgba(0,0,0,0.5)' : 'none'};
    transition: width 0.3s ease, box-shadow 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;

const DotNavigation = styled.nav`
  position: fixed;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NavDot = styled(motion.div)`
  width: 10px;
  height: 10px;
  background: ${props => props.active ? '#ffffff' : 'rgba(255,255,255,0.3)'};
  border-radius: 50%;
  cursor: pointer;
`;

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const sections = ['home', 'about', 'education', 'experience', 'projects', 'resume', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background
      setIsScrolled(window.scrollY > 50);

      // Update active section
      const sectionElements = sections.map(section => ({
        id: section,
        element: document.getElementById(section)
      }));

      const currentSection = sectionElements.find(({ element }) => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 70; // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <AppContainer>
      <GlobalStyles />
      <Navbar
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        scrolled={isScrolled}
      >
        <NavLinks>
          {sections.map((section) => (
            <NavLink
              key={section}
              href={`#${section}`}
              active={activeSection === section}
              scrolled={isScrolled}
              onClick={(e) => handleNavClick(e, section)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {section}
            </NavLink>
          ))}
        </NavLinks>
      </Navbar>

      <DotNavigation>
        {sections.map((section) => (
          <NavDot
            key={section}
            active={activeSection === section}
            onClick={() => scrollToSection(section)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </DotNavigation>
      
      <Home />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Resume />
      <Contact />
      <Socials />
    </AppContainer>
  );
}

export default App;