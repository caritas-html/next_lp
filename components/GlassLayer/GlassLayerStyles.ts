import styled, { keyframes } from 'styled-components';

interface LogoContainerProps {
  isClicked: boolean;
}

const slideDown = keyframes`
  from {
		transform: translateY(-100%);
	}
	to {
		transform: translateY(0);
	}
`;

const StyledGlassLayer = styled.div`
  background: rgba(167, 236, 239, 0.5);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.4px);
  height: 85vh;
  filter: grayscale(40%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: -100;

  animation: ${slideDown} 1s ease-in-out forwards;
  overflow: hidden;
`;

export default StyledGlassLayer;
