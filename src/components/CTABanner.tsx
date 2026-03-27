"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const HEADLINE_WORDS = "Your competitors are already ranking.".split(" ");

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 20px",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(124,58,237,0.25)",
  borderRadius: 12,
  color: "#F9F7FF",
  fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
  fontSize: 15,
  outline: "none",
  appearance: "none",
};

export default function CTABanner() {
  return (
    <section
      className="cta-section"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "120px 80px",
      }}
    >
      {/* Animated gradient background */}
      <div
        className="cta-bg"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, #1a0533 0%, #0D0D14 50%, #1a0020 100%)",
        }}
      />

      {/* Top fade — blends from FAQ's background into CTA */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 120,
          pointerEvents: "none",
          background: "linear-gradient(to bottom, #0D0D14 0%, transparent 100%)",
          zIndex: 2,
        }}
      />

      {/* Diagonal mesh overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, transparent 50%, rgba(255,107,107,0.1) 100%)",
        }}
      />

      {/* Grain texture overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.04,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />

      {/* Violet orb */}
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)",
          filter: "blur(100px)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 720,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* Headline — word-by-word stagger */}
        <h2
          className="cta-headline"
          style={{
            fontFamily: "var(--font-syne), Syne, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(36px, 4vw, 60px)",
            background:
              "linear-gradient(135deg, #7C3AED 0%, #FF6B6B 60%, #F9F7FF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          {HEADLINE_WORDS.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
              style={{ display: "inline-block", marginRight: "0.25em" }}
            >
              {word}
            </motion.span>
          ))}
        </h2>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          style={{
            fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
            fontSize: 20,
            color: "rgba(249,247,255,0.7)",
            margin: "16px 0 0",
          }}
        >
          Start your free audit in 30 seconds.
        </motion.p>

        {/* Contact form */}
        <motion.form
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.65 }}
          onSubmit={(e) => e.preventDefault()}
          style={{
            marginTop: 40,
            maxWidth: 560,
            margin: "40px auto 0",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {/* Row 1: First + Last name */}
          <div className="cta-form-row" style={{ display: "flex", gap: 12 }}>
            <input
              suppressHydrationWarning={true}
              type="text"
              placeholder="First Name"
              className="cta-form-input"
              style={inputStyle}
            />
            <input
              suppressHydrationWarning={true}
              type="text"
              placeholder="Last Name"
              className="cta-form-input"
              style={inputStyle}
            />
          </div>

          {/* Row 2: Business Email */}
          <input
            suppressHydrationWarning={true}
            type="email"
            placeholder="Business Email"
            className="cta-form-input"
            style={inputStyle}
          />

          {/* Row 3: Business Website */}
          <input
            suppressHydrationWarning={true}
            type="url"
            placeholder="https://yoursite.com"
            className="cta-form-input"
            style={inputStyle}
          />

          {/* Row 4: Company Size select */}
          <div style={{ position: "relative" }}>
            <select suppressHydrationWarning={true} defaultValue="" className="cta-form-input cta-form-select" style={inputStyle}>
              <option value="" disabled>Company Size</option>
              <option value="1-10">1–10 employees</option>
              <option value="11-50">11–50 employees</option>
              <option value="51-200">51–200 employees</option>
              <option value="200+">200+ employees</option>
            </select>
            {/* Chevron arrow */}
            <svg
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                position: "absolute",
                right: 20,
                top: "50%",
                transform: "translateY(-50%)",
                width: 16,
                height: 16,
                pointerEvents: "none",
              }}
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="rgba(249,247,255,0.35)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Row 5: CTA button */}
          <motion.button
            suppressHydrationWarning={true}
            type="submit"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{
              width: "100%",
              padding: "16px",
              background: "linear-gradient(135deg, #7C3AED 0%, #FF6B6B 100%)",
              color: "#fff",
              borderRadius: 999,
              border: "none",
              fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
              fontSize: 16,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Get My Free Audit →
          </motion.button>
        </motion.form>

        {/* Micro-text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          style={{
            marginTop: 16,
            display: "flex",
            alignItems: "center",
            gap: 8,
            justifyContent: "center",
          }}
        >
          <Shield size={14} color="rgba(249,247,255,0.4)" />
          <span
            style={{
              fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
              fontSize: 13,
              color: "rgba(249,247,255,0.4)",
            }}
          >
            No credit card. No setup fees. Cancel anytime.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
