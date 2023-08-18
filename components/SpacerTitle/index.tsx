import SlideAnimation from '../SlideDivAnim';
import SpacerTitleLayer from './SpacerTitleStyles';

interface SpacerTitleProps {
  children: React.ReactNode;
  id: string;
  className: string;
}

export default function SpacerTitle({
  children,
  id,
  className,
}: SpacerTitleProps) {
  return (
    <>
      <SlideAnimation direction="down">
        <SpacerTitleLayer className={className} id={id}>
          <h3>{children}</h3>
        </SpacerTitleLayer>
      </SlideAnimation>
    </>
  );
}
