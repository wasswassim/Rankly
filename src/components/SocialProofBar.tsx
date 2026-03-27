import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

const WORDMARKS = [
  "Growthify",
  "Nexlane",
  "Clariva",
  "Peakly",
  "Vortex",
  "Lumiq",
];

// Build an SVG data URL for each wordmark so LogoCloud's <img> tag renders it
function wordmarkSrc(name: string): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 30"><text x="60" y="22" text-anchor="middle" font-family="DM Sans, sans-serif" font-weight="700" font-size="22" fill="rgba(249,247,255,0.35)">${name}</text></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

const logos = WORDMARKS.map((name) => ({
  src: wordmarkSrc(name),
  alt: name,
  width: 168,
  height: 42,
}));

export default function SocialProofBar() {
  return (
    <section
      style={{
        width: "100%",
        padding: "28px 0",
        background: "transparent",
        borderTop: "1px solid rgba(124,58,237,0.1)",
        borderBottom: "1px solid rgba(124,58,237,0.1)",
        overflow: "hidden",
      }}
    >
      {/* Label */}
      <p
        style={{
          textAlign: "center",
          fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
          fontSize: 13,
          color: "rgba(249,247,255,0.4)",
          marginBottom: 16,
        }}
      >
        Trusted by teams at
      </p>

      {/* Slider */}
      <div className="relative">
        <InfiniteSlider gap={48} duration={30} durationOnHover={60}>
          {logos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              loading="lazy"
              style={{ height: 42, width: "auto", flexShrink: 0 }}
            />
          ))}
        </InfiniteSlider>

        {/* Edges fade into the dark background #0D0D14 */}
        <ProgressiveBlur
          direction="left"
          blurIntensity={0}
          className="pointer-events-none absolute top-0 left-0 h-full w-32"
          style={{ background: "linear-gradient(to right, #0D0D14 0%, transparent 100%)" }}
        />
        <ProgressiveBlur
          direction="right"
          blurIntensity={0}
          className="pointer-events-none absolute top-0 right-0 h-full w-32"
          style={{ background: "linear-gradient(to left, #0D0D14 0%, transparent 100%)" }}
        />
      </div>
    </section>
  );
}
