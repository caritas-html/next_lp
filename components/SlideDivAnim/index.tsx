import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const slideLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideDown = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideRight = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const SlideWrapper = styled.div<{ isVisible: boolean; direction: string }>`
  width: 100%;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  animation: ${({ isVisible, direction }) => {
      switch (direction) {
        case 'left':
          return isVisible ? slideLeft : 'none';
        case 'down':
          return isVisible ? slideDown : 'none';
        case 'right':
          return isVisible ? slideRight : 'none';
        default:
          return 'none';
      }
    }}
    0.7s ease-in forwards;

  overflow: hidden;
`;

interface SlideAnimationProps {
  children: React.ReactNode;
  direction: string;
}

export default function SlideAnimation({
  children,
  direction,
}: SlideAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const slide = document.getElementById('slide');
      if (slide) {
        const rect = slide.getBoundingClientRect();
        // prevents animation from playing again when scrolling
        if (rect.top > window.innerHeight || rect.bottom < 0) {
          setIsVisible(false);
          return;
        }

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
    <SlideWrapper id="slide" isVisible={isVisible} direction={direction}>
      {children}
    </SlideWrapper>
  );
}
