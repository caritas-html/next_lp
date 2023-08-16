import styled, { keyframes, css } from 'styled-components';

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
  height: 100px;
  display: flex;
  flex-wrap: wrap;
  background: rgba(32, 152, 157, 0.26);
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.4px);
  overflow: hidden;
`;

export const InsideHeaderDiv = styled.div<{ $sidebar?: string }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.$sidebar};
`;

const HeaderDiv = styled.div<HeaderDivProps>`
  background: rgba(0, 0, 0, 0.7);
  width: 50%;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  transform: ${({ direction }) =>
    direction === 'right' ? 'translateX(-100%)' : 'translateX(100%)'};
  animation: ${({ direction }) =>
      direction === 'right' ? slideRight : slideLeft}
    1s ease-in-out forwards;
`;

export default HeaderDiv;
