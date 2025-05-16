import styled from 'styled-components';
import { motion } from 'framer-motion';

const ExperienceSection = styled.section`
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

const ExperienceGrid = styled.div`
  display: grid;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
`;

const ExperienceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
`;

const Company = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #ffffff;
`;

const Position = styled.h4`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.5rem;
`;

const Period = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 1rem;
`;

const Description = styled.div`
  color: rgba(255, 255, 255, 0.8);
`;

const BulletList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const BulletPoint = styled.li`
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
  line-height: 1.6;
  
  &:before {
    content: '•';
    position: absolute;
    left: 0;
    color: rgba(255, 255, 255, 0.6);
  }
`;

const experience = [
  {
    company: "Tech Company Name",
    position: "Software Developer Intern",
    period: "June 2022 - August 2022",
    achievements: [
      "Developed and maintained full-stack web applications using React and Node.js",
      "Implemented responsive UI components and improved website performance by 30%",
      "Collaborated with senior developers on code reviews and feature implementations"
    ]
  },
  {
    company: "Another Company Name",
    position: "Frontend Developer",
    period: "September 2022 - Present",
    achievements: [
      "Led the development of a new customer-facing dashboard using React and TypeScript",
      "Reduced page load time by 40% through code optimization and lazy loading",
      "Mentored junior developers and conducted technical interviews"
    ]
  }
];

function Experience() {
  return (
    <ExperienceSection id="experience">
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Work Experience
        </Title>
        <ExperienceGrid>
          {experience.map((item, index) => (
            <ExperienceCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Company>{item.company}</Company>
              <Position>{item.position}</Position>
              <Period>{item.period}</Period>
              <Description>
                <BulletList>
                  {item.achievements.map((achievement, i) => (
                    <BulletPoint key={i}>{achievement}</BulletPoint>
                  ))}
                </BulletList>
              </Description>
            </ExperienceCard>
          ))}
        </ExperienceGrid>
      </Container>
    </ExperienceSection>
  );
}

export default Experience;
