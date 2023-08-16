import styled, { keyframes } from 'styled-components';

const slowAppear = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const ProfilePhoto = styled.img`
  width: 370px;
  height: 65%;
  object-fit: cover;
  border-radius: 50%;
  filter: grayscale(100%);
  border: 5px solid #fff;

  &:hover {
    filter: grayscale(0%);
    transition: 0.5s;
  }

  animation: ${slowAppear} 1s ease-in-out;
  transition: 0.5s;
`;

export default ProfilePhoto;
