"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// ─── Easing ────────────────────────────────────────────────────────────────
const EASE = [0.25, 0.46, 0.45, 0.94] as const;

// ─── Fade-up variant factory ────────────────────────────────────────────────
function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: EASE, delay },
  };
}

// ─── Sparkline SVG ──────────────────────────────────────────────────────────
function Sparkline() {
  return (
    <svg width="100%" height="48" viewBox="0 0 200 48" fill="none" preserveAspectRatio="none">
      <defs>
        <linearGradient id="sparkGrad" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#FF6B6B" />
        </linearGradient>
        <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 42 C20 40 30 36 50 30 C70 24 80 28 100 20 C120 12 130 16 150 8 C165 3 180 6 200 2"
        stroke="url(#sparkGrad)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M0 42 C20 40 30 36 50 30 C70 24 80 28 100 20 C120 12 130 16 150 8 C165 3 180 6 200 2 L200 48 L0 48 Z"
        fill="url(#sparkFill)"
      />
    </svg>
  );
}

// ─── Avatar bubbles ─────────────────────────────────────────────────────────
const AVATAR_COLORS = ["#7C3AED", "#9F5FED", "#C084FC", "#FF6B6B", "#FF8E8E"];

function AvatarStack() {
  return (
    <div className="flex items-center" style={{ gap: 0 }}>
      {AVATAR_COLORS.map((color, i) => (
        <div
          key={i}
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: color,
            border: "2px solid #0D0D14",
            marginLeft: i === 0 ? 0 : -12,
            zIndex: AVATAR_COLORS.length - i,
            position: "relative",
            flexShrink: 0,
          }}
        />
      ))}
    </div>
  );
}

// ─── Stat card ──────────────────────────────────────────────────────────────
const glassmorphism = {
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(124,58,237,0.2)",
  borderRadius: 12,
};

function StatCard({
  label,
  value,
  valueColor,
  icon,
  delay,
}: {
  label: string;
  value: string;
  valueColor: string;
  icon: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      style={{ ...glassmorphism, width: 160, padding: "14px 16px" }}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: EASE, delay }}
    >
      <div className="flex items-center gap-2 mb-1">
        <span style={{ color: "rgba(249,247,255,0.5)", display: "flex" }}>{icon}</span>
        <span style={{ fontSize: 11, color: "rgba(249,247,255,0.5)", fontWeight: 500 }}>
          {label}
        </span>
      </div>
      <div
        className="font-display font-bold"
        style={{ fontSize: 22, color: valueColor, lineHeight: 1 }}
      >
        {value}
      </div>
    </motion.div>
  );
}

// ─── Icons ──────────────────────────────────────────────────────────────────
function TagIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  );
}

function TrendingUpIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────
export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const orb1Y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const dotGridY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const orb3Y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section
      ref={containerRef}
      className="hero-section relative overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* ── Background parallax layers ── */}

      {/* Layer 3 — Dot grid */}
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ y: dotGridY }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="rgba(124,58,237,0.15)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </motion.div>

      {/* Layer 1 — Large violet orb */}
      <motion.div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)",
          filter: "blur(100px)",
          top: -100,
          left: -100,
          y: orb1Y,
        }}
      />

      {/* Layer 2 — Large coral orb */}
      <motion.div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,107,107,0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
          bottom: 0,
          right: 0,
          y: orb2Y,
        }}
      />

      {/* Layer 4 — Small violet orb */}
      <motion.div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)",
          filter: "blur(60px)",
          top: "30%",
          right: "5%",
          y: orb3Y,
        }}
      />

      {/* ── Content ── */}
      <div
        className="hero-inner relative z-10 mx-auto flex min-h-screen items-center"
        style={{ maxWidth: 1280, padding: "72px 80px 0" }}
      >
        <div className="hero-columns flex w-full items-center gap-12">

          {/* ── LEFT COLUMN ── */}
          <div className="hero-left flex flex-col" style={{ flex: "0 0 55%" }}>

            {/* 1. Eyebrow badge */}
            <motion.div {...fadeUp(0)} className="hero-badge-wrap mb-6 self-start">
              <motion.div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "6px 16px",
                  borderRadius: 999,
                  background: "rgba(124,58,237,0.1)",
                  border: "1px solid rgba(124,58,237,0.4)",
                }}
                animate={{
                  borderColor: [
                    "rgba(124,58,237,0.4)",
                    "rgba(124,58,237,1)",
                    "rgba(124,58,237,0.4)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <span style={{ fontSize: 13, color: "#A78BFA", fontFamily: "var(--font-dm-sans)" }}>
                  ✦ Trusted by 12,000+ marketers
                </span>
              </motion.div>
            </motion.div>

            {/* 2. H1 headline */}
            <motion.h1
              {...fadeUp(0.1)}
              className="font-display"
              style={{
                fontWeight: 800,
                fontSize: "clamp(36px, 4.5vw, 64px)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                marginBottom: 24,
              }}
            >
              <span style={{ color: "#F9F7FF" }}>Rank </span>
              <span
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #FF6B6B)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                higher.
              </span>
              <br />
              <span style={{ color: "#F9F7FF" }}>Stress less.</span>
            </motion.h1>

            {/* 3. Subtext */}
            <motion.p
              {...fadeUp(0.2)}
              style={{
                fontSize: 18,
                color: "rgba(249,247,255,0.65)",
                lineHeight: 1.7,
                maxWidth: 480,
                marginBottom: 36,
              }}
            >
              Stop guessing what Google wants. Rankly gives you the exact keywords, fixes, and
              content strategy to climb the rankings — automatically.
            </motion.p>

            {/* 4. CTA buttons */}
            <motion.div
              {...fadeUp(0.3)}
              className="hero-ctas"
              style={{ display: "flex", gap: 16, marginBottom: 32 }}
            >
              <motion.a
                href="#signup"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  background: "linear-gradient(135deg, #7C3AED, #FF6B6B)",
                  color: "#fff",
                  padding: "14px 32px",
                  borderRadius: 999,
                  fontWeight: 600,
                  fontSize: 16,
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                Start for Free →
              </motion.a>
              <motion.a
                href="#demo"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  border: "1px solid rgba(249,247,255,0.2)",
                  color: "#F9F7FF",
                  padding: "14px 32px",
                  borderRadius: 999,
                  fontWeight: 500,
                  fontSize: 16,
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                Watch Demo ▶
              </motion.a>
            </motion.div>

            {/* 5. Social proof */}
            <motion.div
              {...fadeUp(0.4)}
              className="hero-social"
              style={{ display: "flex", alignItems: "center", gap: 12 }}
            >
              <AvatarStack />
              <span
                style={{
                  fontSize: 14,
                  color: "rgba(249,247,255,0.6)",
                }}
              >
                Join 12k+ teams growing with Rankly
              </span>
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div
            className="hero-right hidden lg:flex items-center justify-center"
            style={{ flex: "0 0 45%", position: "relative", minHeight: 480 }}
          >
            {/* Main floating dashboard card — first in DOM so it appears first on mobile */}
            <motion.div
              className="hero-main-card-wrap"
              style={{
                ...glassmorphism,
                borderRadius: 16,
                width: 420,
                padding: 28,
                boxShadow: "0 25px 60px rgba(124,58,237,0.15)",
                position: "relative",
                zIndex: 10,
              }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
            >
              {/* Floating animation wrapper */}
              <motion.div
                animate={{ y: [0, -16, 0] }}
                transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
              >
                {/* Header row */}
                <div className="flex items-center justify-between mb-2">
                  <span
                    style={{
                      fontSize: 13,
                      color: "rgba(249,247,255,0.5)",
                      fontWeight: 500,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    SEO Score
                  </span>
                  <span
                    style={{
                      fontSize: 13,
                      color: "#FF6B6B",
                      fontWeight: 600,
                    }}
                  >
                    ↑ 12% this week
                  </span>
                </div>

                {/* Big score number */}
                <div
                  className="font-display font-bold"
                  style={{ fontSize: 72, color: "#7C3AED", lineHeight: 1, marginBottom: 16 }}
                >
                  94
                </div>

                {/* Sparkline */}
                <div style={{ borderRadius: 8, overflow: "hidden" }}>
                  <Sparkline />
                </div>

                {/* Bottom labels */}
                <div
                  className="flex justify-between mt-3"
                  style={{ fontSize: 11, color: "rgba(249,247,255,0.35)" }}
                >
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Stat cards — wrapped so mobile can display them as a row */}
            <div className="hero-stat-row">
              {/* Stat card 1 — bottom-left on desktop */}
              <div
                className="hero-stat-card-1"
                style={{
                  position: "absolute",
                  bottom: 20,
                  left: -20,
                  zIndex: 20,
                }}
              >
                <StatCard
                  label="Keywords Tracked"
                  value="1,847"
                  valueColor="#7C3AED"
                  icon={<TagIcon />}
                  delay={0.4}
                />
              </div>

              {/* Stat card 2 — top-right on desktop */}
              <div
                className="hero-stat-card-2"
                style={{
                  position: "absolute",
                  top: 20,
                  right: -20,
                  zIndex: 20,
                }}
              >
                <StatCard
                  label="Traffic Spike"
                  value="+34%"
                  valueColor="#FF6B6B"
                  icon={<TrendingUpIcon />}
                  delay={0.6}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
