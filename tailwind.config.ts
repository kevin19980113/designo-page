import { url } from "inspector";
import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".15em",
      widest: ".3em",
    },
    extend: {
      colors: {
        peach: "#E7816B",
        lightpeach: "#FFAD9B",
        lightestpeach: "#fff3ee",
        darkgrey: "#333136",
        lightgery: "#F1F3F5",
        black: "#1D1C1E",
        white: "#FFFFFF",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "web-mobile": "url('/assets/home/mobile/image-web-design.jpg')",
        "web-tablet": "url('/assets/home/tablet/image-web-design.jpg')",
        "web-desktop": "url('/assets/home/desktop/image-web-design-large.jpg')",
        "app-mobile": "url('/assets/home/mobile/image-app-design.jpg')",
        "app-tablet": "url('/assets/home/tablet/image-app-design.jpg')",
        "app-desktop": "url('/assets/home/desktop/image-app-design.jpg')",
        "graphic-mobile": "url('/assets/home/mobile/image-graphic-design.jpg')",
        "graphic-tablet": "url('/assets/home/tablet/image-graphic-design.jpg')",
        "graphic-desktop":
          "url('/assets/home/desktop/image-graphic-design.jpg')",
        "hero-bg-pattern":
          "url('/assets/home/desktop/bg-pattern-hero-home.svg')",
        "action-pattern":
          "url('/assets/shared/desktop/bg-pattern-call-to-action.svg')",
        "three-circles-pattern":
          "url('/assets/shared/desktop/bg-pattern-three-circles.svg')",
        "desktop-about-hero":
          "url('/assets/about/desktop/image-about-hero.jpg')",
        "tablet-about-hero": "url('/assets/about/tablet/image-about-hero.jpg')",
        "mobile-about-hero": "url('/assets/about/mobile/image-about-hero.jpg')",
        "desktop-about-image-world-class-talent":
          "url('/assets/about/desktop/image-world-class-talent.jpg')",
        "mobile-about-image-world-class-talent":
          "url('/assets/about/mobile/image-world-class-talent.jpg')",
        "tablet-about-image-world-class-talent":
          "url('/assets/about/tablet/image-world-class-talent.jpg')",
        "desktop-about-image-real-deal":
          "url('/assets/about/desktop/image-real-deal.jpg')",
        "mobile-about-image-real-deal":
          "url('/assets/about/mobile/image-real-deal.jpg')",
        "tablet-about-image-real-deal":
          "url('/assets/about/tablet/image-real-deal.jpg')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
