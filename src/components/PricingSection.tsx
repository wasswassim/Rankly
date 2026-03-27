"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Billing = "monthly" | "annual";

// ── Feature row ───────────────────────────────────────────────────────────────
function Feature({ text }: { text: string }) {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 10,
        fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
        fontSize: 14,
        color: "rgba(249,247,255,0.75)",
        listStyle: "none",
        padding: "5px 0",
      }}
    >
      <span
        style={{
          color: "#FF6B6B",
          fontWeight: 700,
          flexShrink: 0,
          marginTop: 1,
        }}
      >
        ✓
      </span>
      {text}
    </li>
  );
}

// ── Animated price flip ───────────────────────────────────────────────────────
function AnimatedPrice({
  prices,
  billing,
}: {
  prices: { monthly: string; annual: string };
  billing: Billing;
}) {
  const price = billing === "monthly" ? prices.monthly : prices.annual;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        gap: 4,
        marginBottom: 4,
      }}
    >
      <div style={{ overflow: "hidden", lineHeight: 1 }}>
        <AnimatePresence mode="wait">
          <motion.span
            key={price}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{
              fontFamily: "var(--font-syne), Syne, sans-serif",
              fontWeight: 700,
              fontSize: 56,
              color: "#F9F7FF",
              lineHeight: 1,
              display: "block",
            }}
          >
            {price}
          </motion.span>
        </AnimatePresence>
      </div>
      <span
        style={{
          fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
          fontSize: 16,
          color: "rgba(249,247,255,0.5)",
          paddingBottom: 6,
        }}
      >
        /month
      </span>
    </div>
  );
}

// ── Shared label + desc styles ────────────────────────────────────────────────
const planLabel: React.CSSProperties = {
  fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
  fontSize: 13,
  letterSpacing: 2,
  color: "#A78BFA",
  margin: "0 0 16px",
  textTransform: "uppercase",
};

const planDesc: React.CSSProperties = {
  fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
  fontSize: 14,
  color: "rgba(249,247,255,0.5)",
  margin: "8px 0 24px",
  lineHeight: 1.6,
};

// ── Card 1 — Starter ──────────────────────────────────────────────────────────
function StarterCard({ billing }: { billing: Billing }) {
  return (
    <motion.div
      className="pricing-card"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 0.95 }}
      viewport={{ once: true }}
      whileHover={{
        y: -8,
        scale: 0.97,
        boxShadow: "0 20px 60px rgba(124,58,237,0.12)",
      }}
      transition={{ type: "spring", stiffness: 300, delay: 0 }}
      style={{
        flex: 1,
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(249,247,255,0.1)",
        borderRadius: 16,
        padding: "40px 32px",
      }}
    >
      <p style={planLabel}>Starter</p>
      <AnimatedPrice prices={{ monthly: "$0", annual: "$0" }} billing={billing} />
      <p style={planDesc}>
        Perfect for individuals and small sites just getting started.
      </p>
      <ul style={{ padding: 0, margin: "0 0 32px" }}>
        {[
          "1 website",
          "50 keywords tracked",
          "Weekly site audit",
          "Basic analytics",
          "Email support",
        ].map((f) => (
          <Feature key={f} text={f} />
        ))}
      </ul>
      <motion.button
        suppressHydrationWarning={true}
        whileHover={{ background: "rgba(255,255,255,0.05)" }}
        style={{
          width: "100%",
          padding: "14px",
          borderRadius: 999,
          border: "1px solid rgba(249,247,255,0.2)",
          background: "transparent",
          color: "#F9F7FF",
          fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
          fontSize: 15,
          cursor: "pointer",
        }}
      >
        Get Started Free
      </motion.button>
    </motion.div>
  );
}

// ── Card 2 — Pro ──────────────────────────────────────────────────────────────
function ProCard({ billing }: { billing: Billing }) {
  return (
    <div
      className="pricing-card-pro-outer"
      style={{ flex: 1, position: "relative", paddingTop: 22 }}
    >
      {/* Floating "Most Popular" badge */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          background: "linear-gradient(135deg, #7C3AED 0%, #FF6B6B 100%)",
          color: "#fff",
          fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
          fontSize: 12,
          fontWeight: 700,
          borderRadius: 999,
          padding: "6px 16px",
          whiteSpace: "nowrap",
          zIndex: 2,
        }}
      >
        Most Popular
      </div>

      {/* Shimmer border wrapper + card */}
      <motion.div
        className="pro-card-border"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -8, boxShadow: "0 24px 80px rgba(124,58,237,0.25)" }}
        transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
      >
        {/* Inner card — sits inside the 1.5px gradient border gap */}
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(255,107,107,0.05) 100%)",
            borderRadius: 14.5,
            padding: "40px 32px",
          }}
        >
          <p style={planLabel}>Pro</p>
          <AnimatedPrice
            prices={{ monthly: "$49", annual: "$39" }}
            billing={billing}
          />
          <p style={planDesc}>For growing businesses serious about SEO.</p>
          <ul style={{ padding: 0, margin: "0 0 32px" }}>
            {[
              "5 websites",
              "500 keywords tracked",
              "Daily site audit",
              "Advanced analytics",
              "Competitor tracking (3 competitors)",
              "AI content briefs (20/month)",
              "Priority support",
              "API access",
            ].map((f) => (
              <Feature key={f} text={f} />
            ))}
          </ul>
          <motion.button
            suppressHydrationWarning={true}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: 999,
              border: "none",
              background:
                "linear-gradient(135deg, #7C3AED 0%, #FF6B6B 100%)",
              color: "#fff",
              fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
              fontSize: 15,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Get Started with Pro
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

// ── Card 3 — Business ─────────────────────────────────────────────────────────
function BusinessCard({ billing }: { billing: Billing }) {
  return (
    <motion.div
      className="pricing-card"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 0.95 }}
      viewport={{ once: true }}
      whileHover={{
        y: -8,
        scale: 0.97,
        boxShadow: "0 20px 60px rgba(124,58,237,0.15)",
      }}
      transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
      style={{
        flex: 1,
        background: "#1a1025",
        border: "1px solid rgba(124,58,237,0.2)",
        borderRadius: 16,
        padding: "40px 32px",
      }}
    >
      <p style={planLabel}>Business</p>
      <AnimatedPrice
        prices={{ monthly: "$149", annual: "$119" }}
        billing={billing}
      />
      <p style={planDesc}>
        For agencies and enterprises managing multiple clients.
      </p>
      <ul style={{ padding: 0, margin: "0 0 32px" }}>
        {[
          "Unlimited websites",
          "Unlimited keywords",
          "Real-time audit",
          "White-label reports",
          "Unlimited competitors",
          "AI content briefs (unlimited)",
          "Dedicated account manager",
          "Custom integrations",
        ].map((f) => (
          <Feature key={f} text={f} />
        ))}
      </ul>
      <motion.button
        suppressHydrationWarning={true}
        whileHover={{ background: "rgba(124,58,237,0.08)", color: "#A78BFA" }}
        style={{
          width: "100%",
          padding: "14px",
          borderRadius: 999,
          border: "1px solid rgba(124,58,237,0.4)",
          background: "transparent",
          color: "#F9F7FF",
          fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
          fontSize: 15,
          cursor: "pointer",
        }}
      >
        Contact Sales
      </motion.button>
    </motion.div>
  );
}

// ── Section ────────────────────────────────────────────────────────────────────
export default function PricingSection() {
  const [billing, setBilling] = useState<Billing>("monthly");

  return (
    <section style={{ background: "transparent", padding: "120px 0" }}>
      <div
        style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}
        className="pricing-container"
      >
        {/* Header */}
        <div style={{ textAlign: "center" }}>
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
            Pricing
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
            Simple, transparent pricing
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
            Start free, scale when you&apos;re ready. No hidden fees, no surprises.
          </p>
        </div>

        {/* Monthly / Annual toggle */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 40,
            marginBottom: 64,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(124,58,237,0.2)",
              borderRadius: 999,
              padding: 4,
            }}
          >
            {(["monthly", "annual"] as Billing[]).map((option) => (
              <button
                suppressHydrationWarning={true}
                key={option}
                onClick={() => setBilling(option)}
                style={{
                  position: "relative",
                  padding: "8px 24px",
                  borderRadius: 999,
                  border: "none",
                  background: "transparent",
                  color:
                    billing === option
                      ? "#0D0D14"
                      : "rgba(249,247,255,0.5)",
                  fontFamily:
                    "var(--font-dm-sans), DM Sans, sans-serif",
                  fontSize: 14,
                  cursor: "pointer",
                  zIndex: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  transition: "color 0.2s ease",
                }}
              >
                {/* Sliding active pill */}
                {billing === option && (
                  <motion.div
                    layoutId="pricing-toggle-pill"
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: 999,
                      background: "#fff",
                      zIndex: -1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
                {option === "monthly" ? "Monthly" : "Annual"}
                {/* Save 20% badge — shown only when annual is active */}
                {option === "annual" && billing === "annual" && (
                  <span
                    style={{
                      background: "rgba(255,107,107,0.15)",
                      color: "#FF6B6B",
                      fontSize: 11,
                      fontWeight: 600,
                      borderRadius: 999,
                      padding: "3px 8px",
                    }}
                  >
                    Save 20%
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div
          style={{ display: "flex", gap: 24, alignItems: "center" }}
          className="pricing-cards"
        >
          <StarterCard billing={billing} />
          <ProCard billing={billing} />
          <BusinessCard billing={billing} />
        </div>
      </div>
    </section>
  );
}
