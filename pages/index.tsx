import About from '../components/About';
import DownButton from '../components/Buttons/ButtonDown';
import GlassLayer from '../components/GlassLayer';
import Header from '../components/Header';
import SmoothScroll from '../components/SmoothScroll';
import SpacerTitle from '../components/SpacerTitle';
import StyledBackground, { StyledBackgroundInverse } from '../styles/Home';
import { Kanit } from 'next/font/google';

const kanit = Kanit({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

export default function Home() {
  return (
    <div className={kanit.className}>
      <StyledBackground id="top">
        <Header />
        <GlassLayer />
      </StyledBackground>
      <SmoothScroll to="about">
        <DownButton />
      </SmoothScroll>
      <SpacerTitle id="about">SOBRE</SpacerTitle>
      <StyledBackgroundInverse>
        <About />
      </StyledBackgroundInverse>
    </div>
  );
}
