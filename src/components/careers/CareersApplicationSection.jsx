"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function CareersApplicationSection({ selectedPosition }) {
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    phone: "",
    position: "Art Director",
    availableFrom: "",
    currentCtc: "",
    expectedCtc: "",
    portfolioUrl: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [submitState, setSubmitState] = useState("idle"); // idle, submitting, success

  useEffect(() => {
    if (selectedPosition) {
      setFormData((prev) => ({ ...prev, position: selectedPosition }));
    }
  }, [selectedPosition]);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitState("submitting");

    setTimeout(() => {
      setSubmitState("success");
      setTimeout(() => {
        setSubmitState("idle");
        setFormData({
          name: "",
          email: "",
          location: "",
          phone: "",
          position: "Art Director",
          availableFrom: "",
          currentCtc: "",
          expectedCtc: "",
          portfolioUrl: "",
        });
        setSelectedFile(null);
      }, 4000);
    }, 2000);
  };

  return (
    <section className="py-32 px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto" id="apply">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden border border-white/10 shadow-2xl"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full pointer-events-none" />

        <h2 className="font-headline-lg text-3xl md:text-headline-lg text-white mb-4 font-bold">
          JOB APPLICATION FORM
        </h2>
        <p className="text-on-surface-variant mb-12 text-body-md">
          Ready to make magic? Fill out the form below and our team will get in touch with you.
        </p>

        {submitState === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-16 text-center space-y-4 bg-tertiary-container/10 rounded-2xl border border-tertiary/30 p-8"
          >
            <span className="material-symbols-outlined text-tertiary text-6xl animate-bounce">
              check_circle
            </span>
            <h3 className="text-2xl font-bold text-white font-headline-md">
              Application Received!
            </h3>
            <p className="text-on-surface-variant text-body-md max-w-lg mx-auto">
              Thank you for applying to Moshi Moshi. Our talent team is reviewing your profile and will contact you shortly.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              <div className="space-y-2">
                <label className="font-label-sm text-xs uppercase text-on-surface-variant font-semibold ml-1 block">
                  First & Last Name*
                </label>
                <input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-surface-container border border-outline-variant focus:border-tertiary focus:ring-1 focus:ring-tertiary rounded-lg p-4 text-on-surface placeholder:text-outline-variant outline-none transition-all"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label-sm text-xs uppercase text-on-surface-variant font-semibold ml-1 block">
                  Email*
                </label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-surface-container border border-outline-variant focus:border-tertiary focus:ring-1 focus:ring-tertiary rounded-lg p-4 text-on-surface placeholder:text-outline-variant outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Location & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              <div className="space-y-2">
                <label className="font-label-sm text-xs uppercase text-on-surface-variant font-semibold ml-1 block">
                  Location*
                </label>
                <input
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full bg-surface-container border border-outline-variant focus:border-tertiary focus:ring-1 focus:ring-tertiary rounded-lg p-4 text-on-surface placeholder:text-outline-variant outline-none transition-all"
                  placeholder="City, Country"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label-sm text-xs uppercase text-on-surface-variant font-semibold ml-1 block">
                  Phone*
                </label>
                <input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-surface-container border border-outline-variant focus:border-tertiary focus:ring-1 focus:ring-tertiary rounded-lg p-4 text-on-surface placeholder:text-outline-variant outline-none transition-all"
                  placeholder="+91 00000 00000"
                />
              </div>
            </div>

            {/* Position & Available From */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              <div className="space-y-2">
                <label className="font-label-sm text-xs uppercase text-on-surface-variant font-semibold ml-1 block">
                  Position Applying For*
                </label>
                <select
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  className="w-full bg-surface-container border border-outline-variant focus:border-tertiary focus:ring-1 focus:ring-tertiary rounded-lg p-4 text-on-surface outline-none transition-all appearance-none cursor-pointer"
                >
                  <option className="bg-surface-container text-white">Art Director</option>
                  <option className="bg-surface-container text-white">Brand Strategist</option>
                  <option className="bg-surface-container text-white">Content Writer Intern</option>
                  <option className="bg-surface-container text-white">Graphic Designer</option>
                  <option className="bg-surface-container text-white">Account Manager</option>
                  <option className="bg-surface-container text-white">Frontend Developer</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-label-sm text-xs uppercase text-on-surface-variant font-semibold ml-1 block">
                  Available From*
                </label>
                <input
                  required
                  value={formData.availableFrom}
                  onChange={(e) => setFormData({ ...formData, availableFrom: e.target.value })}
                  className="w-full bg-surface-container border border-outline-variant focus:border-tertiary focus:ring-1 focus:ring-tertiary rounded-lg p-4 text-on-surface outline-none transition-all"
                  type="date"
                />
              </div>
            </div>

            {/* CTC Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              <div className="space-y-2">
                <label className="font-label-sm text-xs uppercase text-on-surface-variant font-semibold ml-1 block">
                  Current CTC*
                </label>
                <input
                  required
                  value={formData.currentCtc}
                  onChange={(e) => setFormData({ ...formData, currentCtc: e.target.value })}
                  className="w-full bg-surface-container border border-outline-variant focus:border-tertiary focus:ring-1 focus:ring-tertiary rounded-lg p-4 text-on-surface outline-none transition-all"
                  placeholder="e.g. 8 LPA"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label-sm text-xs uppercase text-on-surface-variant font-semibold ml-1 block">
                  Expected CTC
                </label>
                <input
                  value={formData.expectedCtc}
                  onChange={(e) => setFormData({ ...formData, expectedCtc: e.target.value })}
                  className="w-full bg-surface-container border border-outline-variant focus:border-tertiary focus:ring-1 focus:ring-tertiary rounded-lg p-4 text-on-surface outline-none transition-all"
                  placeholder="e.g. 12 LPA"
                  type="text"
                />
              </div>
            </div>

            {/* Portfolio Link */}
            <div className="space-y-2">
              <label className="font-label-sm text-xs uppercase text-on-surface-variant font-semibold ml-1 block">
                Portfolio Link
              </label>
              <input
                value={formData.portfolioUrl}
                onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                className="w-full bg-surface-container border border-outline-variant focus:border-tertiary focus:ring-1 focus:ring-tertiary rounded-lg p-4 text-on-surface outline-none transition-all"
                placeholder="https://behance.net/yourprofile"
                type="url"
              />
            </div>

            {/* File Upload Box */}
            <div className="space-y-2">
              <label className="font-label-sm text-xs uppercase text-on-surface-variant font-semibold ml-1 block">
                Upload Portfolio / CV*
              </label>
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.docx,.doc"
                onChange={handleFileChange}
                className="hidden"
              />
              <div
                onClick={() => fileInputRef.current?.click()}
                className="w-full border-2 border-dashed border-outline-variant rounded-xl p-10 text-center hover:border-primary transition-colors cursor-pointer group bg-surface-container/50"
              >
                <span className="material-symbols-outlined text-4xl text-outline-variant group-hover:text-primary mb-3 block transition-colors">
                  cloud_upload
                </span>
                {selectedFile ? (
                  <div>
                    <p className="text-primary font-bold text-sm">{selectedFile.name}</p>
                    <p className="text-xs text-on-surface-variant mt-1">
                      {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB - Click to change
                    </p>
                  </div>
                ) : (
                  <>
                    <p className="text-on-surface-variant text-sm">
                      Drop your files here or{" "}
                      <span className="text-primary font-bold underline">browse</span>
                    </p>
                    <p className="text-label-sm text-outline-variant text-xs mt-2">
                      Maximum file size 10MB (PDF, DOCX)
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              disabled={submitState === "submitting"}
              className="w-full py-5 bg-gradient-to-r from-primary-container to-secondary-container text-white font-bold rounded-xl shadow-xl hover:shadow-primary/30 transition-all font-label-sm text-sm uppercase tracking-widest cursor-pointer disabled:opacity-50"
              type="submit"
            >
              {submitState === "submitting" ? "Transmitting..." : "Submit Application"}
            </motion.button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
