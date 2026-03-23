import { motion } from "framer-motion";

const fade = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
};

export function PageTransition({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={fade.initial}
      animate={fade.animate}
      exit={fade.exit}
      transition={fade.transition}
    >
      {children}
    </motion.div>
  );
}
