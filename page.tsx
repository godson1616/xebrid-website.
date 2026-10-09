
"use client";

import { useState } from "react";

type MiFiColor = "black" | "grey";

function MiFiRender({ color }: { color: MiFiColor }) {
  const isBlack = color === "black";
  const body = isBlack ? "#20252c" : "#c9d0d8";
  const edge = isBlack ? "#090c11" : "#8d98a5";
  const face = isBlack ? "#292f38" : "#e0e5eb";
  const logo = isBlack ? "#e9f5ff" : "#263b53";
  const led = isBlack ? "#75c9ff" : "#248ed5";

  return (
    <svg
      viewBox="0 0 440 340"
      role="img"
      aria-label={`Xebrid portable MiFi concept in ${color}`}
      className="mifi-svg"
    >
      <defs>
        <linearGradient id={`shell-${color}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={isBlack ? "#424a55" : "#f4f6f9"} />
          <stop offset="48%" stopColor={body} />
          <stop offset="100%" stopColor={edge} />
        </linearGradient>
        <linearGradient id={`top-${color}`} x1="0" y1="0" x2="0.9" y2="1">
          <stop offset="0%" stopColor={face} />
          <stop offset="100%" stopColor={body} />
        </linearGradient>
        <filter id={`shadow-${color}`} x="-30%" y="-40%" width="160%" height="200%">
          <feGaussianBlur stdDeviation="10" />
        </filter>
      </defs>

      <ellipse
        cx="220"
        cy="257"
        rx="155"
        ry="23"
        fill="#243c53"
        opacity=".19"
        filter={`url(#shadow-${color})`}
      />

      {/* Slim lower shell */}
      <path
        d="M77 142 Q77 130 91 124 L323 87 Q338 85 346 97 L367 208 Q369 220 355 225 L124 270 Q110 273 105 260 Z"
        fill={edge}
      />

      {/* Main flat casing */}
      <path
        d="M75 127 Q73 116 88 112 L319 75 Q333 72 339 85 L365 194 Q368 205 354 210 L122 254 Q108 257 104 245 Z"
        fill={`url(#shell-${color})`}
        stroke={edge}
        strokeWidth="1.5"
      />

      {/* Top surface */}
      <path
        d="M86 116 L318 79 Q329 77 333 88 L358 192 L120 238 L84 128 Q82 120 86 116 Z"
        fill={`url(#top-${color})`}
      />

      {/* Subtle product surface detail */}
      <path
        d="M101 125 L312 91"
        stroke={isBlack ? "#ffffff" : "#ffffff"}
        strokeWidth="1.4"
        opacity=".23"
        strokeLinecap="round"
      />

      {/* Brand */}
      <text
        x="216"
        y="157"
        fill={logo}
        fontSize="23"
        fontWeight="800"
        letterSpacing="3"
        textAnchor="middle"
        transform="rotate(-9 216 157)"
      >
        XEBRID
      </text>

      <text
        x="216"
        y="177"
        fill={logo}
        opacity=".78"
        fontSize="7"
        letterSpacing="2.5"
        textAnchor="middle"
        transform="rotate(-9 216 177)"
      >
        CONNECT WITHOUT LIMITS
      </text>

      {/* Small status indicators */}
      {[0, 1, 2, 3].map((n) => (
        <circle
          key={n}
          cx={174 + n * 13}
          cy={207 - n * 2.5}
          r="2.5"
          fill={n === 0 ? led : logo}
          opacity={n === 0 ? 1 : 0.42}
        />
      ))}

      {/* Minimal signal mark */}
      <g
        transform="translate(282 112) rotate(-9)"
        fill="none"
        stroke={logo}
        strokeWidth="2"
        strokeLinecap="round"
      >
        <path d="M-12 4 Q0 -9 12 4" opacity=".5" />
        <path d="M-8 7 Q0 -1 8 7" opacity=".75" />
        <path d="M-3 10 Q0 7 3 10" />
      </g>

      {/* Thin side seam; deliberately no Ethernet port */}
      <path
        d="M107 246 L354 200"
        fill="none"
        stroke={isBlack ? "#707987" : "#f8fafc"}
        strokeWidth="1.2"
        opacity=".65"
      />

      {/* Small power button on the edge */}
      <ellipse
        cx="332"
        cy="218"
        rx="6"
        ry="3"
        fill={edge}
        transform="rotate(-10 332 218)"
      />
    </svg>
  );
}

export default function Home() {
  const [color, setColor] = useState<MiFiColor>("black");

  return (
    <main>
      <nav className="navbar">
        <a className="brand" href="#" aria-label="Xebrid home">
          <span className="brand-mark">X</span>
          <span>XEBRID</span>
        </a>
        <a className="nav-link" href="#product">Our MiFi</a>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">
            XEBRID TECHNOLOGIES · PRODUCT CONCEPT
          </span>

          <h1>
            Your world.
            <br />
            <span>Always connected.</span>
          </h1>

          <p className="intro">
            Meet the Xebrid MiFi concept: a compact, lightweight portable
            internet device designed for everyday connectivity, wherever
            life takes you.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#product">
              Explore the concept <span>↗</span>
            </a>
            <span className="concept-note">A product in development</span>
          </div>

          <div className="features">
            <div>
              <strong>01</strong>
              <span>Compact design</span>
            </div>
            <div>
              <strong>02</strong>
              <span>Portable connectivity</span>
            </div>
            <div>
              <strong>03</strong>
              <span>Made for everyday use</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-glow" />
          <div className="visual-label label-top">
            <span className="label-dot" />
            CONCEPT SERIES / 01
          </div>

          <div className="device-stage">
            <MiFiRender color={color} />
          </div>

          <div className="visual-bottom">
            <div>
              <span className="mini-label">PRODUCT</span>
              <strong>Xebrid Portable MiFi</strong>
            </div>
            <div className="color-options" aria-label="Choose device colour">
              <button
                className={`swatch black-swatch ${
                  color === "black" ? "selected" : ""
                }`}
                onClick={() => setColor("black")}
                aria-label="Midnight Black"
                aria-pressed={color === "black"}
              />
              <button
                className={`swatch grey-swatch ${
                  color === "grey" ? "selected" : ""
                }`}
                onClick={() => setColor("grey")}
                aria-label="Sky Grey"
                aria-pressed={color === "grey"}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="product-section" id="product">
        <div className="section-heading">
          <span className="eyebrow">INTRODUCING THE CONCEPT</span>
          <h2>Small device. Bigger possibilities.</h2>
          <p>
            A simple, modern design direction for portable internet
            connectivity, developed with affordability and practicality
            in mind.
          </p>
        </div>

        <div className="product-grid">
          <article className="info-card">
            <span className="card-number">01 / DESIGN</span>
            <h3>Designed to go anywhere</h3>
            <p>
              A slim, flat form intended to fit naturally into a pocket
              or small bag.
            </p>
          </article>

          <article className="info-card">
            <span className="card-number">02 / CONNECTIVITY</span>
            <h3>Wireless by design</h3>
            <p>
              A portable Wi-Fi concept without a bulky LAN or WAN
              Ethernet connector.
            </p>
          </article>

          <article className="info-card">
            <span className="card-number">03 / ACCESSIBILITY</span>
            <h3>Built around affordability</h3>
            <p>
              Target retail price: ₦20,000–₦25,000, subject to
              manufacturing and final specifications.
            </p>
          </article>
        </div>
      </section>

      <section className="development" id="contact">
        <div>
          <span className="eyebrow">THE NEXT CHAPTER</span>
          <h2>Connectivity, reimagined by Xebrid.</h2>
          <p>
            This is an early product concept. Hardware specifications,
            network compatibility, pricing and availability are yet to
            be confirmed.
          </p>
        </div>
        <a
          className="primary-button"
          href="https://wa.me/2348104828034"
          target="_blank"
          rel="noreferrer"
        >
          Contact Xebrid <span>↗</span>
        </a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#">
          <span className="brand-mark">X</span>
          <span>XEBRID</span>
        </a>
        <span>Technology for a more connected world.</span>
        <span>© {new Date().getFullYear()} Xebrid Technologies</span>
      </footer>
    </main>
  );
}
