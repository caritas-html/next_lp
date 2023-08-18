import styled, { keyframes } from 'styled-components';

const SpacerTitleLayer = styled.div`
  background: url('div-bg-06.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > h3 {
    color: #fff;
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
    padding: 0.75rem;
  }
`;

export default SpacerTitleLayer;
