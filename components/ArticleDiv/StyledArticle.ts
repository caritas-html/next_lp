import styled from 'styled-components';

interface ArticleDivProps {
  align: string;
  justify: string;
  textAlign: string;
}

export default styled.article<ArticleDivProps>`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  text-align: ${({ textAlign }) => textAlign};
  color: #000;
  font-weight: bold;
  font-size: 1.3rem;

  &:hover {
    cursor: pointer;
    color: #fff;
    transition: 0.5s;
  }
`;
