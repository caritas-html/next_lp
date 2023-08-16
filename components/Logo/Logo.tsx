import styled from 'styled-components';

interface LogoProps {
  size: string;
}

export function Logo({ size }: LogoProps) {
  const LogoDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  `;

  return (
    <div style={{ width: size, height: size }}>
      <LogoDiv></LogoDiv>
    </div>
  );
}
