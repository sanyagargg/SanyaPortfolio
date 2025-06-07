import styled from 'styled-components';

// Fullscreen section
const HomeSection = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #0a0a0a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  position: relative;
`;

// Background video
const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

// Overlay for contrast (optional)
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(10, 10, 10, 0.4); /* darkens video slightly */
  z-index: 0;
`;

// Text on top of video + overlay
const TextContainer = styled.div`
  position: relative;
  z-index: 1;
  color: #f8f0de;
`;

const IntroText = styled.h2`
  font-family: 'DM Sans', sans-serif;
  font-size: 32px;
  font-weight: 400;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const NameText = styled.h1`
  font-family: 'Press Start 2P', cursive;
  font-size: 90px;
  font-weight: 400;
  margin: 2px 0 0;
  line-height: 1.4;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 60px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const NameWrapper = styled.div`
  margin-top: -200px; /* Adjust this value as needed */
`;


function Home() {
  return (
    <HomeSection id="home">
      <BackgroundVideo autoPlay muted loop playsInline>
        <source src="/backgroundvid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </BackgroundVideo>
      <Overlay />
      <TextContainer>
      <IntroText></IntroText>
      <NameWrapper>
        <NameText>Sanya</NameText>
        <NameText>Garg</NameText>
      </NameWrapper>
      </TextContainer>
    </HomeSection>
  );
}

export default Home;
