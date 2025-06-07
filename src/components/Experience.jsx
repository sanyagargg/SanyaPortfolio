import styled from 'styled-components';
import { motion } from 'framer-motion';

const ExperienceSection = styled.section`
  font-family: 'Press Start 2P', cursive;
  position: relative;
  padding-top: 70px;
  min-height: 100vh;
  padding: 4rem 2rem;
  background-image: url('/experience.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #ffffff;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(10, 10, 10, 0.4); /* dark overlay */
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-family: 'Press Start 2P', cursive;
  font-size: 1.2rem;
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
  background: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
`;

const Company = styled.h3`
  font-family: 'Press Start 2P', cursive;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #ffffff;
`;

const Position = styled.h4`
  font-family: 'Press Start 2P', cursive;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.5rem;
`;

const Period = styled.p`
  font-family: 'Press Start 2P', cursive;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
`;

const LinksWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

const LinkTag = styled.a`
  font-family: 'Press Start 2P', cursive;
  color: #ffa500;
  text-decoration: underline;
  font-size: 0.65rem;

  &:hover {
    color: #ffcc80;
  }
`;

const Description = styled.div`
  font-family: 'Press Start 2P', cursive;
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.8);
`;

const BulletList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const BulletPoint = styled.li`
  font-family: 'Press Start 2P', cursive;
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
  line-height: 1.8;

  &:before {
    content: '•';
    position: absolute;
    left: 0;
    color: rgba(255, 255, 255, 0.6);
  }
`;

const experience = [
  {
    company: "Charismatic Electronics",
    position: "Full Stack Developer Intern",
    period: "January 2025 - April 2025",
    links: {
      live: "https://charismaticelectronics.vercel.app/",
      github: "https://charismaticelectronics.vercel.app/",
      certificate: "https://charismaticelectronics.vercel.app/"
    },
    achievements: [
      "Developed a responsive e-commerce platform using the MERN stack.",
      "Built a 'Custom Design' form with file upload and Nodemailer alerts.",
      "Used MongoDB for efficient order and request data handling.",
      "Followed Git best practices and collaborated with designers."
    ]
  },
  {
    company: "DRDO (Defence Research & Development Organization)",
    position: "Software Intern",
    period: "May 2025 – July 2025",
    links: {
      live: "https://charismaticelectronics.vercel.app/",
      github: "https://charismaticelectronics.vercel.app/",
      certificate: "https://charismaticelectronics.vercel.app/"
    },
    achievements: [
      "Built a quantum simulation suite using Python and Qiskit.",
      "Created modular architecture for circuits and visualizations.",
      "Simulated teleportation and Bell states with visual tools.",
      "Used Git, testing, and code reviews throughout development."
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
              <LinksWrapper>
                <LinkTag href={item.links.live} target="_blank" rel="noopener noreferrer">Live Site</LinkTag>
                <LinkTag href={item.links.github} target="_blank" rel="noopener noreferrer">GitHub</LinkTag>
                <LinkTag href={item.links.certificate} target="_blank" rel="noopener noreferrer">Certificate</LinkTag>
              </LinksWrapper>
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
