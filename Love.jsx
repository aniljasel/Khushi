import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Ghost } from "lucide-react";

export default function UltimateFunProposal() {
  const [accepted, setAccepted] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [noClicked, setNoClicked] = useState(false);

  const moveNoButton = () => {
    setNoPosition({
      x: (Math.random() - 0.5) * window.innerWidth * 0.8,
      y: (Math.random() - 0.5) * window.innerHeight * 0.8,
    });
  };

  return (
    <div className="relative flex items-center justify-center w-screen h-screen bg-gradient-to-r from-yellow-400 to-red-500 text-white overflow-hidden">
      {/* Floating Hearts */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: -window.innerHeight }}
          transition={{ duration: 4, repeat: Infinity, delay: i * 0.3 }}
          className="absolute text-red-500 text-4xl"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
        >
          ❤️
        </motion.div>
      ))}

      <div className="p-8 text-center bg-white text-black shadow-xl rounded-2xl w-[30rem] relative z-10">
        <h1 className="text-5xl font-bold text-red-600">Marry Me? 💍</h1>
        <p className="text-lg mt-4">You can't escape this proposal! 😆</p>
        <div className="relative flex justify-center gap-8 mt-6">
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="px-8 py-4 bg-green-500 text-white font-bold rounded-xl shadow-md flex items-center gap-2 text-xl"
            onClick={() => setAccepted(true)}
          >
            YES! <Heart />
          </motion.button>
          {!noClicked ? (
            <motion.button
              animate={{ x: noPosition.x, y: noPosition.y }}
              transition={{ type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute px-8 py-4 bg-red-500 text-white font-bold rounded-xl shadow-md flex items-center gap-2 text-xl"
              onMouseEnter={moveNoButton}
              onClick={() => setNoClicked(true)}
            >
              NO <Ghost />
            </motion.button>
          ) : (
            <p className="mt-4 text-xl font-bold text-red-600">Haha! No is not an option! 🤣</p>
          )}
        </div>
        {accepted && (
          <div className="mt-6 text-center">
            <h2 className="text-3xl font-bold text-green-600">Yay! Love you forever! ❤️</h2>
            <p className="text-xl">Let's plan our dream wedding! 🎉</p>
          </div>
        )}
      </div>
    </div>
  );
}
