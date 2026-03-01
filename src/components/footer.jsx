"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import SharedBackground from "./SharedBackground";

const base_team_members = [
  { image: "/team/member1.png", role: "VP Frontend", name: "Hubert" },
  { image: "/team/member2.jpg", role: "Logistics", name: "Baron" },
  { image: "/team/member3.jpg", role: "Logistics", name: "Jaclyn" },
  { image: "/team/member4.png", role: "Design", name: "Vicky" },
  { image: "/team/member5.png", role: "Design", name: "Cindy" },
  { image: "/team/member6.jpg", role: "Advisor", name: "MG" },
  { image: "/team/member7.png", role: "President", name: "Yannick" },
  { image: "/team/member8.jpg", role: "VP Finance", name: "Maggie" },
  { image: "/team/member9.png", role: "VP Events", name: "Angela" },
  { image: "/team/member10.png", role: "VP Purchasing", name: "Samiyah" },
];

const team_members = [
  ...base_team_members, ...base_team_members, ...base_team_members, ...base_team_members, 
];

const Team_card = ({ image_src, role, name }) => {
  return (
    <div className="w-32 h-[160px] bg-[#e5f4f8] p-2 pb-3 shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex flex-col items-center rounded-sm">
      <div className="w-full h-28 relative overflow-hidden border-[1.5px] border-[#3b6a8b] bg-gray-300">
        <Image src={image_src} alt={name} fill className="object-cover" />
      </div>
      <div className="flex flex-col items-center justify-center mt-auto w-full text-gray-800">
        <span className="text-[10px] capitalize tracking-wide font-medium text-gray-700 mt-1">
          {role}
        </span>
        <span className="text-[22px] font-[cursive] mt-[-2px] text-[#1a202c] leading-none">
          {name}
        </span>
      </div>
    </div>
  );
};

// SVG Icons
const instagram_svg = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.948-.197-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
);
const twitter_svg = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);
const linkedin_svg = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24.774 24 23.2 0 22.225 0z"/></svg>
);
const youtube_svg = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
);
const gmail_svg = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.59l8.073-6.097C21.691 2.279 24 3.434 24 5.457z"/></svg>
);

const social_items = [
  { name: "Instagram", icon: instagram_svg, url: "#", hover_color: "hover:text-[#E1306C] hover:border-[#E1306C] hover:bg-[#E1306C]/10" },
  { name: "Twitter", icon: twitter_svg, url: "#", hover_color: "hover:text-white hover:border-white hover:bg-white/10" },
  { name: "LinkedIn", icon: linkedin_svg, url: "#", hover_color: "hover:text-[#0A66C2] hover:border-[#0A66C2] hover:bg-[#0A66C2]/10" },
  { name: "YouTube", icon: youtube_svg, url: "#", hover_color: "hover:text-[#FF0000] hover:border-[#FF0000] hover:bg-[#FF0000]/10" },
  { name: "Gmail", icon: gmail_svg, url: "#", hover_color: "hover:text-[#EA4335] hover:border-[#EA4335] hover:bg-[#EA4335]/10" },
];

const footer_component = () => {
  const added_rotation = useMotionValue(0);
  const smooth_rotation = useSpring(added_rotation, { damping: 50, stiffness: 400 });

  useEffect(() => {
    const handle_wheel = (e) => {
      const is_at_bottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 150;
      if (is_at_bottom) {
        added_rotation.set(added_rotation.get() + e.deltaY * 0.05); 
      }
    };

    let last_y = 0;
    const handle_touch_start = (e) => { last_y = e.touches.clientY; }; 
    const handle_touch_move = (e) => {
      const is_at_bottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 150;
      if (is_at_bottom) {
        const delta_y = last_y - e.touches.clientY; 
        added_rotation.set(added_rotation.get() + delta_y * 0.1); 
        last_y = e.touches.clientY; 
      }
    };

    window.addEventListener("wheel", handle_wheel, { passive: true });
    window.addEventListener("touchstart", handle_touch_start, { passive: true });
    window.addEventListener("touchmove", handle_touch_move, { passive: true });

    return () => {
      window.removeEventListener("wheel", handle_wheel);
      window.removeEventListener("touchstart", handle_touch_start);
      window.removeEventListener("touchmove", handle_touch_move);
    };
  }, [added_rotation]);

  return (
    <footer className="relative w-full h-[100dvh] min-h-[600px] overflow-hidden bg-[#050505]/80 text-white flex flex-col items-center border-t border-white/10">
      
      {/* Background Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        <SharedBackground id="footer-particles" />
      </div>

      {/* 1. Conveyor Belt Arc - Arc unchanged */}
      <div className="absolute z-10 left-1/2 -translate-x-1/2 w-[2600px] h-[2600px] pointer-events-none opacity-90 top-[140px] lg:top-[160px]">
        <motion.div style={{ rotate: smooth_rotation }} className="w-full h-full relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1000, repeat: Infinity, ease: "linear" }}
            className="w-full h-full relative"
          >
            {team_members.map((member, index) => {
              const rotation_angle = index * (360 / team_members.length); 
              return (
                <div key={index} className="absolute inset-0" style={{ transform: `rotate(${rotation_angle}deg)` }}>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-auto cursor-pointer transition-transform hover:-translate-y-4 hover:scale-110 duration-300">
                    <Team_card image_src={member.image} role={member.role} name={member.name} />
                  </div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* 2. Central Layout Stack - Removed rigid pt-[330px], added mt-auto to anchor properly */}
      <div className="relative z-20 flex flex-col items-center w-full mt-auto pb-6 px-4 max-w-4xl">
        
        {/* Top block (Map + Icons) - Reduced mb slightly to keep things tight vertically */}
        <div className="flex flex-col items-center gap-5 w-full mb-6 lg:mb-8">
          {/* Map - Dropped height slightly to guarantee it fits entirely */}
          <div className="w-full max-w-[450px] h-[120px] lg:h-[140px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] relative group p-1.5">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none rounded-[1rem]"></div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3413.863620408042!2d73.10204687466346!3d19.000230854347873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e83a36fbf179%3A0xbbb0905051e8c56e!2sAnjuman-I-Islam's%20Kalsekar%20Technical%20Campus!5e1!3m2!1sen!2sin!4v1772359776194!5m2!1sen!2sin"
              width="100%" height="100%" style={{ border: 0, borderRadius: "0.8rem" }}
              className="w-full h-full object-cover transition-all duration-700"
              allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Social Icons Dock - Expanded gap to spread them out! */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-17">
            {social_items.map((item) => (
              <a 
                key={item.name} 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white/50 shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer ${item.hover_color}`}
                title={item.name}
              >
                <div className="w-5 h-5 lg:w-6 lg:h-6">
                  <item.icon />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* 3. Bottom text section */}
        <div className="w-full text-center flex flex-col items-center">
          <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-3"></div>
          <p className="text-sm lg:text-base font-normal tracking-wide text-white/90 flex items-center gap-1.5">
            Made With <span className="inline-block animate-pulse text-red-500 text-lg lg:text-xl">❤️</span> By <span className="font-bold">Algo Team</span>
          </p>
          <p className="text-[10px] lg:text-xs text-white/40 font-extralight tracking-wider mt-1">
            © 2026 Algorithm 10. All rights reserved. Panvel, Maharashtra.
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default footer_component;