import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HomeSection = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  overflow: hidden;
  background-color: #0a0a0a;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
`;

const Content = styled(motion.div)`
  text-align: center;
  color: white;
  z-index: 2;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  backdrop-filter: blur(5px);
  position: relative;
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
  useEffect(() => {
    // Check if background files exist
    fetch('/background.mp4')
      .then(response => {
        if (!response.ok) throw new Error('Video not found');
        console.log('background.mp4 exists');
      })
      .catch(error => console.error('Error loading video:', error));

    fetch('/background.jpg')
      .then(response => {
        if (!response.ok) throw new Error('Image not found');
        console.log('background.jpg exists');
      })
      .catch(error => console.error('Error loading image:', error));
  }, []);
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoError = () => {
    console.error('Video failed to load');
    setVideoError(true);
  };

  const handleVideoLoad = () => {
    console.log('Video loaded successfully');
    setVideoLoaded(true);
  };
  return (
    <HomeSection id="home">
      <BackgroundVideo
        autoPlay
        muted
        loop
        playsInline
        onError={handleVideoError}
        onLoadedData={handleVideoLoad}
      >
        <source src="/background.mp4" type="video/mp4" />
      </BackgroundVideo>

      {videoError && (
        <BackgroundImage
          style={{
            backgroundImage: `url('/background.jpg')`,
            opacity: 1
          }}
        />
      )}
      
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