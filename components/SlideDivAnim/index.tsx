import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const SlideWrapper = styled.div<{ isVisible: boolean }>`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${({ isVisible }) => (isVisible ? slideIn : 'none')} 0.7s
    ease-in-out forwards;
  opacity: 0;
`;

interface SlideAnimationProps {
  children: React.ReactNode;
}

export default function SlideAnimation({ children }: SlideAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const slideLeft = document.getElementById('slideLeft');
      if (slideLeft) {
        const rect = slideLeft.getBoundingClientRect();
        setIsVisible(rect.top <= window.innerHeight && rect.bottom >= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <SlideWrapper id="slideLeft" isVisible={isVisible}>
      {children}
    </SlideWrapper>
  );
}
