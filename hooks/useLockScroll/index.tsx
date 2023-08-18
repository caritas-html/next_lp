import { useState } from 'react';

export default function useLockScroll() {
  const [isLocked, setIsLocked] = useState(false);

  const lockScroll = () => {
    document.body.style.overflow = 'hidden';
    setIsLocked(true);
  };

  const unlockScroll = () => {
    document.body.style.overflow = '';
    setIsLocked(false);
  };

  return {
    isLocked,
    lockScroll,
    unlockScroll,
  };
}
