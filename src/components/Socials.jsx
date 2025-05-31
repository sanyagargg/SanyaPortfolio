import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

const SocialsContainer = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 1000;
`;

const SocialLink = styled(motion.a)`
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    transform: translateY(-3px);
    color: #8ec5fc;
    border-color: #8ec5fc;
  }
`;

const socialLinks = [
  {
    icon: <FaGithub />,
    url: 'https://github.com/sanyagargg',
    label: 'GitHub'
  },
  {
    icon: <FaLinkedin />,
    url: 'https://www.linkedin.com/in/sanya-garg-397902276/',
    label: 'LinkedIn'
  },
  {
    icon: <SiLeetcode />,
    url: 'https://leetcode.com/u/s161204/',
    label: 'LeetCode'
  },
  {
    icon: <MdEmail />,
    url: 'mailto:sanyaa.gargg@gmail.com',
    label: 'Email'
  }
];

function Socials() {
  return (
    <SocialsContainer>
      {socialLinks.map((social, index) => (
        <SocialLink
          key={social.label}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {social.icon}
        </SocialLink>
      ))}
    </SocialsContainer>
  );
}

export default Socials;