import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/** Subtle cursor-following glow for premium feel */
export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 150, damping: 25 });
  const springY = useSpring(y, { stiffness: 150, damping: 25 });

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    setEnabled(finePointer);
    if (!finePointer) return;

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-[9998] h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 mix-blend-screen"
      style={{
        left: springX,
        top: springY,
        background:
          'radial-gradient(circle, rgba(56,189,248,0.35) 0%, rgba(139,92,246,0.15) 40%, transparent 70%)',
      }}
      aria-hidden
    />
  );
}
