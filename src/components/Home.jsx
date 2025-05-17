import styled from 'styled-components';

const HomeSection = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 5vw;
  overflow: hidden;
  background-color: #0a0a0a;

  @media (max-width: 768px) {
    justify-content: center;
    padding-left: 0;
    text-align: center;
  }
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
`;

const NameText = styled.h1`
  font-family: 'Migra', serif;
  font-size: 84px;
  font-weight: 700;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 60px;
  }

  @media (max-width: 480px) {
    font-size: 44px;
  }
`;

function Home() {
  return (
    <HomeSection id="home">
      <BackgroundImage
        style={{
          backgroundImage: `url('/background.jpg')`,
          opacity: 1
        }}
      />
      <TextContainer>
        <IntroText>Hi there 👋🏻, I am</IntroText>
        <NameText>Sanya Garg</NameText>
      </TextContainer>
    </HomeSection>
  );
}

export default Home;
