"use client";
import { useRef, useState } from "react";
import { 
  motion, 
  AnimatePresence, 
  useScroll, 
  useTransform, 
  useMotionTemplate 
} from "framer-motion";

const FAQ_ITEMS = [
  {
    q: "What is Algorithm 10.0?",
    a: "Algorithm 10.0 is a 32-hour national-level hackathon that brings together innovators, students, and tech enthusiasts from across the country to explore futuristic technologies and solve real-world problems.",
  },
  {
    q: "When and where is it held?",
    a: "The hackathon will take place on February 21–22, 2026 at Kalsekar Technical Campus, New Panvel, with a fully equipped and collaborative environment.",
  },
  {
    q: "Who is eligible to participate?",
    a: "Students from any academic background who are interested in innovation, technology, and problem-solving are welcome to participate.",
  },
  {
    q: "Is there a participation fee?",
    a: "No, Algorithm 10.0 is completely free to participate in, with meals, internet, and resources provided.",
  },
  {
    q: "How can I register?",
    a: "Participants can register through the official Algorithm 10.0 website where all guidelines and updates are available.",
  },
  {
    q: "Are prizes awarded?",
    a: "Yes, winners receive exciting cash prizes, certificates, and recognition from industry experts.",
  },
  {
    q: "What should I bring?",
    a: "Participants should bring their laptops, chargers, and any tools or software required for their project.",
  },
  {
    q: "Is food and internet provided?",
    a: "Yes, high-speed Wi-Fi, meals, snacks, and refreshments will be provided throughout the hackathon.",
  },
  {
    q: "Can beginners participate?",
    a: "Absolutely. Beginners are encouraged to participate and learn through mentorship and collaboration.",
  },
  {
    q: "How are projects evaluated?",
    a: "Projects are judged based on innovation, technical execution, impact, creativity, and presentation quality.",
  },
];

export default function Faq() {
  const containerRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // --- LEFT SIDE ANIMATIONS ---
  // Fades in early (0.2), stays visible, fades out VERY late (0.95)
  const leftOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.35, 0.9, 0.98],
    [0, 1, 1, 0]
  );
  const leftBlur = useTransform(scrollYProgress, [0.9, 0.98], [0, 8]);
  const leftFilter = useMotionTemplate`blur(${leftBlur}px)`;

  // --- RIGHT SIDE ANIMATIONS ---
  // Fades in early (0.2), Dissolves when the section is nearly done (0.85)
  const rightOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.35, 0.85, 0.95],
    [0, 1, 1, 0]
  );
  const rightBlur = useTransform(scrollYProgress, [0.85, 0.95], [0, 12]);
  const rightScale = useTransform(scrollYProgress, [0.85, 0.95], [1, 0.92]);
  const rightFilter = useMotionTemplate`blur(${rightBlur}px)`;

  // Gradient for borders
  const gradientColors = "linear-gradient(90deg, #8B0000, #FF4500, #FF7E00, #FFA500, #FFD580, #FF7E00, #5C1A00)";

  return (
    <section 
      ref={containerRef} 
      // Ensure it has a solid background color (e.g. bg-neutral-950)
      className="relative bg-neutral-950 text-white py-64 lg:py-96 overflow-hidden"
    >
      {/* CRITICAL: No motion.div wrapper here. Pure CSS container. */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* --- LEFT SIDE: STICKY CONTAINER --- */}
          {/* 1. sticky: Enables sticky behavior
             2. top-1/2 -translate-y-1/2: Centers it vertically in viewport
             3. self-start: CRITICAL. Prevents the div from stretching to full height of parent.
          */}
          <div className="lg:sticky lg:top-1/2 lg:-translate-y-1/2 lg:self-start">
            {/* Inner Motion Div for Opacity/Blur ONLY */}
            <motion.div 
              style={{ opacity: leftOpacity, filter: leftFilter }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                  Frequently Asked <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">
                    Questions
                  </span>
                </h2>
                <div className="h-1 w-20 bg-orange-600 rounded-full mt-6" />
                <p className="text-xl text-gray-400 max-w-md leading-relaxed mt-6">
                  Everything you need to know about Algorithm 10.0
                </p>
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT SIDE: SCROLLING CONTENT --- */}
          {/* Scrolls naturally, but fades/dissolves via transforms */}
          <motion.div 
            style={{ 
              opacity: rightOpacity, 
              filter: rightFilter, 
              scale: rightScale 
            }}
            className="space-y-6 w-full"
          >
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div 
                  key={i} 
                  className="group relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <div
                    className={`pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300 ${
                      isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                    style={{
                      backgroundImage: gradientColors,
                      backgroundSize: "200% 100%",
                      padding: "3px", 
                      WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                      animation: isOpen ? "shimmer 3s linear infinite" : "none"
                    }}
                  />

                  <div className="relative z-10">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="flex w-full items-center justify-between p-7 md:p-8 text-left outline-none"
                    >
                      <span className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${
                        isOpen ? "text-orange-500" : "text-gray-300 group-hover:text-white"
                      }`}>
                        {item.q}
                      </span>
                      <motion.div 
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        className={`text-2xl transition-colors ${isOpen ? "text-orange-500" : "text-gray-600"}`}
                      >
                        ⌄
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                        >
                          <div className="px-8 pb-8">
                            <div className="h-px w-full bg-white/10 mb-6" />
                            <p className="text-gray-400 text-lg leading-relaxed font-light">
                              {item.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>
    </section>
  );
}