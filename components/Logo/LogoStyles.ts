import styled, { keyframes } from 'styled-components';

const opacityDown = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

export const LogoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 370px;
  height: 75%;

  background: url('/logo-01.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  margin: 0 auto;
  cursor: pointer;

  overflow: hidden;
`;

export default LogoContainer;
