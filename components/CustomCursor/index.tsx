import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Hightlight from './CustomCursorStyles';

const CursorContainer = styled.div`
  position: fixed;
  width: 60px;
  height: 60px;
  pointer-events: none;
  z-index: 9999;
`;

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -10, y: -10 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <CursorContainer
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      >
        <Hightlight />
      </CursorContainer>
    </>
  );
}
