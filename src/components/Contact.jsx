import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
  padding-top: 70px;
  min-height: 100vh;
  padding: 4rem 2rem;
  background: url('/contactbg.jpg') center/cover no-repeat;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 800px;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  padding: 3rem 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 2rem;
`;

const InfoBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
`;

const InfoItem = styled.div`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.85);

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
            https://www.linkedin.com/in/sanya-garg-397902276/
            </a>
          </InfoItem>
        </InfoBox>
      </Container>
    </ContactSection>
  );
}

export default Contact;
