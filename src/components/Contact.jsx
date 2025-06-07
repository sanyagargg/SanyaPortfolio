import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
  font-family: 'Press Start 2P', cursive;
  position: relative;
  padding-top: 70px;
  min-height: 100vh;
  display: flex;
  align-items: flex-start;  /* changed from center */
  justify-content: center;
  padding-top: 10vh;        /* push down slightly from top */
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(10, 10, 10, 0.5);
    z-index: 1;
  }

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;

const Container = styled.div`
  max-width: 800px;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  padding: 3rem 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.5rem; /* increased */
  color: white;
  margin-bottom: 1.5rem;
`;

const Subtitle = styled.p`
  font-size: 0.8rem; /* increased */
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 2rem;
  line-height: 2;
`;

const InfoBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
`;

const InfoItem = styled.div`
  font-size: 0.8rem; /* increased */
  color: rgba(255, 255, 255, 0.9);
  word-break: break-word;

  a {
    color: white;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

function Contact() {
  return (
    <ContactSection id="contact">
      {/* Background Video */}
      <video autoPlay muted loop playsInline>
        <source src="/contact-bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Foreground content */}
      <Container>
        <Title>Get In Touch</Title>
        <Subtitle>Have a question or want to work together? Contact me at:</Subtitle>

        <InfoBox
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <InfoItem><strong>Name:</strong> Sanya Garg</InfoItem>
          <InfoItem>
            <strong>Email:</strong>{' '}
            <a href="mailto:sanyaa.gargg@gmail.com">sanyaa.gargg@gmail.com</a>
          </InfoItem>
          <InfoItem>
            <strong>GitHub:</strong>{' '}
            <a href="https://github.com/sanyagargg" target="_blank" rel="noopener noreferrer">
              github.com/sanyagargg
            </a>
          </InfoItem>
          <InfoItem>
            <strong>LinkedIn:</strong>{' '}
            <a href="https://www.linkedin.com/in/sanya-garg-397902276/" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/sanya-garg-397902276/
            </a>
          </InfoItem>
        </InfoBox>
      </Container>
    </ContactSection>
  );
}

export default Contact;
