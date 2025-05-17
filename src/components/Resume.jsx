import styled from 'styled-components';
import { motion } from 'framer-motion';

const ResumeSection = styled.section`
  padding-top: 90px;
  min-height: 60vh;
  padding: 4rem 2rem;
  background: #0a0a0a;
  color: white;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const Summary = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.6;
  margin-bottom: 3rem;
`;

const DownloadButton = styled(motion.a)`
  display: inline-block;
  padding: 1rem 2rem;
  background: white;
  color: #0a0a0a;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
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
