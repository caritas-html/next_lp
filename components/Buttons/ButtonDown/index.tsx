import StyledArrow from '../../icons/StyledArrow';
import { StyledButton } from './ButtonDownStyles';

interface DownButtonProps {
  onClick: () => void;
}

export default function DownButton({ onClick }: DownButtonProps) {
  return (
    <StyledButton onClick={onClick}>
      <StyledArrow />
    </StyledButton>
  );
}
