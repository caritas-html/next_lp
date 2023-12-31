import styled from 'styled-components';

const StyledBackground = styled.div`
  background: url('/bg-01.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
`;

export const StyledBackgroundInverse = styled.div`
  background: url('/bg-03.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: fit-content;
  width: 100%;
`;

export default StyledBackground;
