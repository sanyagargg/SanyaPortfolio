import styled from 'styled-components';
import { motion } from 'framer-motion';

const EducationSection = styled.section`
  padding-top: 70px;
  min-height: 100vh;
  padding: 4rem 2rem;
  background: #0a0a0a;
  color: #ffffff;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    width: 2px;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  justify-content: ${props => props.index % 2 === 0 ? 'flex-end' : 'flex-start'};
  padding-left: ${props => props.index % 2 === 0 ? '0' : '50%'};
  padding-right: ${props => props.index % 2 === 0 ? '50%' : '0'};
  margin: 2rem 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    width: 12px;
    height: 12px;
    background: #ffffff;
    border-radius: 50%;
    transform: translateX(-50%);
  }
`;

const TimelineContent = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 8px;
  width: 80%;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const SchoolName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #ffffff;
`;

const Degree = styled.h4`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.5rem;
`;

const Period = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
`;

const education = [
  {
    school: "Your University Name",
    degree: "Bachelor of Technology in Computer Science",
    period: "2019 - 2023",
    description: "Relevant coursework: Data Structures, Algorithms, Web Development, Database Management Systems, Operating Systems"
  },
  {
    school: "Your High School Name",
    degree: "High School Diploma",
    period: "2017 - 2019",
    description: "Graduated with distinction in Mathematics and Computer Science"
  }
];

function Education() {
  return (
    <EducationSection id="education">
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Education
        </Title>
        <Timeline>
          {education.map((item, index) => (
            <TimelineItem
              key={index}
              index={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <TimelineContent>
                <SchoolName>{item.school}</SchoolName>
                <Degree>{item.degree}</Degree>
                <Period>{item.period}</Period>
                <Description>{item.description}</Description>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </EducationSection>
  );
}

export default Education;
