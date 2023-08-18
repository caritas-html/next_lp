import styled, { keyframes } from 'styled-components';

interface ArticleDivProps {
  align: string;
  justify: string;
  textAlign: string;
}

const slowAppear = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export default styled.article<ArticleDivProps>`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  text-align: ${({ textAlign }) => textAlign};
  color: #fff;
  font-weight: bold;
  font-size: 1.3rem;
  min-width: 280px;

  animation: ${slowAppear} 1s ease-in-out;
  transition: 0.5s;

  &:hover {
    cursor: pointer;
    transition: 0.5s;
  }
`;
