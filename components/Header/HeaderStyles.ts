import styled, { keyframes } from 'styled-components';

interface HeaderDivProps {
  direction: string;
}

const slideRight = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideLeft = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const HeaderContainer = styled.div`
  height: 15vh;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
`;

export const InsideHeaderDiv = styled.div<{ $sidebar?: string }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.$sidebar};
`;

const HeaderDiv = styled.div<HeaderDivProps>`
  background: rgba(0, 0, 0, 0.85);
  width: 50%;
  height: 15vh;
  display: flex;
  align-items: center;
  padding: 0 20px;
  transform: ${({ direction }) =>
    direction === 'right' ? 'translateX(-100%)' : 'translateX(100%)'};
  animation: ${({ direction }) =>
      direction === 'right' ? slideRight : slideLeft}
    0.7s ease-in-out forwards;
`;

export default HeaderDiv;
