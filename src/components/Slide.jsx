import { motion } from 'framer-motion';

export default function Slide({ data, onNext }) {
  return (
    <motion.div
      className="slide"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <h2>{data.title}</h2>
      <p>{data.text}</p>
      <button onClick={onNext}>Próximo 💖</button>
    </motion.div>
  );
}
