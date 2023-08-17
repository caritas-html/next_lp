import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

const SlideWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: translateX(-100%);
  transition: opacity 0.5s ease, transform 0.5s ease;

  &.visible {
    opacity: 1;
    transform: translateX(0);
  }
`;

interface SlideAnimationProps {
  children: React.ReactNode;
}

export default function SlideAnimation({ children }: SlideAnimationProps) {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <SlideWrapper ref={ref} className={inView ? 'visible' : ''}>
      {children}
    </SlideWrapper>
  );
}
