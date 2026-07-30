"use client";

import { motion } from "framer-motion";

export default function AboutPurpleSheepsSection() {
  const avatars = [
    { bg: "bg-gradient-to-br from-purple-500 to-indigo-600", label: "A" },
    { bg: "bg-gradient-to-br from-cyan-500 to-blue-600", label: "R" },
    { bg: "bg-gradient-to-br from-pink-500 to-rose-600", label: "M" },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-panel rounded-3xl p-12 md:p-24 flex flex-col md:flex-row items-center gap-16 relative overflow-hidden border border-white/10 shadow-2xl"
        >
          {/* Gradient Overlay */}
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary/15 via-transparent to-tertiary/15 pointer-events-none" />

          {/* Left Side Content */}
          <div className="w-full md:w-1/2 space-y-6 relative z-10">
            <h2 className="text-headline-lg font-headline-lg text-white">
              We are the <span className="text-primary aurora-glow">Purple Sheeps</span>
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed">
              In a world of black and white, we chose to be the extra. We are the learners, the marketers, the developers, the coders, and yes—the puppy momos. Being a Purple Sheep means rejecting the status quo to create something truly unique.
            </p>
            
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-4">
                {avatars.map((av, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.2, zIndex: 10 }}
                    className={`w-12 h-12 rounded-full border-2 border-surface-dim ${av.bg} flex items-center justify-center text-white font-bold text-sm shadow-lg cursor-pointer`}
                  >
                    {av.label}
                  </motion.div>
                ))}
                <motion.div
                  whileHover={{ scale: 1.15, zIndex: 10 }}
                  className="w-12 h-12 rounded-full border-2 border-surface-dim bg-primary/20 backdrop-blur-md flex items-center justify-center text-primary font-bold shadow-lg cursor-pointer"
                >
                  +80
                </motion.div>
              </div>
              <span className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                Join the flock
              </span>
            </div>
          </div>

          {/* Right Side Images Grid */}
          <div className="w-full md:w-1/2 relative z-10">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="aspect-square rounded-2xl bg-surface-container-high overflow-hidden shadow-2xl group border border-white/5"
              >
                <img
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                  alt="Creative studio space with purple atmospheric lighting"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHS8wj22V7nKPH7EpO46p4jt81PhZIlZYli1-74qzTC3gLFwuStnQvcyh5eHAcqJ1ww5vKOTcfd5yKZHm4FDfLibB4KS2asDxbGrtwWt2nUwaRZkMkbdLq_EXpMvvfGOnVei4IfR0zoVh5aqqbbcsQtiMPlX0OteH8ynpoUa4MY58gQpe7CDOaNfISMOZiUaThLpirg17mDRPKBrjxRA8uZpivfZhVq-CvHdepvKmyt0Ur-Owi-bxonMEFSUV2XCiKmuKAZacAiA"
                />
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="aspect-square rounded-2xl bg-surface-container-high overflow-hidden shadow-2xl group border border-white/5 md:translate-y-8"
              >
                <img
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                  alt="Creative team brainstorming in a room with digital whiteboards"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCW8azbU-1Uhcy8oyTQ0Y7CnHx295IlqVWKRKz-NR4Nqb3BMHmkAjSTBQTu54YQ8qHY4kDd-MMBHxA3fxQ4ICmt4wBP_JZCMkya7Uyn21V4xHNCEZwqY1HWDZ71sGJCe9Lyn4b93rY5qgz_D3mQ9aiXCyZ3zrgR9NmZN-ogEQBvLWVm6VZtsDGBaoYAf0h8BEw_ZuDVJvp6KprXcTigkO8Ps_2utQIX5h8an0M29cL0dpVhz3W7LSMe80mkzp6TSNf0lKv1lemx8w"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
