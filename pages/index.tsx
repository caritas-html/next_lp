import About from '../components/About';
import DownButton from '../components/Buttons/ButtonDown';
import GlassLayer from '../components/GlassLayer';
import Header from '../components/Header';
import SmoothScroll from '../components/SmoothScroll';
import StyledBackground, { StyledBackgroundInverse } from '../styles/Home';

export default function Home() {
  return (
    <>
      <StyledBackground id="top">
        <Header />
        <GlassLayer />
      </StyledBackground>
      <SmoothScroll to="mid">
        <DownButton />
      </SmoothScroll>
      <StyledBackgroundInverse id="mid">
        <About />
      </StyledBackgroundInverse>
    </>
  );
}
