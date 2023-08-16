import styled from 'styled-components';

const ProfilePhoto = styled.img`
  width: 370px;
  height: 75%;
  object-fit: cover;
  border-radius: 50%;
  filter: grayscale(100%);

  &:hover {
    filter: grayscale(0%);
    transition: 0.5s;
  }
`;

export default ProfilePhoto;
