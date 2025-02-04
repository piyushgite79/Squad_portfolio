import React from 'react';
import { motion } from 'framer-motion';

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
}

export default function FlipCard({ front, back }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <div
      className="relative w-full h-[400px] cursor-pointer perspective"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d transition-transform duration-500"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        <div className="absolute w-full h-full backface-hidden bg-gray-900 rounded-xl p-6 border border-white/10">
          {front}
        </div>
        <div className="absolute w-full h-full backface-hidden bg-gray-900 rounded-xl p-6 border border-white/10 [transform:rotateY(180deg)]">
          {back}
        </div>
      </motion.div>
    </div>
  );
}