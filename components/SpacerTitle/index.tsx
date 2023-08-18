import SpacerTitleLayer from './SpacerTitleStyles';

interface SpacerTitleProps {
  children: React.ReactNode;
  id: string;
}

export default function SpacerTitle({ children, id }: SpacerTitleProps) {
  return (
    <>
      <SpacerTitleLayer id={id}>
        <h3>{children}</h3>
      </SpacerTitleLayer>
    </>
  );
}
