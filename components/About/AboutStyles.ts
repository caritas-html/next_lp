import styled from 'styled-components';

interface AboutLayerProps {
  textAlign: string;
}

export const AboutLayer = styled.div`
  background: rgba(129, 160, 151, 0.4);
  backdrop-filter: blur(40px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.3px);

  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  z-index: -100;
`;

const ParagraphContainer = styled.div<AboutLayerProps>`
  width: 80%;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin: 1.2rem 0;

  opacity: 0.8;

  & > p {
    color: #000;
    font-size: 1.3rem;
    font-weight: 600;
    text-align: ${({ textAlign }) => textAlign};
    padding: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
`;

export default ParagraphContainer;
