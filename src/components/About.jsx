import styled from 'styled-components';
import { motion } from 'framer-motion';

// Background image
const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/AboutMe.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
`;

// Overlay
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(10, 10, 10, 0.4);
  z-index: 1;
`;

// Section container
const AboutSection = styled.section`
  position: relative;
  padding-top: 70px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  overflow: hidden;
`;

// Grid layout
const Container = styled(motion.div)`
  max-width: 1400px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  z-index: 2;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

// Profile image
const ImageContainer = styled(motion.div)`
  width: 330px;
  height: 330px;
  border-radius: 100%;
  overflow: hidden;
  background: rgba(10, 10, 10, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 60px; 


  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
    margin: 0 auto;
  }
`;

// Text block
const Content = styled(motion.div)`
  color: white;
  margin-left: -160px;

  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center;
  }
`;

// Title styling
const Title = styled.h2`
  font-family: 'Press Start 2P', cursive;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #fff;
  line-height: 1.6;
`;

// Description text
const Description = styled.div`
  font-family: 'Press Start 2P', cursive;
  font-size: 0.7rem;
  line-height: 1.9;
  color: rgba(255, 255, 255, 0.85);
  max-width: 95%;

  p {
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 0.55rem;
    max-width: 100%;
  }
`;

// Skills wrapper
const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2rem;
`;

// Single skill pill
const Skill = styled(motion.span)`
  font-family: 'Press Start 2P', cursive;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.5rem;
  color: #fff;
`;

// Skills list
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
      <BackgroundImage />
      <Overlay />

      <Container
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Profile Image */}
        <ImageContainer
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src="/profile.jpg" alt="Profile" />
        </ImageContainer>

        {/* About Content */}
        <Content
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Title>About Me</Title>
          <Description>
            <p>I’m a final-year Computer Science student at NSUT, Delhi, with a passion for building, learning, and solving problems through code. From web development to machine learning and deep learning, I’m diving deep into everything tech has to offer.</p>
            <p>The WE Program by Google & TalentSprint was a turning point in my journey—it sharpened my problem-solving skills and pushed me to grow fast. I love tackling challenges, adapting on the fly, and bringing creativity into every project I take on.</p>
            <p>Whether it’s building something new or exploring complex algorithms, I’m always looking to grow and collaborate. Let’s connect and create something meaningful!</p>
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
