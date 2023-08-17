import styled from 'styled-components';

const AboutLayer = styled.div`
  background: rgba(131, 162, 153, 0.36);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.3px);

  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: -100;
`;

export default AboutLayer;
