"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const imageVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: { delay: delay, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    // Added pt-24 (top padding) to mobile to create a gap for the navbar
    <section id="about" className="relative overflow-hidden bg-transparent pt-24 lg:pt-0">
      {/* Background gradient glow (Kept ONLY for About section) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="bg-gradient-radial absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 from-orange-600/30 via-orange-900/10 to-transparent blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 h-[400px] w-[400px] rounded-full bg-orange-500/20 blur-[120px]"></div>
        <div className="absolute bottom-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-amber-600/15 blur-[100px]"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-12 md:py-16 lg:px-8 z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Left Section - Text Content */}
          <div className="z-10 space-y-6 sm:space-y-8">
            {/* Added text-center for mobile, lg:text-left for desktop */}
            <div className="border-orange-500/50 lg:border-l-4 lg:pl-8 text-center lg:text-left">
              <div className="relative mb-6 inline-block">
                <div className="absolute -inset-4 rounded-lg bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-orange-500/10 blur-xl"></div>
                <div className="absolute -inset-2 rounded-lg border border-orange-500/20"></div>

                <h2 className="relative mb-4 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500 bg-clip-text text-3xl leading-tight font-bold tracking-wide text-transparent sm:mb-6 sm:text-4xl lg:text-5xl">
                  INNOVATION AND
                  <br />
                  TEAMWORK
                </h2>
              </div>

              <div className="space-y-4 text-sm leading-relaxed text-gray-300 sm:space-y-6 sm:text-base">
                <p className="opacity-0" style={{ animation: "fadeIn 0.8s ease-out 0.3s forwards" }}>
                  Algorithm 10 is designed to push the boundaries of what's
                  possible. We bring together brilliant minds to tackle complex
                  challenges, fostering a collaborative environment where
                  creativity and technical expertise converge.
                </p>

                <p className="opacity-0" style={{ animation: "fadeIn 0.8s ease-out 0.5s forwards" }}>
                  Join us to innovate, build, and define the future of
                  technology through intense competition and shared passion.
                </p>

                <button
                  className="mt-6 rounded-lg border border-orange-500 bg-gradient-to-r from-orange-600 to-orange-700 px-6 py-3 text-sm font-semibold text-white opacity-0 shadow-[0_0_20px_rgba(255,140,66,0.3)] transition-all hover:scale-105 hover:from-orange-500 hover:to-orange-600 hover:shadow-[0_0_30px_rgba(255,140,66,0.5)] active:scale-95 sm:mt-8 sm:px-8 sm:text-base"
                  style={{ animation: "fadeIn 0.8s ease-out 0.7s forwards" }}
                  onClick={() => (window.location.href = "https://unstop.com")}
                >
                  LEARN MORE & REGISTER
                </button>
              </div>
            </div>
          </div>

          {/* Right Section - Prize Images */}
          <div className="relative flex min-h-[400px] sm:min-h-[500px] items-center justify-center lg:min-h-[700px]">
            <div className="relative flex w-full max-w-2xl items-end justify-center px-4">
              
              {/* 2nd Prize */}
              <motion.div 
                // Increased mobile negative margin to accommodate larger images
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
                  // Enlarged mobile width (35vw vs 28vw)
                  className="h-auto w-[35vw] lg:w-[28vw] max-w-[280px] min-w-[140px] drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
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
                  // Enlarged mobile width (45vw vs 35vw)
                  className="h-auto w-[45vw] lg:w-[35vw] max-w-[360px] min-w-[180px] drop-shadow-[0_20px_50px_rgba(255,140,66,0.4)]"
                />
              </motion.div>

              {/* 3rd Prize */}
              <motion.div 
                className="relative z-10 -ml-[12vw] lg:-ml-[8vw] mb-4 cursor-pointer"
                style={{ transformOrigin: "bottom center" }}
                custom={0.6}
                initial="hidden"
                whileInView="visible"
                whileHover={{ y: -10, scale: 0.9, rotate: 5, transition: { duration: 0.2 } }}
                viewport={{ once: false, amount: 0.2 }}
                variants={imageVariants}
              >
                <div className="rotate-5">
                  <Image 
                    src="/images/3rd.png" 
                    alt="3rd Prize" 
                    width={380} 
                    height={480} 
                    // Enlarged mobile width (32vw vs 25vw)
                    className="h-auto w-[32vw] lg:w-[25vw] max-w-[260px] min-w-[120px] drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
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