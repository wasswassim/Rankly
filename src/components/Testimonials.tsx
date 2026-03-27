"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// ── Types & data ──────────────────────────────────────────────────────────────
type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatarBg: string;
  initials: string;
};

const ROW1: Testimonial[] = [
  {
    quote:
      "Rankly helped us go from page 4 to position #2 in just 6 weeks. The keyword suggestions alone paid for itself.",
    name: "Sarah K.",
    role: "Head of Growth",
    company: "Growthify",
    avatarBg: "#7C3AED",
    initials: "SK",
  },
  {
    quote:
      "The site audit feature caught 47 critical issues we didn't even know existed. Fixed them all in a weekend.",
    name: "Marcus T.",
    role: "Founder",
    company: "Nexlane",
    avatarBg: "#FF6B6B",
    initials: "MT",
  },
  {
    quote:
      "Finally an SEO tool that doesn't require a PhD to use. Clean, fast, and the results speak for themselves.",
    name: "Priya M.",
    role: "Marketing Director",
    company: "Clariva",
    avatarBg: "#059669",
    initials: "PM",
  },
  {
    quote:
      "Competitor Intel is a game changer. I can see exactly which keywords my rivals rank for and target them directly.",
    name: "James R.",
    role: "SEO Lead",
    company: "Peakly",
    avatarBg: "#D97706",
    initials: "JR",
  },
  {
    quote:
      "Went from 800 to 12,000 monthly visitors in 4 months. Rankly's content briefs are incredibly accurate.",
    name: "Aisha B.",
    role: "Content Strategist",
    company: "Vortex",
    avatarBg: "#7C3AED",
    initials: "AB",
  },
  {
    quote:
      "The rank tracking is real-time and dead accurate. Best investment we made for our agency this year.",
    name: "Tom W.",
    role: "Agency Owner",
    company: "Lumiq",
    avatarBg: "#FF6B6B",
    initials: "TW",
  },
];

const ROW2: Testimonial[] = [
  {
    quote:
      "Set up took 5 minutes. First ranking improvement showed up within 10 days. Incredible.",
    name: "Nina L.",
    role: "Blogger",
    company: "StyleWithNina",
    avatarBg: "#EC4899",
    initials: "NL",
  },
  {
    quote:
      "Our e-commerce store jumped 3 positions for our main keywords. Revenue up 34% since using Rankly.",
    name: "David C.",
    role: "E-commerce Owner",
    company: "",
    avatarBg: "#059669",
    initials: "DC",
  },
  {
    quote:
      "The AI content briefs save me 3 hours per article. Worth every penny just for that feature alone.",
    name: "Rachel S.",
    role: "Freelance Writer",
    company: "",
    avatarBg: "#6366F1",
    initials: "RS",
  },
  {
    quote:
      "I manage SEO for 12 clients. Rankly's multi-site dashboard is the only tool I need.",
    name: "Carlos M.",
    role: "SEO Consultant",
    company: "",
    avatarBg: "#D97706",
    initials: "CM",
  },
  {
    quote:
      "Switched from a competitor tool and immediately noticed better keyword suggestions and a cleaner interface.",
    name: "Lisa P.",
    role: "Digital Marketer",
    company: "",
    avatarBg: "#7C3AED",
    initials: "LP",
  },
  {
    quote:
      "The weekly audit reports are so detailed my clients think I have a full team working on their SEO.",
    name: "Ben H.",
    role: "Solo Consultant",
    company: "",
    avatarBg: "#FF6B6B",
    initials: "BH",
  },
];

// ── Card ──────────────────────────────────────────────────────────────────────
function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <motion.div
      className="testimonial-card"
      whileHover={{
        scale: 1.03,
        borderColor: "rgba(124,58,237,0.3)",
        boxShadow: "0 8px 32px rgba(124,58,237,0.12)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
      style={{
        width: 340,
        flexShrink: 0,
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "rgba(255,255,255,0.08)",
        borderRadius: 16,
        padding: 28,
      }}
    >
      {/* Stars */}
      <div
        style={{
          fontSize: 14,
          letterSpacing: 2,
          color: "#FF6B6B",
          marginBottom: 16,
        }}
      >
        ★★★★★
      </div>

      {/* Quote */}
      <p
        style={{
          fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
          fontSize: 15,
          fontStyle: "italic",
          color: "rgba(249,247,255,0.85)",
          lineHeight: 1.7,
          margin: "0 0 20px",
        }}
      >
        &ldquo;{t.quote}&rdquo;
      </p>

      {/* Author */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: t.avatarBg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
              fontSize: 14,
              fontWeight: 700,
              color: "#fff",
            }}
          >
            {t.initials}
          </span>
        </div>
        <div>
          <div
            style={{
              fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
              fontSize: 14,
              fontWeight: 700,
              color: "#F9F7FF",
            }}
          >
            {t.name}
          </div>
          <div
            style={{
              fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
              fontSize: 13,
              color: "rgba(249,247,255,0.5)",
            }}
          >
            {t.role}
            {t.company ? ` at ${t.company}` : ""}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ── Marquee row ───────────────────────────────────────────────────────────────
function MarqueeRow({
  testimonials,
  direction,
  duration,
  className,
}: {
  testimonials: Testimonial[];
  direction: "left" | "right";
  duration: number;
  className?: string;
}) {
  const [paused, setPaused] = useState(false);
  const animName = direction === "left" ? "marqueeLeft" : "marqueeRight";

  return (
    <div
      className={className}
      style={{ overflow: "hidden", width: "100%" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        style={{
          display: "flex",
          gap: 24,
          width: "max-content",
          animation: `${animName} ${duration}s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {[...testimonials, ...testimonials].map((t, i) => (
          <TestimonialCard key={i} t={t} />
        ))}
      </div>
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function Testimonials() {
  return (
    <section
      className="testimonials-section"
      style={{
        background:
          "radial-gradient(ellipse at center, rgba(124,58,237,0.06) 0%, transparent 70%), #0D0D14",
        padding: "120px 0",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        className="testimonials-header"
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 80px",
          textAlign: "center",
          marginBottom: 48,
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
            fontSize: 12,
            letterSpacing: 3,
            color: "#7C3AED",
            marginBottom: 16,
            textTransform: "uppercase",
          }}
        >
          Testimonials
        </p>
        <h2
          style={{
            fontFamily: "var(--font-syne), Syne, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(36px, 4vw, 56px)",
            color: "#F9F7FF",
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          Loved by 12,000+ marketers
        </h2>
        <p
          style={{
            fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
            fontSize: 18,
            color: "rgba(249,247,255,0.6)",
            maxWidth: 480,
            margin: "16px auto 0",
            lineHeight: 1.7,
          }}
        >
          Don&apos;t take our word for it — here&apos;s what our customers say.
        </p>
      </div>

      {/* Rows */}
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <MarqueeRow testimonials={ROW1} direction="left" duration={35} />
        <MarqueeRow
          testimonials={ROW2}
          direction="right"
          duration={45}
          className="testimonials-row2"
        />
      </div>
    </section>
  );
}
