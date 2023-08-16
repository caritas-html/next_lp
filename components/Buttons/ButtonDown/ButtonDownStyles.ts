import styled, { keyframes } from 'styled-components';

const bounceButton = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0);
    }
`;

export const StyledButton = styled.button`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background: rgba(183, 247, 244, 0.28);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  border: none;
  cursor: pointer;
  transition: 0.5s;

  position: fixed;
  bottom: 20px;
  left: 20px;
  line-height: 0;

  dipslay: flex;
  justify-content: center;
  align-items: flex-end;

  &:hover {
    background: rgba(183, 247, 244, 0.5);
    transition: 0.5s;
  }

  animation: ${bounceButton} 0.7s ease-in-out infinite;
`;
