import styled, { keyframes } from 'styled-components';

const opacityDown = keyframes`
    0%, 100% {
        opacity: 1;
        rotate: 13deg;
    }
    50% {
        opacity: 0.4;
        rotate: -13deg;
    }
`;

export const LogoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 370px;
  height: 65%;

  background: url('/logo-01.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;

  &:hover {
    animation: ${opacityDown} 1.6s infinite;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 530px;
  margin: 0 auto;
  cursor: pointer;
  flex-wrap: wrap;

  overflow: hidden;
`;

export default LogoContainer;
