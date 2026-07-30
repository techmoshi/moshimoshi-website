"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { containerVariants, itemFadeUp, scaleUp } from "@/lib/animations";

export default function ContactPageClient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Brand Consultancy");
  const [city, setCity] = useState("Bengaluru");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);

      // Reset form fields
      setName("");
      setEmail("");
      setPhone("");
      setService("Brand Consultancy");
      setCity("Bengaluru");
      setMessage("");

      setTimeout(() => {
        setIsSent(false);
      }, 3000);
    }, 1500);
  };

  return (
    <>
      {/* Local Page CSS for Glass Inputs & custom animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .glass-input {
              background: rgba(255, 255, 255, 0.03);
              border: 1px solid rgba(255, 255, 255, 0.06);
              transition: all 0.3s ease;
            }
            .glass-input:focus {
              outline: none;
              border-color: #6e48aa;
              box-shadow: 0 0 15px rgba(110, 72, 170, 0.3);
              background: rgba(255, 255, 255, 0.05);
            }
            .aurora-glow-local {
              filter: blur(120px);
              opacity: 0.15;
              z-index: -1;
            }
          `,
        }}
      />

      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-1]">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-[#9d50bb] rounded-full aurora-glow-local animate-pulse-slow"></div>
        <div className="absolute top-[30%] -right-[15%] w-[40%] h-[40%] bg-[#6e48aa] rounded-full aurora-glow-local animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
        <div className="absolute -bottom-[10%] left-[20%] w-[60%] h-[60%] bg-[#573092] rounded-full aurora-glow-local animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
      </div>

      <Navbar />

      <main className="pt-32 pb-20 bg-background text-on-surface selection:bg-primary selection:text-on-primary">
        {/* Hero Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-20 md:mb-32"
        >
          <div className="max-w-4xl">
            <motion.h1
              variants={itemFadeUp}
              className="font-headline-xl text-headline-xl mb-6 leading-[1.1] text-white"
            >
              Let's Create Something <span className="text-primary italic">Extraordinary</span>.
            </motion.h1>
            <motion.p
              variants={itemFadeUp}
              className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl"
            >
              Whether you have a business enquiry, a creative challenge, or just want to say 'Moshi Moshi', we're here to listen.
            </motion.p>
          </div>
        </motion.section>

        {/* Form Section */}
        <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            {/* Content Sidebar */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-4 space-y-8"
            >
              <motion.div variants={itemFadeUp} className="glass-panel p-8 rounded-[32px]">
                <h3 className="font-headline-md text-headline-md text-primary mb-4">Why connect with us?</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                      auto_awesome
                    </span>
                    <div>
                      <h4 className="font-body-md font-bold text-on-surface">Creative Problem Solving</h4>
                      <p className="font-body-md text-on-surface-variant">We don't just design; we solve complex business challenges with innovation.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                      speed
                    </span>
                    <div>
                      <h4 className="font-body-md font-bold text-on-surface">Agile Execution</h4>
                      <p className="font-body-md text-on-surface-variant">Fast, surgical precision in delivery for forward-thinking startups.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                variants={itemFadeUp}
                className="relative group cursor-pointer overflow-hidden rounded-[32px] h-64 border border-white/5"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCXlRtHY1BXN9zO8QtoHMbRt717n4iLA-yiibg14PavudpD8HQRvirtk_bLyVexsYMNyy618qqi6yfds-YXqXsVoMIkDdD9fQGNKUNSvPUEVmxUHnGf4awqglr4rxjq_Q-61k_2SCxlMf39xjJqNa_lPIIbRieJs1mpTEfu4_o05fSzV6TwOODjHwb8G3u92ELDnlfO_5RnZXtREq92CsDrvJF05yV3EavXOKvKehFSLiXb3__EXivBWAM-4IrskadmzPuHG1nVsw')",
                  }}
                  role="img"
                  aria-label="A cinematic, high-fidelity photo of a modern, dark-themed creative agency studio in Bengaluru with neon accents and high-end workstations. Soft aurora lighting casts purple and blue hues across the glass surfaces. The atmosphere is professional yet visionary."
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="absolute bottom-6 left-6 z-10">
                  <p className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-1">Our Workspace</p>
                  <h4 className="font-headline-md text-on-surface">Innovation Hub</h4>
                </div>
              </motion.div>
            </motion.div>

            {/* Form Card */}
            <motion.div
              variants={scaleUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-8"
            >
              <div className="glass-panel p-8 md:p-12 rounded-[40px] relative overflow-hidden">
                {/* Decorative glow */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>
                <div className="relative z-10">
                  <h2 className="font-headline-lg text-headline-lg mb-8">Business Enquiry</h2>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="font-label-sm text-label-sm text-on-surface-variant ml-4 uppercase font-semibold">Full Name</label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full glass-input rounded-2xl px-6 py-4 text-on-surface placeholder:text-on-surface-variant/30 focus:outline-none"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="font-label-sm text-label-sm text-on-surface-variant ml-4 uppercase font-semibold">Email Address</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full glass-input rounded-2xl px-6 py-4 text-on-surface placeholder:text-on-surface-variant/30 focus:outline-none"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="font-label-sm text-label-sm text-on-surface-variant ml-4 uppercase font-semibold">Phone Number</label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full glass-input rounded-2xl px-6 py-4 text-on-surface placeholder:text-on-surface-variant/30 focus:outline-none"
                          placeholder="+91 00000 00000"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="font-label-sm text-label-sm text-on-surface-variant ml-4 uppercase font-semibold">Select Service</label>
                        <div className="relative">
                          <select
                            value={service}
                            onChange={(e) => setService(e.target.value)}
                            className="w-full glass-input rounded-2xl px-6 py-4 text-on-surface appearance-none focus:outline-none cursor-pointer"
                          >
                            <option value="Brand Consultancy" className="bg-surface-container">Brand Consultancy</option>
                            <option value="Website UI/UX" className="bg-surface-container">Website UI/UX</option>
                            <option value="Web/Mobile App" className="bg-surface-container">Web/Mobile App</option>
                            <option value="Digital Marketing" className="bg-surface-container">Digital Marketing</option>
                            <option value="Live Videos" className="bg-surface-container">Live Videos</option>
                            <option value="2D/3D Animation" className="bg-surface-container">2D/3D Animation</option>
                            <option value="PR" className="bg-surface-container">PR</option>
                          </select>
                          <span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant/70">
                            keyboard_arrow_down
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="font-label-sm text-label-sm text-on-surface-variant ml-4 uppercase font-semibold">City</label>
                      <div className="flex flex-wrap gap-3">
                        {["Bengaluru", "Delhi-NCR", "Mumbai", "Other"].map((item) => {
                          const radioValue = item === "Delhi-NCR" ? "Delhi" : item;
                          return (
                            <label key={item} className="cursor-pointer">
                              <input
                                type="radio"
                                name="city"
                                value={radioValue}
                                checked={city === radioValue}
                                onChange={(e) => setCity(e.target.value)}
                                className="hidden peer"
                              />
                              <span className="px-6 py-2 rounded-full glass-input peer-checked:bg-primary-container peer-checked:text-on-primary-container block transition-all">
                                {item}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="font-label-sm text-label-sm text-on-surface-variant ml-4 uppercase font-semibold">Message</label>
                      <textarea
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full glass-input rounded-[24px] px-6 py-4 text-on-surface placeholder:text-on-surface-variant/30 resize-none focus:outline-none"
                        placeholder="Tell us about your project..."
                        rows={4}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full md:w-auto px-12 py-5 text-white font-bold rounded-2xl shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-3 cursor-pointer ${
                        isSent
                          ? "bg-green-600 shadow-green-600/20"
                          : "bg-gradient-to-r from-[#9d50bb] to-[#6e48aa] hover:shadow-[#9d50bb]/20"
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="material-symbols-outlined animate-spin">sync</span>
                          Sending...
                        </>
                      ) : isSent ? (
                        <>
                          <span className="material-symbols-outlined">check_circle</span>
                          Sent!
                        </>
                      ) : (
                        <>
                          Send Message
                          <span className="material-symbols-outlined">send</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Global Presence Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-32"
        >
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <motion.div variants={itemFadeUp}>
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">Our Studios</span>
              <h2 className="font-headline-lg text-headline-lg">Global Presence</h2>
            </motion.div>
            <motion.p variants={itemFadeUp} className="font-body-md text-on-surface-variant max-w-md">
              Across India, we’ve established hubs where strategy meets pure imagination.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Bengaluru */}
            <motion.div
              variants={itemFadeUp}
              className="glass-panel p-8 rounded-[32px] group hover:border-primary/40 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary-container/20 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">location_on</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 text-white">Bengaluru</h3>
              <p className="font-body-md text-on-surface-variant mb-8 h-20">
                No.130, 33rd Cross, 4th T Block East, Next to Ibaco, Jayanagar, Bangalore, 560041
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all"
                href="https://maps.google.com/?q=Moshi+Moshi+Jayanagar+Bangalore"
              >
                View on Map
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </motion.div>

            {/* Gurugram */}
            <motion.div
              variants={itemFadeUp}
              className="glass-panel p-8 rounded-[32px] group hover:border-primary/40 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary-container/20 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">domain</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 text-white">Gurugram</h3>
              <p className="font-body-md text-on-surface-variant mb-8 h-20">
                Vi-John Tower, 393, Udyog Vihar Phase 3 Rd, Phase II, Sector 20, Gurugram, Haryana 122016
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all"
                href="https://maps.google.com/?q=Moshi+Moshi+Udyog+Vihar+Gurugram"
              >
                View on Map
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </motion.div>

            {/* Mumbai */}
            <motion.div
              variants={itemFadeUp}
              className="glass-panel p-8 rounded-[32px] group hover:border-primary/40 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary-container/20 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">apartment</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 text-white">Mumbai</h3>
              <p className="font-body-md text-on-surface-variant mb-8 h-20">
                Strategically located in the financial heart, serving the city's premier brands and entertainment giants.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all"
                href="https://maps.google.com/?q=Moshi+Moshi+Mumbai"
              >
                View on Map
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </motion.div>
          </div>
        </motion.section>

        {/* AI Pulse Indicator */}
        <section className="flex flex-col items-center justify-center py-20 px-margin-mobile">
          <div className="relative w-32 h-32 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-[ping_3s_linear_infinite]" />
            <div className="absolute inset-2 rounded-full border-2 border-secondary/40 animate-[ping_2s_linear_infinite]" />
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-primary to-tertiary flex items-center justify-center shadow-[0_0_30px_rgba(237,177,255,0.4)]">
              <span className="material-symbols-outlined text-on-primary text-3xl animate-pulse">bolt</span>
            </div>
          </div>
          <p className="mt-8 font-label-sm text-label-sm text-primary tracking-[0.2em] uppercase">AI Response System Active</p>
        </section>
      </main>

      <Footer />
    </>
  );
}
