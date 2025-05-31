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

// Background image without opacity
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

// Overlay for contrast
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
 
  z-index: 0;
`;

// Text on top of image + overlay
const TextContainer = styled.div`
  position: relative;
  z-index: 1;
  color: #f8f0de;
`;

// Normal font for "Hi, I'm"
const IntroText = styled.h2`
  font-family: 'DM Sans', sans-serif;
  font-size: 32px;
  font-weight: 400;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

// "Sanya Garg" in Love Light font
const NameText = styled.h1`
  font-family: 'Love Light', cursive;
  font-size: 96px;
  font-weight: 400;
  margin: 10px 0 0;

  @media (max-width: 768px) {
    font-size: 64px;
  }

  @media (max-width: 480px) {
    font-size: 48px;
  }
`;

function Home() {
  return (
    <HomeSection id="home">
      <BackgroundImage style={{ backgroundImage: `url('/backgroundss.png')` }} />
      <Overlay />
      <TextContainer>
        <IntroText>Hi 👋🏻, I'm</IntroText>
        <NameText>Sanya Garg</NameText>
      </TextContainer>
    </HomeSection>
  );
}

export default Home;
