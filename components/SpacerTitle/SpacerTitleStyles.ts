import styled from 'styled-components';

const SpacerTitleLayer = styled.div`
  background: url('div-bg-05.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100px;
  width: 100%;
  border: 1px solid #f2f2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > h3 {
    color: #f1f1f1;
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
    padding: 0.75rem;
  }
`;

export default SpacerTitleLayer;
