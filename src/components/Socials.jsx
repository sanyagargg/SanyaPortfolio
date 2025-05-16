import styled from 'styled-components';
import { motion } from 'framer-motion';

const SocialsContainer = styled.div`
  position: fixed;
  left: 2rem;
  bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 100;
`;

const SocialLink = styled(motion.a)`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  opacity: 0.7;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/sanyagargg',
    icon: '📂'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/sanyagargg',
    icon: '💼'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/sanyagargg',
    icon: '🐦'
  }
];

function Socials() {
  return (
    <SocialsContainer>
      {socialLinks.map((link, index) => (
        <SocialLink
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 0.7, x: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {link.icon}
        </SocialLink>
      ))}
    </SocialsContainer>
  );
}

export default Socials;