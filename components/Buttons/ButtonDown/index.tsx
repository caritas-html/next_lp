import StyledArrow from '../../icons/StyledArrow';
import { StyledButton } from './ButtonDownStyles';
import { Link } from 'react-scroll';

export default function DownButton() {
  return (
    <StyledButton>
      <Link to="about" smooth={true} duration={700} />
      <StyledArrow />
    </StyledButton>
  );
}