import { Link } from 'react-scroll';

interface SmoothScrollProps {
  to: string;
  children: React.ReactNode;
}

export default function SmoothScroll({ to, children }: SmoothScrollProps) {
  return (
    <>
      <Link to={to} smooth={true} duration={700} offset={100}>
        {children}
      </Link>
    </>
  );
}
