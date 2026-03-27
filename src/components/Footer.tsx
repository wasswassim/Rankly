"use client";

import { motion } from "framer-motion";
import { Hash, Link, Globe, ArrowRight } from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────────────
const PRODUCT_LINKS = [
  "Features",
  "How it Works",
  "Pricing",
  "Changelog",
  "Roadmap",
];

const COMPANY_LINKS = ["About", "Blog", "Careers", "Press", "Contact"];

const LEGAL_LINKS = ["Privacy Policy", "Terms of Service", "Cookies"];

// ── Sub-components ─────────────────────────────────────────────────────────────
function FooterLink({ label }: { label: string }) {
  return (
    <motion.a
      href="#"
      whileHover={{ x: 4, color: "#F9F7FF" }}
      transition={{ type: "tween", duration: 0.2 }}
      style={{
        display: "block",
        fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
        fontSize: 14,
        color: "rgba(249,247,255,0.6)",
        textDecoration: "none",
      }}
    >
      {label}
    </motion.a>
  );
}

function SocialIcon({ icon: Icon }: { icon: React.ElementType }) {
  return (
    <motion.a
      href="#"
      whileHover={{
        scale: 1.1,
        background: "rgba(124,58,237,0.15)",
        borderColor: "rgba(124,58,237,0.3)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{
        width: 36,
        height: 36,
        borderRadius: "50%",
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.08)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        textDecoration: "none",
      }}
    >
      <Icon size={15} color="rgba(249,247,255,0.5)" />
    </motion.a>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function Footer() {
  return (
    <footer
      style={{
        background: "#0D0D14",
        paddingTop: 80,
        position: "relative",
      }}
    >
      {/* Top gradient line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background:
            "linear-gradient(90deg, transparent 0%, #7C3AED 50%, transparent 100%)",
        }}
      />

      {/* Main grid */}
      <div
        className="footer-grid"
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 80px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 48,
          paddingBottom: 64,
        }}
      >
        {/* Column 1 — Brand */}
        <motion.div
          className="footer-col footer-col-brand"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
        >
          {/* Logo */}
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              textDecoration: "none",
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 18L10 10L14 14L19 6"
                stroke="#7C3AED"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 6H19V11"
                stroke="#7C3AED"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              style={{
                fontFamily: "var(--font-syne), Syne, sans-serif",
                fontWeight: 700,
                fontSize: 20,
                color: "#7C3AED",
                letterSpacing: "-0.3px",
              }}
            >
              Rankly
            </span>
          </a>

          {/* Tagline */}
          <p
            style={{
              fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
              fontSize: 14,
              color: "rgba(249,247,255,0.5)",
              marginTop: 12,
              marginBottom: 0,
            }}
          >
            Grow your traffic. Simply.
          </p>

          {/* Social icons */}
          <div
            className="footer-social"
            style={{ display: "flex", gap: 12, marginTop: 24 }}
          >
            <SocialIcon icon={Hash} />
            <SocialIcon icon={Link} />
            <SocialIcon icon={Globe} />
          </div>
        </motion.div>

        {/* Column 2 — Product */}
        <motion.div
          className="footer-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          <p
            style={{
              fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
              fontSize: 12,
              letterSpacing: 2,
              color: "rgba(249,247,255,0.4)",
              marginBottom: 20,
              textTransform: "uppercase",
              margin: "0 0 20px",
            }}
          >
            Product
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {PRODUCT_LINKS.map((label) => (
              <FooterLink key={label} label={label} />
            ))}
          </div>
        </motion.div>

        {/* Column 3 — Company */}
        <motion.div
          className="footer-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          <p
            style={{
              fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
              fontSize: 12,
              letterSpacing: 2,
              color: "rgba(249,247,255,0.4)",
              marginBottom: 20,
              textTransform: "uppercase",
              margin: "0 0 20px",
            }}
          >
            Company
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {COMPANY_LINKS.map((label) => (
              <FooterLink key={label} label={label} />
            ))}
          </div>
        </motion.div>

        {/* Column 4 — Newsletter */}
        <motion.div
          className="footer-col footer-col-newsletter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        >
          <p
            style={{
              fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
              fontSize: 14,
              fontWeight: 500,
              color: "#F9F7FF",
              marginBottom: 8,
              margin: "0 0 8px",
            }}
          >
            Stay in the loop
          </p>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
              fontSize: 13,
              color: "rgba(249,247,255,0.5)",
              marginBottom: 16,
              margin: "0 0 16px",
              lineHeight: 1.6,
            }}
          >
            Get SEO tips and product updates delivered to your inbox.
          </p>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <input
              suppressHydrationWarning={true}
              type="email"
              placeholder="Your email"
              className="footer-newsletter-input"
              style={{
                flex: 1,
                padding: "10px 16px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(124,58,237,0.2)",
                borderRadius: 999,
                color: "#F9F7FF",
                fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
                fontSize: 13,
                outline: "none",
                minWidth: 0,
              }}
            />
            <motion.button
              suppressHydrationWarning={true}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, #7C3AED 0%, #FF6B6B 100%)",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                cursor: "pointer",
              }}
            >
              <ArrowRight size={16} color="#fff" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          className="footer-bottom"
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "24px 80px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
              fontSize: 13,
              color: "rgba(249,247,255,0.35)",
            }}
          >
            © 2025 Rankly. All rights reserved.
          </span>

          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {LEGAL_LINKS.map((label, i) => (
              <span key={label} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <motion.a
                  href="#"
                  whileHover={{ color: "rgba(249,247,255,0.7)" }}
                  transition={{ duration: 0.2 }}
                  style={{
                    fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
                    fontSize: 13,
                    color: "rgba(249,247,255,0.35)",
                    textDecoration: "none",
                  }}
                >
                  {label}
                </motion.a>
                {i < LEGAL_LINKS.length - 1 && (
                  <span
                    style={{
                      color: "rgba(249,247,255,0.2)",
                      fontSize: 13,
                      userSelect: "none",
                    }}
                  >
                    ·
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
