"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, CheckSquare, TrendingUp } from "lucide-react";

// ── Step 1 Mockup: Browser frame with typewriter ──────────────────────────────
const URL_TEXT = "https://yoursite.com";

function BrowserMockup() {
  const [displayed, setDisplayed] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false });

  useEffect(() => {
    if (!inView) return;
    let cancelled = false;
    let i = 0;
    setDisplayed("");
    const interval = setInterval(() => {
      if (cancelled) { clearInterval(interval); return; }
      i++;
      setDisplayed(URL_TEXT.slice(0, i));
      if (i >= URL_TEXT.length) clearInterval(interval);
    }, 80);
    return () => { cancelled = true; clearInterval(interval); };
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(124,58,237,0.2)",
        borderRadius: 12,
        padding: 20,
        width: "100%",
        maxWidth: 380,
      }}
    >
      {/* Browser chrome dots */}
      <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#FF5F57" }} />
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#FFBD2E" }} />
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#28CA41" }} />
      </div>
      {/* URL bar */}
      <div
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(124,58,237,0.15)",
          borderRadius: 6,
          padding: "8px 12px",
          fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
          fontSize: 13,
          color: "rgba(249,247,255,0.7)",
          minHeight: 36,
        }}
      >
        {displayed}
        <span style={{ color: "#7C3AED", fontWeight: 700 }}>|</span>
      </div>
      {/* Skeleton content */}
      <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 8 }}>
        {[80, 60, 90, 50].map((w, i) => (
          <div
            key={i}
            style={{
              height: 8,
              background: "rgba(255,255,255,0.05)",
              borderRadius: 4,
              width: `${w}%`,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

// ── Step 2 Mockup: Animated checklist ─────────────────────────────────────────
const CHECKLIST_ITEMS = [
  "Fix 14 broken meta tags",
  "Improve page speed score",
  "Add schema markup to 8 pages",
];

function ChecklistMockup() {
  const [checkedCount, setCheckedCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false });

  useEffect(() => {
    if (!inView) return;
    let count = 0;
    let cancelled = false;
    setCheckedCount(0);

    function tick() {
      if (cancelled) return;
      count++;
      setCheckedCount(count);
      if (count < CHECKLIST_ITEMS.length) {
        setTimeout(tick, 600);
      } else {
        setTimeout(() => {
          if (!cancelled) {
            setCheckedCount(0);
            count = 0;
            setTimeout(tick, 400);
          }
        }, 1500);
      }
    }

    setTimeout(tick, 600);
    return () => { cancelled = true; };
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(124,58,237,0.2)",
        borderRadius: 12,
        padding: 20,
        width: "100%",
        maxWidth: 380,
      }}
    >
      {CHECKLIST_ITEMS.map((item, i) => (
        <div
          key={item}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "10px 0",
            borderBottom:
              i < CHECKLIST_ITEMS.length - 1
                ? "1px solid rgba(124,58,237,0.08)"
                : "none",
          }}
        >
          <motion.div
            animate={
              checkedCount > i
                ? {
                    scale: [0.8, 1.3, 1],
                    background: "rgba(124,58,237,0.25)",
                  }
                : { scale: 1, background: "rgba(255,255,255,0.05)" }
            }
            transition={{ type: "tween", ease: "easeInOut", duration: 0.35 }}
            style={{
              width: 22,
              height: 22,
              borderRadius: "50%",
              border: "1px solid rgba(124,58,237,0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none"
              style={{ opacity: checkedCount > i ? 1 : 0, transition: "opacity 0.2s" }}
            >
              <path
                d="M1 4L3.5 6.5L9 1"
                stroke="#7C3AED"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
          <span
            style={{
              fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
              fontSize: 14,
              color:
                checkedCount > i
                  ? "rgba(249,247,255,0.9)"
                  : "rgba(249,247,255,0.4)",
              transition: "color 0.3s ease",
            }}
          >
            {item}
          </span>
        </div>
      ))}
    </motion.div>
  );
}

// ── Step 3 Mockup: Drawing line chart ─────────────────────────────────────────
const CHART_PATH = "M 20,95 C 70,80 110,60 150,40 C 175,25 195,15 220,8";
const CHART_DOTS = [
  { cx: 20, cy: 95 },
  { cx: 150, cy: 40 },
  { cx: 220, cy: 8 },
];

function LineChartMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(124,58,237,0.2)",
        borderRadius: 12,
        padding: 20,
        width: "100%",
        maxWidth: 380,
      }}
    >
      <svg width="100%" viewBox="0 0 240 110" style={{ overflow: "visible" }}>
        <defs>
          <linearGradient id="hiwLineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#FF6B6B" />
          </linearGradient>
          <linearGradient id="hiwAreaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Area fill */}
        <motion.path
          d="M 20,95 C 70,80 110,60 150,40 C 175,25 195,15 220,8 L 220,105 L 20,105 Z"
          fill="url(#hiwAreaGrad)"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        />

        {/* Animated line */}
        <motion.path
          d={CHART_PATH}
          fill="none"
          stroke="url(#hiwLineGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Dot markers */}
        {CHART_DOTS.map((dot, i) => (
          <motion.circle
            key={i}
            cx={dot.cx}
            cy={dot.cy}
            r="5"
            fill="#7C3AED"
            stroke="rgba(124,58,237,0.35)"
            strokeWidth="3"
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{
              delay: 0.4 + i * 0.4,
              type: "spring",
              stiffness: 300,
            }}
          />
        ))}
      </svg>
    </motion.div>
  );
}

// ── Circle node on connector line ─────────────────────────────────────────────
function StepNode() {
  return (
    <motion.div
      whileInView={{
        scale: [1, 1.5, 1],
        boxShadow: [
          "0 0 0 0px rgba(124,58,237,0.5)",
          "0 0 0 8px rgba(124,58,237,0)",
          "0 0 0 0px rgba(124,58,237,0)",
        ],
      }}
      viewport={{ once: false }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      style={{
        width: 14,
        height: 14,
        borderRadius: "50%",
        background: "#7C3AED",
        border: "2px solid rgba(124,58,237,0.45)",
        flexShrink: 0,
      }}
    />
  );
}

// ── Step text block ────────────────────────────────────────────────────────────
function StepText({
  num,
  iconBg,
  iconColor,
  icon: Icon,
  title,
  copy,
  fromRight,
}: {
  num: string;
  iconBg: string;
  iconColor: string;
  icon: React.ComponentType<{ size: number; color: string }>;
  title: string;
  copy: string;
  fromRight: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: fromRight ? 40 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ position: "relative", padding: "40px 0" }}
    >
      {/* Ghost step number */}
      <div
        className="hiw-step-num"
        style={{
          position: "absolute",
          top: 0,
          [fromRight ? "right" : "left"]: -10,
          fontFamily: "var(--font-syne), Syne, sans-serif",
          fontWeight: 800,
          fontSize: 120,
          color: "rgba(124,58,237,0.08)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        {num}
      </div>

      {/* Icon pill */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          background: iconBg,
          borderRadius: 999,
          padding: "10px 20px",
          marginBottom: 20,
        }}
      >
        <Icon size={18} color={iconColor} />
      </div>

      <h3
        style={{
          fontFamily: "var(--font-syne), Syne, sans-serif",
          fontWeight: 700,
          fontSize: 28,
          color: "#F9F7FF",
          margin: "0 0 12px",
          lineHeight: 1.2,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
          fontSize: 16,
          color: "rgba(249,247,255,0.65)",
          margin: 0,
          lineHeight: 1.7,
          maxWidth: 400,
        }}
      >
        {copy}
      </p>
    </motion.div>
  );
}

// ── Section ────────────────────────────────────────────────────────────────────
export default function HowItWorks() {
  const stepsRef = useRef<HTMLDivElement>(null);
  const lineInView = useInView(stepsRef, { once: true });

  return (
    <section style={{ background: "transparent", padding: "120px 0" }}>
      <div
        style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}
        className="hiw-container"
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 80 }}>
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
            How It Works
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
            Up and running in minutes
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
            Three simple steps to start climbing the rankings.
          </p>
        </div>

        {/* Steps */}
        <div
          ref={stepsRef}
          className="hiw-steps"
          style={{ position: "relative" }}
        >
          {/* Vertical dashed connector line */}
          <div
            className="hiw-line"
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: 1,
              transform: "translateX(-50%)",
              overflow: "hidden",
              pointerEvents: "none",
            }}
          >
            <motion.div
              initial={{ scaleY: 0 }}
              animate={lineInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
              style={{
                width: "100%",
                height: "100%",
                transformOrigin: "top",
                backgroundImage:
                  "repeating-linear-gradient(to bottom, rgba(124,58,237,0.3) 0px, rgba(124,58,237,0.3) 6px, transparent 6px, transparent 14px)",
              }}
            />
          </div>

          {/* Step 1: left text · center node · right mockup */}
          <div
            className="hiw-step"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 60px 1fr",
              alignItems: "center",
            }}
          >
            <div className="hiw-text" style={{ paddingRight: 48 }}>
              <StepText
                num="01"
                iconBg="rgba(124,58,237,0.15)"
                iconColor="#7C3AED"
                icon={Globe}
                title="Connect your site"
                copy="Enter your URL and we instantly crawl your entire site — finding every opportunity and issue in seconds."
                fromRight={false}
              />
            </div>
            <div className="hiw-node" style={{ display: "flex", justifyContent: "center" }}>
              <StepNode />
            </div>
            <div className="hiw-mockup" style={{ paddingLeft: 48 }}>
              <BrowserMockup />
            </div>
          </div>

          {/* Step 2: left mockup · center node · right text */}
          <div
            className="hiw-step"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 60px 1fr",
              alignItems: "center",
            }}
          >
            <div className="hiw-mockup" style={{ paddingRight: 48 }}>
              <ChecklistMockup />
            </div>
            <div className="hiw-node" style={{ display: "flex", justifyContent: "center" }}>
              <StepNode />
            </div>
            <div className="hiw-text" style={{ paddingLeft: 48 }}>
              <StepText
                num="02"
                iconBg="rgba(124,58,237,0.15)"
                iconColor="#7C3AED"
                icon={CheckSquare}
                title="Get your full audit"
                copy="Receive a prioritized list of fixes ranked by impact. Know exactly what to fix first to see the fastest results."
                fromRight={true}
              />
            </div>
          </div>

          {/* Step 3: left text · center node · right mockup */}
          <div
            className="hiw-step"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 60px 1fr",
              alignItems: "center",
            }}
          >
            <div className="hiw-text" style={{ paddingRight: 48 }}>
              <StepText
                num="03"
                iconBg="rgba(255,107,107,0.15)"
                iconColor="#FF6B6B"
                icon={TrendingUp}
                title="Start growing"
                copy="Watch your rankings climb week over week. Track every keyword, every position change, every win — all in one dashboard."
                fromRight={false}
              />
            </div>
            <div className="hiw-node" style={{ display: "flex", justifyContent: "center" }}>
              <StepNode />
            </div>
            <div className="hiw-mockup" style={{ paddingLeft: 48 }}>
              <LineChartMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
