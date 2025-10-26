import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Loader() {
  const [text, setText] = useState("");
  const fullText = "PiyushK";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(typing);
    }, 200);
    return () => clearInterval(typing);
  }, []);

  return (
    <motion.div
      className="h-screen w-screen flex items-center justify-center bg-black text-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 1, 0], transition: { duration: 1, delay: 2 } }}
    >
      <motion.h1
        className="font-bold text-5xl tracking-widest font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {text}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          |
        </motion.span>
      </motion.h1>
    </motion.div>
  );
}
