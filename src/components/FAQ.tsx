"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "Is there a free plan available?",
    a: "Yes! Our Starter plan is completely free forever. You get 1 website, 50 keywords tracked, and weekly site audits — no credit card required.",
  },
  {
    q: "How accurate is the rank tracking?",
    a: "Our rank tracking pulls data directly from search engine APIs and updates daily. Accuracy is consistently above 98% when compared to manual searches across all major search engines.",
  },
  {
    q: "Can I track rankings for multiple locations?",
    a: "Yes, Pro and Business plans support local rank tracking across different cities and countries. You can set up location-specific tracking for any keyword in any market.",
  },
  {
    q: "How does the AI Content Brief work?",
    a: "Our AI analyzes the top 10 ranking pages for your target keyword and extracts the common topics, structure, and semantic keywords. It then generates a complete brief that tells you exactly what to cover to outrank them.",
  },
  {
    q: "Do you offer refunds?",
    a: "Yes, we offer a 14-day money-back guarantee on all paid plans. If you're not happy for any reason, contact our support team and we'll refund you in full — no questions asked.",
  },
  {
    q: "Can I cancel my subscription anytime?",
    a: "Absolutely. There are no contracts or lock-in periods. You can cancel your subscription at any time directly from your account settings and you won't be charged again.",
  },
  {
    q: "Do you integrate with Google Search Console?",
    a: "Yes, Rankly integrates directly with Google Search Console and Google Analytics. Connect your accounts in one click to pull in your existing data and supercharge your insights.",
  },
];

// ── Accordion item ─────────────────────────────────────────────────────────────
function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: { q: string; a: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      onClick={onToggle}
      style={{
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: isOpen ? "24px 0 24px 16px" : "24px 0",
        borderLeft: isOpen ? "3px solid #7C3AED" : "3px solid transparent",
        cursor: "pointer",
        transition: "padding 0.2s ease, border-color 0.2s ease",
      }}
      whileHover={{
        background: "rgba(124,58,237,0.03)",
      }}
    >
      {/* Question row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
            fontSize: 16,
            fontWeight: 500,
            lineHeight: 1.5,
            ...(isOpen
              ? {
                  background: "linear-gradient(135deg, #7C3AED 0%, #FF6B6B 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }
              : { color: "#F9F7FF" }),
            transition: "color 0.2s ease",
          }}
          className={isOpen ? "" : "faq-question-text"}
        >
          {item.q}
        </span>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          style={{ flexShrink: 0 }}
        >
          <ChevronDown
            size={20}
            color="rgba(249,247,255,0.4)"
          />
        </motion.div>
      </div>

      {/* Answer — animated height */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <p
              style={{
                fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
                fontSize: 15,
                color: "rgba(249,247,255,0.65)",
                lineHeight: 1.8,
                margin: "12px 0 0",
              }}
            >
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section
      className="faq-section"
      style={{
        background: "transparent",
        padding: "120px 0",
      }}
    >
      <div
        className="faq-container"
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 80px",
          display: "flex",
          gap: 80,
          alignItems: "flex-start",
        }}
      >
        {/* ── Left column — sticky ── */}
        <div
          className="faq-left"
          style={{
            width: "40%",
            flexShrink: 0,
            position: "sticky",
            top: 120,
          }}
        >
          {/* Eyebrow */}
          <p
            style={{
              fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
              fontSize: 12,
              letterSpacing: 3,
              color: "#7C3AED",
              marginBottom: 16,
              textTransform: "uppercase",
              margin: "0 0 16px",
            }}
          >
            FAQ
          </p>

          {/* Heading */}
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
            Got questions?
          </h2>

          {/* Subtext */}
          <p
            style={{
              fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
              fontSize: 16,
              color: "rgba(249,247,255,0.6)",
              marginTop: 16,
              maxWidth: 320,
              lineHeight: 1.7,
            }}
          >
            Everything you need to know about Rankly. Can&apos;t find the
            answer? Chat with our team.
          </p>

          {/* Animated blob */}
          <div className="faq-blob" style={{ marginTop: 32 }} />

          {/* CTA link */}
          <a
            href="#"
            className="faq-cta-link"
            style={{
              display: "inline-block",
              marginTop: 24,
              fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
              fontSize: 14,
              color: "#A78BFA",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "#F9F7FF")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "#A78BFA")
            }
          >
            Still lost? Chat with us →
          </a>
        </div>

        {/* ── Right column — accordion ── */}
        <div className="faq-right" style={{ flex: 1, minWidth: 0 }}>
          {FAQS.map((item, i) => (
            <AccordionItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
