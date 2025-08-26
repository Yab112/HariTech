import { motion } from "framer-motion";
import React from "react";

 const stats = [
    {
      number: 500,
      label: "Projects Delivered",
      sublabel: "Enterprise Solutions",
    },
    {
      number: 150,
      label: "Global Clients",
      sublabel: "Fortune 500 Companies",
    },
    {
      number: 99.9,
      label: "Uptime SLA",
      sublabel: "Guaranteed Performance",
    },
    { number: 24, label: "Support", sublabel: "Technical Assistance" },
  ];

const Stat = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="w-full mx-auto bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 "
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.2 + index * 0.1,
              type: "spring",
              stiffness: 200,
            }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="text-center p-3 sm:p-4  "
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + index * 0.1 }}
              className="text-sm sm:text-5xl font-black text-blue-600 dark:text-blue-400"
            >
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.5,
                  delay: 1.5 + index * 0.1,
                  ease: "easeOut",
                }}
                className="inline-block"
              >
                {typeof stat.number === "number"
                  ? Math.round(stat.number)
                  : stat.number}
                {typeof stat.number === "number" && stat.label === "Uptime SLA"
                  ? "%"
                  : ""}
              </motion.span>
            </motion.div>
            <div className="text-xs sm:text-2xl text-slate-700 dark:text-slate-200 font-semibold mt-1">
              {stat.label}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              {stat.sublabel}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Stat;
