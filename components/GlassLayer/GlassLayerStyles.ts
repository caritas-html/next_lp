import styled, { keyframes } from 'styled-components';

const slideDown = keyframes`
  from {
		opacity: 0;
	}
	to {
		opacity: 0.95;
	}
`;

const StyledGlassLayer = styled.div`
  background: url('/bg-02.svg') no-repeat center center/cover;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  height: 85vh;
  filter: grayscale(70%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: -100;

  animation: ${slideDown} 1s ease-in-out forwards;
  overflow: hidden;
`;

export default StyledGlassLayer;
