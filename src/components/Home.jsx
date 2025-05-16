import styled from 'styled-components';
import { motion } from 'framer-motion';

const HomeSection = styled.section`
  padding-top: 70px; // Add padding for navbar
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  overflow: hidden;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

const Content = styled(motion.div)`
  text-align: center;
  color: white;
  z-index: 1;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  backdrop-filter: blur(5px);
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin: 0;
  font-weight: 700;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin: 1rem 0;
  opacity: 0.9;
`;

function Home() {
  return (
    <HomeSection id="home">
      {/* If using video background */}
      <BackgroundVideo autoPlay muted loop>
        <source src="/background.mp4" type="video/mp4" />
      </BackgroundVideo>

      {/* If using image background */}
      {/* <BackgroundImage style={{ backgroundImage: `url('/background.jpg')` }} /> */}
      
      <Content
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Sanya Garg
        </Title>
        <Subtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Full Stack Developer & Designer
        </Subtitle>
      </Content>
    </HomeSection>
  );
}

export default Home;