"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const sdgGoals = [
  "1. No Poverty", "2. Zero Hunger", "3. Good Health", "4. Quality Education",
  "5. Gender Equality", "6. Clean Water", "7. Clean Energy", "8. Economic Growth",
  "9. Industry & Innovation", "10. Reduced Inequalities", "11. Sustainable Cities",
  "12. Responsible Consumption", "13. Climate Action", "14. Life Below Water",
  "15. Life on Land", "16. Peace & Justice", "17. Partnerships"
];

export default function About() {
  const [currentSdg, setCurrentSdg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSdg((prev) => (prev + 1) % sdgGoals.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const imageVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: { delay: delay, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <section id="about" className="relative overflow-hidden bg-transparent pt-24 pb-16">
      {/* Background gradient glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="bg-gradient-radial absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 from-orange-600/20 via-orange-900/10 to-transparent blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 h-[400px] w-[400px] rounded-full bg-orange-500/15 blur-[120px]"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Left Section - Text Content */}
          <div className="z-10 flex h-full flex-col items-center justify-center pb-10 lg:pb-24 text-center lg:items-start lg:text-left">
            
            <div className="relative w-full">
              {/* Sleek left border glow */}
              <div className="absolute -left-6 top-0 hidden h-full w-1 rounded-full bg-gradient-to-b from-orange-500 via-amber-500 to-transparent opacity-80 lg:block blur-[1px]"></div>

              {/* Status Badge */}
              <div 
                className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 opacity-0 backdrop-blur-sm shadow-[0_0_15px_rgba(249,115,22,0.15)]"
                style={{ animation: "fadeIn 0.8s ease-out 0.1s forwards" }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500"></span>
                </span>
                <span className="font-cyber text-xs font-bold tracking-widest text-orange-400 uppercase">
                  Algorithm X Edition
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl leading-[1.15] font-bold tracking-tight text-white drop-shadow-sm">
                Innovating for a
                <br />
                <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  Sustainable Future
                </span>
              </h2>

              {/* Description */}
              <div className="font-inter flex flex-col gap-5 text-sm sm:text-base leading-relaxed text-gray-300/90 max-w-xl mx-auto lg:mx-0">
                <p className="opacity-0" style={{ animation: "fadeIn 0.8s ease-out 0.3s forwards" }}>
                  <strong className="font-semibold text-white">Algorithm X</strong> is our signature 32-hour hackathon designed to push the boundaries of technology. 
                  This edition, we are directly targeting the UN's 17 Sustainable Development Goals, 
                  challenging participants to code for humanity.
                </p>

                <p className="opacity-0" style={{ animation: "fadeIn 0.8s ease-out 0.5s forwards" }}>
                  Build impactful solutions—from climate action to clean energy—and join a collaborative 
                  environment where your code drives measurable, global change.
                </p>
              </div>

              {/* Call to Action & SDG Tracker */}
              <div 
                className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full opacity-0"
                style={{ animation: "fadeIn 0.8s ease-out 0.7s forwards" }}
              >
                <button
                  className="font-cyber group relative w-full sm:w-auto h-[48px] overflow-hidden rounded-lg border border-orange-500 bg-gradient-to-r from-orange-600 to-orange-700 px-6 text-sm font-semibold text-white shadow-[0_0_20px_rgba(255,140,66,0.3)] transition-all hover:scale-105 active:scale-95 flex items-center justify-center"
                  onClick={() => (window.location.href = "https://unstop.com")}
                >
                  <div className="absolute inset-0 w-full translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-[100%]" />
                  <span className="relative z-10 whitespace-nowrap tracking-wider">LEARN MORE & REGISTER</span>
                </button>

                <div className="group relative w-full sm:w-[320px] h-[48px] flex items-center overflow-hidden rounded-lg border border-orange-500/30 bg-neutral-900/80 shadow-[0_0_15px_rgba(249,115,22,0.1)] backdrop-blur-md">
                  <div className="absolute inset-0 w-[200%] translate-x-[-100%] bg-gradient-to-r from-transparent via-orange-500/10 to-transparent transition-transform duration-1000 group-hover:translate-x-[100%]" />
                  
                  <div className="relative flex h-full shrink-0 items-center justify-center border-r border-orange-500/30 bg-orange-950/40 px-3 sm:px-4">
                    <span className="font-terminal text-xs sm:text-sm tracking-widest text-orange-500 uppercase">
                      SDG GOAL
                    </span>
                  </div>

                  <div className="relative flex h-full flex-1 items-center justify-center px-2 overflow-hidden">
                    <AnimatePresence mode="popLayout">
                      <motion.div
                        key={currentSdg}
                        initial={{ y: 20, opacity: 0, filter: "blur(2px)" }}
                        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                        exit={{ y: -20, opacity: 0, filter: "blur(2px)" }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="font-inter absolute w-full px-2 text-center leading-tight bg-gradient-to-r from-orange-200 to-amber-400 bg-clip-text text-sm font-bold tracking-wide text-transparent uppercase drop-shadow-[0_0_8px_rgba(251,146,60,0.3)]"
                      >
                        {sdgGoals[currentSdg]}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
              
            </div>
          </div>

          {/* Right Section - Prize Images */}
          <div className="relative flex min-h-[350px] sm:min-h-[450px] lg:min-h-[600px] items-center justify-center">
            <div className="relative flex w-full max-w-2xl items-end justify-center px-4">
              
              {/* 2nd Prize */}
              <motion.div 
                className="relative z-10 -mr-[12vw] lg:-mr-[8vw] mb-6 cursor-pointer"
                custom={0.4}
                initial="hidden"
                whileInView="visible"
                whileHover={{ y: -10, scale: 0.95, transition: { duration: 0.2 } }}
                viewport={{ once: false, amount: 0.2 }}
                variants={imageVariants}
              >
                <Image 
                  src="/images/2nd.png" 
                  alt="2nd Prize" 
                  width={400} 
                  height={500} 
                  className="h-auto w-[35vw] lg:w-[28vw] max-w-[260px] min-w-[140px] drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                />
              </motion.div>

              {/* 1st Prize */}
              <motion.div 
                className="relative z-30 cursor-pointer"
                custom={0.2}
                initial="hidden"
                whileInView="visible"
                whileHover={{ y: -15, scale: 1.05, transition: { duration: 0.2 } }}
                viewport={{ once: false, amount: 0.2 }}
                variants={imageVariants}
              >
                <Image 
                  src="/images/1st.png" 
                  alt="1st Prize" 
                  width={500} 
                  height={600} 
                  className="h-auto w-[45vw] lg:w-[35vw] max-w-[340px] min-w-[180px] drop-shadow-[0_20px_50px_rgba(255,140,66,0.4)]"
                />
              </motion.div>

              {/* 3rd Prize */}
              {/* CHANGED: Adjusted margin and matched whileHover to the 2nd prize slab */}
              <motion.div 
                className="relative z-10 -ml-[12vw] lg:-ml-[6vw] mb-4 cursor-pointer"
                style={{ transformOrigin: "bottom left" }}
                custom={0.6}
                initial="hidden"
                whileInView="visible"
                whileHover={{ y: -10, scale: 0.95, transition: { duration: 0.2 } }}
                viewport={{ once: false, amount: 0.2 }}
                variants={imageVariants}
              >
                {/* Fixed the static rotation to 8 degrees */}
                <div className="rotate-[8deg]">
                  <Image 
                    src="/images/3rd.png" 
                    alt="3rd Prize" 
                    width={380} 
                    height={480} 
                    className="h-auto w-[32vw] lg:w-[25vw] max-w-[240px] min-w-[120px] drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                  />
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}