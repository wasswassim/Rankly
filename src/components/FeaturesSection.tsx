"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Search, TrendingUp, Shield, Users, Zap } from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const rankData = [
  { day: 1, rank: 45 },
  { day: 2, rank: 38 },
  { day: 3, rank: 29 },
  { day: 4, rank: 22 },
  { day: 5, rank: 15 },
  { day: 6, rank: 8 },
];

const PILLS = ["seo tools", "rank tracker", "keyword research"];

// ── Keyword Explorer card ─────────────────────────────────────────────────────
function CardA() {
  return (
    <motion.div
      style={cardBase}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 40 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 8px 40px rgba(124,58,237,0.18)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <IconCircle bg="rgba(124,58,237,0.15)">
        <Search size={22} color="#7C3AED" />
      </IconCircle>
      <CardTitle>Keyword Explorer</CardTitle>
      <CardDesc>
        Discover thousands of high-value keywords your competitors are missing.
      </CardDesc>

      {/* Fake search bar */}
      <div
        style={{
          marginTop: 20,
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(124,58,237,0.2)",
          borderRadius: 8,
          padding: "12px 16px",
          fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
          fontSize: 14,
          color: "rgba(249,247,255,0.35)",
        }}
      >
        Enter your keyword…
      </div>

      {/* Stagger-in pills — once only */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 14 }}>
        {PILLS.map((pill, i) => (
          <motion.span
            key={pill}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 22,
              delay: (i + 1) * 0.1,
            }}
            style={{
              background: "rgba(124,58,237,0.15)",
              color: "#A78BFA",
              borderRadius: 999,
              padding: "6px 14px",
              fontSize: 13,
              fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
            }}
          >
            {pill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

// ── Rank Tracker card ──────────────────────────────────────────────────────────
function CardB() {
  return (
    <motion.div
      style={cardBase}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 40 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 8px 40px rgba(255,107,107,0.14)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <IconCircle bg="rgba(255,107,107,0.15)">
        <TrendingUp size={22} color="#FF6B6B" />
      </IconCircle>
      <CardTitle>Rank Tracker</CardTitle>
      <CardDesc>
        Monitor your positions daily across all major search engines.
      </CardDesc>

      <div style={{ marginTop: 20, height: 80 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={rankData}>
            <Line
              type="monotone"
              dataKey="rank"
              stroke="#7C3AED"
              strokeWidth={2}
              dot={false}
              isAnimationActive
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

// ── Site Audit card ────────────────────────────────────────────────────────────
const CIRCUMFERENCE = 2 * Math.PI * 34; // r=34

function CardC() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      style={cardBase}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 40 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 8px 40px rgba(124,58,237,0.18)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <IconCircle bg="rgba(124,58,237,0.15)">
        <Shield size={22} color="#7C3AED" />
      </IconCircle>
      <CardTitle>Site Audit</CardTitle>
      <CardDesc>
        Get a complete technical SEO audit with actionable fix recommendations.
      </CardDesc>

      {/* Circular progress ring */}
      <div
        style={{
          marginTop: 20,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <svg width={80} height={80} viewBox="0 0 80 80">
          {/* Track */}
          <circle
            cx="40"
            cy="40"
            r="34"
            fill="none"
            stroke="rgba(124,58,237,0.15)"
            strokeWidth="6"
          />
          {/* Progress */}
          <motion.circle
            cx="40"
            cy="40"
            r="34"
            fill="none"
            stroke="#7C3AED"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            initial={{ strokeDashoffset: CIRCUMFERENCE }}
            animate={
              inView
                ? {
                    strokeDashoffset:
                      CIRCUMFERENCE - (94 / 100) * CIRCUMFERENCE,
                  }
                : { strokeDashoffset: CIRCUMFERENCE }
            }
            transition={{ duration: 1.4, ease: "easeOut" }}
            transform="rotate(-90 40 40)"
          />
          <text
            x="40"
            y="46"
            textAnchor="middle"
            fontFamily="var(--font-syne), Syne, sans-serif"
            fontWeight="700"
            fontSize="18"
            fill="#7C3AED"
          >
            94
          </text>
        </svg>
      </div>
    </motion.div>
  );
}

// ── Competitor Intel card ──────────────────────────────────────────────────────
function CardD() {
  return (
    <motion.div
      style={cardBase}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 40 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 8px 40px rgba(255,107,107,0.14)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <IconCircle bg="rgba(255,107,107,0.15)">
        <Users size={22} color="#FF6B6B" />
      </IconCircle>
      <CardTitle>Competitor Intel</CardTitle>
      <CardDesc>
        See exactly what's working for your top competitors and replicate it.
      </CardDesc>

      {/* Comparison UI */}
      <div style={{ marginTop: 20 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 14,
          }}
        >
          <span
            style={{
              background: "rgba(124,58,237,0.2)",
              color: "#A78BFA",
              borderRadius: 999,
              padding: "4px 12px",
              fontSize: 13,
              fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
            }}
          >
            YourSite
          </span>
          <span
            style={{
              color: "rgba(249,247,255,0.4)",
              fontSize: 12,
              fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
            }}
          >
            vs
          </span>
          <span
            style={{
              background: "rgba(255,255,255,0.07)",
              color: "rgba(249,247,255,0.55)",
              borderRadius: 999,
              padding: "4px 12px",
              fontSize: 13,
              fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
            }}
          >
            Competitor
          </span>
        </div>

        {/* Bars */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <Bar color="#7C3AED" pct={78} label="78%" />
          <Bar color="rgba(255,255,255,0.18)" pct={45} label="45%" />
        </div>
      </div>
    </motion.div>
  );
}

function Bar({ color, pct, label }: { color: string; pct: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div
        style={{
          flex: 1,
          height: 7,
          background: "rgba(255,255,255,0.06)",
          borderRadius: 999,
          overflow: "hidden",
        }}
      >
        <motion.div
          style={{ height: "100%", background: color, borderRadius: 999 }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : { width: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />
      </div>
      <span
        style={{
          fontSize: 12,
          color: "rgba(249,247,255,0.45)",
          fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
          minWidth: 30,
        }}
      >
        {label}
      </span>
    </div>
  );
}

// ── AI Content Brief card ──────────────────────────────────────────────────────
const TYPEWRITER_TEXTS = [
  "Title: How to rank #1 on Google...",
  "Brief: Target keyword density should be...",
  "Outline: Introduction, Key Factors, Case Study...",
];

function CardE() {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false });
  const textIndexRef = useRef(0);

  useEffect(() => {
    if (!inView) return;
    let cancelled = false;

    function typeText() {
      if (cancelled) return;
      const text = TYPEWRITER_TEXTS[textIndexRef.current];
      let i = 0;
      setDisplayed("");
      const interval = setInterval(() => {
        if (cancelled) { clearInterval(interval); return; }
        i += 1;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setTimeout(() => {
            if (cancelled) return;
            setDisplayed("");
            textIndexRef.current = (textIndexRef.current + 1) % TYPEWRITER_TEXTS.length;
            setTimeout(typeText, 200);
          }, 1500);
        }
      }, 55);
    }

    typeText();
    return () => { cancelled = true; };
  }, [inView]);

  // blinking cursor
  useEffect(() => {
    const blink = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <motion.div
      ref={ref}
      style={cardBase}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 40 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 8px 40px rgba(124,58,237,0.18)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <IconCircle bg="rgba(124,58,237,0.15)">
        <Zap size={22} color="#7C3AED" />
      </IconCircle>
      <CardTitle>AI Content Brief</CardTitle>
      <CardDesc>
        Generate complete content briefs in seconds, optimized to rank.
      </CardDesc>

      <div
        style={{
          marginTop: 20,
          background: "rgba(0,0,0,0.3)",
          borderRadius: 8,
          padding: 12,
          minHeight: 40,
          fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
          fontSize: 13,
          color: "rgba(249,247,255,0.7)",
        }}
      >
        {displayed}
        <span
          style={{
            opacity: showCursor ? 1 : 0,
            transition: "opacity 0.1s",
            color: "#7C3AED",
            fontWeight: 700,
          }}
        >
          |
        </span>
      </div>
    </motion.div>
  );
}

// ── Shared micro-components ────────────────────────────────────────────────────
const cardBase: React.CSSProperties = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(124,58,237,0.15)",
  borderRadius: 16,
  padding: 32,
  height: "100%",
};

function IconCircle({
  bg,
  children,
}: {
  bg: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        width: 48,
        height: 48,
        borderRadius: "50%",
        background: bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 16,
      }}
    >
      {children}
    </div>
  );
}

function CardTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3
      style={{
        fontFamily: "var(--font-syne), Syne, sans-serif",
        fontWeight: 700,
        fontSize: 20,
        color: "#F9F7FF",
        margin: "0 0 8px",
      }}
    >
      {children}
    </h3>
  );
}

function CardDesc({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
        fontSize: 14,
        color: "rgba(249,247,255,0.6)",
        margin: 0,
        lineHeight: 1.6,
      }}
    >
      {children}
    </p>
  );
}

// ── Section ────────────────────────────────────────────────────────────────────
const STAGGER_DELAYS = [0, 0.1, 0.2, 0.3, 0.4];

export default function FeaturesSection() {
  return (
    <section
      style={{
        background: "transparent",
        padding: "120px 0",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 80px",
        }}
        className="features-container"
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
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
            Features
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
            Everything you need to rank
          </h2>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
              fontSize: 18,
              color: "rgba(249,247,255,0.6)",
              maxWidth: 520,
              margin: "16px auto 0",
              lineHeight: 1.7,
            }}
          >
            All the SEO tools you need in one place. No bloat, no complexity —
            just results.
          </p>
        </div>

        {/* Bento grid */}
        <div
          className="features-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gridTemplateRows: "auto auto",
            gap: 20,
          }}
        >
          {/* Row 1 */}
          <motion.div
            style={{ gridColumn: "1 / 2", height: "100%" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 300,
              delay: STAGGER_DELAYS[0],
            }}
          >
            <CardA />
          </motion.div>

          <motion.div
            style={{ gridColumn: "2 / 3", height: "100%" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 300,
              delay: STAGGER_DELAYS[1],
            }}
          >
            <CardB />
          </motion.div>

          {/* Row 2 — 3 equal columns */}
          <div
            style={{
              gridColumn: "1 / -1",
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 20,
              alignItems: "stretch",
            }}
            className="features-row2"
          >
            <motion.div
              style={{ height: "100%" }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 300,
                delay: STAGGER_DELAYS[2],
              }}
            >
              <CardC />
            </motion.div>
            <motion.div
              style={{ height: "100%" }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 300,
                delay: STAGGER_DELAYS[3],
              }}
            >
              <CardD />
            </motion.div>
            <motion.div
              style={{ height: "100%" }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 300,
                delay: STAGGER_DELAYS[4],
              }}
            >
              <CardE />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
