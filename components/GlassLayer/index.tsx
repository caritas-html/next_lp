import React, { useState } from 'react';
import StyledGlassLayer from './GlassLayerStyles';
import Logo from '../Logo';
import LogoContainer from '../Logo/LogoStyles';
import LogoProfile from '../LogoProfile';

export default function GlassLayer() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <StyledGlassLayer>
      <div>
        {!isClicked ? (
          <LogoContainer onClick={(e) => setIsClicked(true)}>
            <Logo />
          </LogoContainer>
        ) : (
          <LogoContainer>
            <LogoProfile />
          </LogoContainer>
        )}
      </div>
    </StyledGlassLayer>
  );
}
