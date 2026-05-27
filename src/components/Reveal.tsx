import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function Reveal({ children, delay = 0, className, style }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.42, delay, ease: 'easeOut' as const }}
    >
      {children}
    </motion.div>
  );
}
