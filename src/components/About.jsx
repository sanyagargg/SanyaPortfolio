import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding-top: 70px; // Add padding for navbar
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background: #0a0a0a;
`;

const Container = styled(motion.div)`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Content = styled(motion.div)`
  color: white;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #fff;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Skill = styled(motion.span)`
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  color: #fff;
`;

const skills = [
  "React.js",
  "Node.js",
  "JavaScript",
  "TypeScript",
  "HTML/CSS",
  "SQL",
  "Git",
  "UI/UX Design"
];

function About() {
  return (
    <AboutSection id="about">
      <Container
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <ImageContainer
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src="/profile.jpg" alt="Sanya Garg" />
        </ImageContainer>
        
        <Content>
          <Title>About Me</Title>
          <Description>
          <p>I am an aspiring software engineer from Delhi and a pre-final-year student at Netaji Subhas University of Technology (formerly, NSIT). Web development, machine learning and the world of computer science in general has me hooked, and I love the challenge of turning ideas into sleek and functional applications.</p>
          <p> </p>
          <p>I am also a Google WE Scholar. This program shaped my journey, fueled my passion for problem-solving and now I am on a mission to write clean code and build cool projects.</p>
          <p> </p>
          <p>I bring determination, adaptibility, and just the right amount of stubborness to debug my code until it works.</p>
          </Description>
          
          <SkillsContainer>
            {skills.map((skill, index) => (
              <Skill
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {skill}
              </Skill>
            ))}
          </SkillsContainer>
        </Content>
      </Container>
    </AboutSection>
  );
}

export default About;
