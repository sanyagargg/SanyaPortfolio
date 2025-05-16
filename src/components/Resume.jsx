import styled from 'styled-components';
import { motion } from 'framer-motion';

const ResumeSection = styled.section`
  padding-top: 70px; // Add padding for navbar
  min-height: 100vh;
  padding: 4rem 2rem;
  background: #0a0a0a;
  color: white;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
`;

const ResumeContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
`;

const Section = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 15px;
`;

const SectionTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: #fff;
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  padding-left: 2rem;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 1px;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
  }

  &:after {
    content: '';
    position: absolute;
    left: -4px;
    top: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: white;
  }
`;

const ItemHeader = styled.div`
  margin-bottom: 1rem;
`;

const ItemTitle = styled.h4`
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 0.5rem;
`;

const ItemSubtitle = styled.h5`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: normal;
`;

const ItemDate = styled.span`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
`;

const ItemDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
`;

const DownloadButton = styled(motion.a)`
  display: inline-block;
  margin-top: 2rem;
  padding: 1rem 2rem;
  background: white;
  color: #0a0a0a;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const experience = [
  {
    title: "Full Stack Developer",
    company: "Tech Company",
    date: "2023 - Present",
    description: "Led development of multiple web applications using React and Node.js. Implemented responsive designs and optimized application performance."
  },
  {
    title: "Frontend Developer Intern",
    company: "Startup Inc.",
    date: "2022 - 2023",
    description: "Developed and maintained client-side applications. Collaborated with designers to implement pixel-perfect UI components."
  }
];

const education = [
  {
    title: "Bachelor of Technology",
    institution: "University Name",
    date: "2019 - 2023",
    description: "Computer Science and Engineering. Relevant coursework: Data Structures, Algorithms, Web Development, Database Management."
  }
];

function Resume() {
  return (
    <ResumeSection id="resume">
      <Container>
        <Title>Resume</Title>
        <ResumeContent>
          <Section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <SectionTitle>Experience</SectionTitle>
            <Timeline>
              {experience.map((item, index) => (
                <TimelineItem
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <ItemHeader>
                    <ItemTitle>{item.title}</ItemTitle>
                    <ItemSubtitle>{item.company}</ItemSubtitle>
                    <ItemDate>{item.date}</ItemDate>
                  </ItemHeader>
                  <ItemDescription>{item.description}</ItemDescription>
                </TimelineItem>
              ))}
            </Timeline>
          </Section>

          <Section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <SectionTitle>Education</SectionTitle>
            <Timeline>
              {education.map((item, index) => (
                <TimelineItem
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <ItemHeader>
                    <ItemTitle>{item.title}</ItemTitle>
                    <ItemSubtitle>{item.institution}</ItemSubtitle>
                    <ItemDate>{item.date}</ItemDate>
                  </ItemHeader>
                  <ItemDescription>{item.description}</ItemDescription>
                </TimelineItem>
              ))}
            </Timeline>
          </Section>
        </ResumeContent>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center' }}
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
