import styled from 'styled-components';

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

function Home() {
  return (
    <HomeSection id="home">
      <BackgroundImage
        style={{
          backgroundImage: `url('/background.jpg')`,
          opacity: 1
        }}
      />
    </HomeSection>
  );
}

export default Home;