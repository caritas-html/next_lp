import styled from 'styled-components';

const Hightlight = styled.div`
  position: fixed;
  width: 60px;
  height: 60px;
  border-radius: 50%;

  background: rgba(255, 255, 255, 0);
  border-radius: 50%;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2.1px);
  -webkit-backdrop-filter: blur(2.1px);

  z-index: 9999;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: 0.1s ease, width 0.2 ease, height 0.2 ease, opacity 0.2 ease;
`;

export default Hightlight;
