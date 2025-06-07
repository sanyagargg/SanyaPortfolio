import styled from 'styled-components';
import { motion } from 'framer-motion';

const ResumeSection = styled.section`
  font-family: 'Press Start 2P', cursive;
  padding-top: 90px;
  min-height: 60vh;
  padding: 4rem 2rem;
  position: relative;
  background: url('/resume.png') no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  color: white;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(10, 10, 10, 0.4); /* Dark overlay */
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const Summary = styled.p`
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 2;
  margin-bottom: 3rem;
`;

const DownloadButton = styled(motion.a)`
  display: inline-block;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  border-radius: 30px;
  text-decoration: none;
  font-size: 0.6rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.2);
  }
`;

function Resume() {
  return (
    <ResumeSection id="resume">
      <Container>
        <Title>Resume</Title>
        <Summary> 
          Always eager to tackle new challenges and deliver impactful solutions. Kindly find my resume below.
        </Summary>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <DownloadButton 
            href="/resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </DownloadButton>
        </motion.div>
      </Container>
    </ResumeSection>
  );
}

export default Resume;
