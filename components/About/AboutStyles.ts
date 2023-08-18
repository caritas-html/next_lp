import styled from 'styled-components';

interface AboutLayerProps {
  background: string;
  textAlign: string;
}

export const AboutLayer = styled.div`
  background: rgba(129, 160, 151, 0.4);
  backdrop-filter: blur(40px);
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

const ParagraphContainer = styled.div<AboutLayerProps>`
  width: 80%;
  border-radius: 16px;
  background: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100px;
  opacity: 0.8;

  & > p {
    color: #000;
    font-size: 1.3rem;
    font-weight: 500;
    text-align: ${({ textAlign }) => textAlign};
    padding: 1rem;
  }
`;

export default ParagraphContainer;
