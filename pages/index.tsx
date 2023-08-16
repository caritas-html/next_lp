import About from '../components/About';
import GlassLayer from '../components/GlassLayer';
import Header from '../components/Header';
import StyledBackground, { StyledBackgroundInverse } from '../styles/Home';

export default function Home() {
  return (
    <>
      <StyledBackground>
        <Header />
        <GlassLayer />
      </StyledBackground>
      <StyledBackgroundInverse>
        <About />
      </StyledBackgroundInverse>
    </>
  );
}
