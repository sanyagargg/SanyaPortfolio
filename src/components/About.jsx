import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding-top: 70px;
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
  }
`;

const VideoContainer = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 50%;
  overflow: hidden;
  background: #222;
  display: flex;
  align-items: center;
  justify-content: center;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;




const Content = styled(motion.div)`
  color: white;
  font-family: 'DM Sans', sans-serif;
`;

const Title = styled.h2`
  font-family: 'Migra', serif;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #fff;
  letter-spacing: 0.05em;
`;

const Description = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);

  p {
    margin-bottom: 1.5rem;
  }
`;

function About() {
  return (
    <AboutSection id="about">
      <Container
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <VideoContainer>
          <video
            src="/profile.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </VideoContainer>

        <Content>
          <Title>About Me</Title>
          <Description>
            <p>I'm an aspiring software engineer from Delhi 🌆 and a final-year student at Netaji Subhas University of Technology 🎓. I'm currently diving into web development, ML, DL, DSA, and everything the world of Computer Science has to offer 💻✨. Sharpening my skills, solving problems, and figuring out how to make the internet a cooler place—one line of code at a time .</p>
            <p>Graduating from the WE Program by Google & TalentSprint was a game-changer 🎯, shaping me into the problem-solver I am today 🧠. I bring determination, creativity, and the ability to adapt faster than a website loading on Vercel 🚀.</p>
            <p>Always up for a challenge, a tech chat, or just geeking out—let's connect! 🤖💬</p>
          </Description>
        </Content>
      </Container>
    </AboutSection>
  );
}

export default About;
