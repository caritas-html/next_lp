import About from '../components/About';
import DownButton from '../components/Buttons/ButtonDown';
import GlassLayer from '../components/GlassLayer';
import Header from '../components/Header';
import SmoothScroll from '../components/SmoothScroll';
import SpacerTitle from '../components/SpacerTitle';
import StyledBackground, { StyledBackgroundInverse } from '../styles/Home';
import { Kanit } from 'next/font/google';
import useLockScroll from '../hooks/useLockScroll';
import { useEffect, useState } from 'react';

const kanit = Kanit({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

export default function Home() {
  const { isLocked, lockScroll, unlockScroll } = useLockScroll();
  const [logoClick, setLogoClick] = useState(false);

  const handleLogoClick = (state: boolean) => {
    setLogoClick(state);
  };

  useEffect(() => {
    lockScroll();
  }, []);

  return (
    <div className={kanit.className}>
      <StyledBackground id="top">
        <Header />
        <GlassLayer logoClick={handleLogoClick} />
      </StyledBackground>
      <SmoothScroll to="about">
        {logoClick && <DownButton onClick={unlockScroll} />}
      </SmoothScroll>
      <SpacerTitle className="glass" id="about">
        SOBRE
      </SpacerTitle>
      <StyledBackgroundInverse className="glass">
        <About />
      </StyledBackgroundInverse>
    </div>
  );
}
