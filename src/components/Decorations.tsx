import React from 'react';

// Cute Coquette Pink Bow
export const CoquetteBow: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block drop-shadow-sm ${className}`}
  >
    {/* Left ribbon loop */}
    <path
      d="M50 50 C35 30 15 25 10 40 C5 55 25 65 50 50 Z"
      fill="url(#bowGradLeft)"
      stroke="#f472b6"
      strokeWidth="2"
    />
    <path
      d="M45 48 C32 35 20 32 15 42 C12 50 25 58 45 48 Z"
      fill="#fbcfe8"
      opacity="0.6"
    />
    {/* Right ribbon loop */}
    <path
      d="M50 50 C65 30 85 25 90 40 C95 55 75 65 50 50 Z"
      fill="url(#bowGradRight)"
      stroke="#f472b6"
      strokeWidth="2"
    />
    <path
      d="M55 48 C68 35 80 32 85 42 C88 50 75 58 55 48 Z"
      fill="#fbcfe8"
      opacity="0.6"
    />
    {/* Left ribbon tail */}
    <path
      d="M48 53 C40 68 32 82 22 92 C28 85 35 84 40 86 C44 76 47 64 50 54 Z"
      fill="url(#tailGradLeft)"
      stroke="#f472b6"
      strokeWidth="1.5"
    />
    {/* Right ribbon tail */}
    <path
      d="M52 53 C60 68 68 82 78 92 C72 85 65 84 60 86 C56 76 53 64 50 54 Z"
      fill="url(#tailGradRight)"
      stroke="#f472b6"
      strokeWidth="1.5"
    />
    {/* Center knot */}
    <ellipse cx="50" cy="50" rx="7" ry="6" fill="#f43f5e" stroke="#fda4af" strokeWidth="2" />
    <ellipse cx="49" cy="48" rx="3" ry="2" fill="#fff" opacity="0.7" />

    <defs>
      <linearGradient id="bowGradLeft" x1="10" y1="30" x2="50" y2="60" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ffb3c6" />
        <stop offset="1" stopColor="#ff758f" />
      </linearGradient>
      <linearGradient id="bowGradRight" x1="90" y1="30" x2="50" y2="60" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ffb3c6" />
        <stop offset="1" stopColor="#ff758f" />
      </linearGradient>
      <linearGradient id="tailGradLeft" x1="45" y1="55" x2="25" y2="90" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ff758f" />
        <stop offset="1" stopColor="#ffb3c6" />
      </linearGradient>
      <linearGradient id="tailGradRight" x1="55" y1="55" x2="75" y2="90" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ff758f" />
        <stop offset="1" stopColor="#ffb3c6" />
      </linearGradient>
    </defs>
  </svg>
);

// Cute Teddy Bear holding a Pink Heart
export const TeddyBearWithHeart: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 120 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block drop-shadow-md ${className}`}
  >
    {/* Left Ear */}
    <circle cx="34" cy="30" r="14" fill="#d4a373" stroke="#b07d4b" strokeWidth="2" />
    <circle cx="34" cy="30" r="8" fill="#fcd5ce" />
    {/* Right Ear */}
    <circle cx="86" cy="30" r="14" fill="#d4a373" stroke="#b07d4b" strokeWidth="2" />
    <circle cx="86" cy="30" r="8" fill="#fcd5ce" />

    {/* Body */}
    <ellipse cx="60" cy="78" rx="30" ry="26" fill="#d4a373" stroke="#b07d4b" strokeWidth="2" />

    {/* Head */}
    <circle cx="60" cy="46" r="28" fill="#d4a373" stroke="#b07d4b" strokeWidth="2" />

    {/* Snout */}
    <ellipse cx="60" cy="52" rx="13" ry="10" fill="#faedcd" />
    <ellipse cx="60" cy="48" rx="4.5" ry="3.5" fill="#583101" />
    <path d="M60 51.5 V56 M56 55 Q60 58 64 55" stroke="#583101" strokeWidth="1.8" strokeLinecap="round" />

    {/* Eyes */}
    <circle cx="48" cy="42" r="3.5" fill="#332211" />
    <circle cx="47" cy="41" r="1.2" fill="#ffffff" />
    <circle cx="72" cy="42" r="3.5" fill="#332211" />
    <circle cx="71" cy="41" r="1.2" fill="#ffffff" />

    {/* Cheeks blush */}
    <ellipse cx="42" cy="50" rx="4.5" ry="2.5" fill="#f43f5e" opacity="0.3" />
    <ellipse cx="78" cy="50" rx="4.5" ry="2.5" fill="#f43f5e" opacity="0.3" />

    {/* Hair Bow */}
    <g transform="translate(68, 22) scale(0.35)">
      <path d="M50 50 C35 30 15 25 10 40 C5 55 25 65 50 50 Z" fill="#ff758f" />
      <path d="M50 50 C65 30 85 25 90 40 C95 55 75 65 50 50 Z" fill="#ff758f" />
      <ellipse cx="50" cy="50" rx="6" ry="5" fill="#f43f5e" />
    </g>

    {/* Arms holding heart */}
    <ellipse cx="36" cy="74" rx="8" ry="14" fill="#c58f5e" transform="rotate(-30 36 74)" />
    <ellipse cx="84" cy="74" rx="8" ry="14" fill="#c58f5e" transform="rotate(30 84 74)" />

    {/* Big Pink Heart being held */}
    <g transform="translate(42, 60) scale(0.75)">
      <path
        d="M24 8 C16 -2 2 4 2 18 C2 28 14 38 24 46 C34 38 46 28 46 18 C46 4 32 -2 24 8 Z"
        fill="url(#teddyHeartGrad)"
        stroke="#fda4af"
        strokeWidth="2"
      />
      <circle cx="14" cy="14" r="2.5" fill="#ffffff" opacity="0.6" />
    </g>

    {/* Feet / Paws */}
    <ellipse cx="40" cy="100" rx="12" ry="8" fill="#d4a373" stroke="#b07d4b" strokeWidth="1.5" />
    <circle cx="40" cy="100" r="5" fill="#fcd5ce" />
    <ellipse cx="80" cy="100" rx="12" ry="8" fill="#d4a373" stroke="#b07d4b" strokeWidth="1.5" />
    <circle cx="80" cy="100" r="5" fill="#fcd5ce" />

    <defs>
      <linearGradient id="teddyHeartGrad" x1="2" y1="2" x2="46" y2="46" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ff758f" />
        <stop offset="1" stopColor="#ff4d6d" />
      </linearGradient>
    </defs>
  </svg>
);

// Expectant Mother Holding Baby Bump (Artistic Floral Coquette Illustration)
export const ExpectantMotherIllustration: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 220 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 240 240"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    {/* Soft floral glow background */}
    <circle cx="120" cy="120" r="100" fill="#fff0f3" opacity="0.8" />
    <circle cx="120" cy="120" r="88" stroke="#fed7e2" strokeWidth="1.5" strokeDasharray="6 6" />

    {/* Floral wreath background */}
    <g opacity="0.85">
      {/* Little roses and petals */}
      <circle cx="50" cy="70" r="7" fill="#ffb3c6" />
      <circle cx="46" cy="68" r="4" fill="#ff758f" />
      <path d="M42 75 C38 78 35 85 40 88" stroke="#86efac" strokeWidth="2" fill="none" />

      <circle cx="190" cy="70" r="7" fill="#ffb3c6" />
      <circle cx="194" cy="68" r="4" fill="#ff758f" />
      <path d="M198 75 C202 78 205 85 200 88" stroke="#86efac" strokeWidth="2" fill="none" />

      <circle cx="40" cy="150" r="8" fill="#fbcfe8" />
      <circle cx="200" cy="150" r="8" fill="#fbcfe8" />
    </g>

    {/* Elegant Silhouette of Mother */}
    <g transform="translate(10, 0)">
      {/* Hair bun and gentle hair curls */}
      <path
        d="M106 58 C96 55 92 68 94 78 C96 88 100 95 106 102 C104 90 106 82 110 74 C112 70 114 62 106 58 Z"
        fill="#4a3525"
      />
      <circle cx="98" cy="62" r="12" fill="#4a3525" />
      {/* Hair flower */}
      <circle cx="98" cy="58" r="4.5" fill="#ff758f" />
      <circle cx="98" cy="58" r="2" fill="#ffffff" />

      {/* Face profile and gentle neck */}
      <path
        d="M104 70 C108 72 114 74 116 78 C118 82 115 88 112 92 C114 96 116 102 118 106 L110 110"
        fill="none"
        stroke="#d49b80"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Closed happy eyelashes */}
      <path d="M110 78 Q113 81 115 78" stroke="#4a3525" strokeWidth="2" fill="none" />
      {/* Sweet smile */}
      <path d="M111 86 Q114 88 116 86" stroke="#e11d48" strokeWidth="1.5" fill="none" />
      {/* Blush */}
      <ellipse cx="110" cy="83" rx="3.5" ry="2" fill="#fb7185" opacity="0.5" />

      {/* Flowing maternity dress */}
      <path
        d="M108 108 C100 118 90 135 88 160 C85 190 82 205 76 215 C100 218 135 218 152 215 C146 195 145 178 140 155 C132 125 124 112 114 108 Z"
        fill="url(#dressGrad)"
      />

      {/* Beautiful Baby Bump Curves */}
      <path
        d="M112 125 C128 135 138 152 135 172 C132 186 122 196 108 198"
        fill="none"
        stroke="#f472b6"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Gentle Loving Hands Cupping the Baby Bump */}
      {/* Upper hand */}
      <path
        d="M104 136 C112 138 120 144 122 150 C120 152 114 152 108 146"
        fill="#fbcfe8"
        stroke="#d49b80"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Lower supporting hand */}
      <path
        d="M100 178 C110 182 122 180 126 172 C124 168 116 170 108 172"
        fill="#fbcfe8"
        stroke="#d49b80"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Heart inside the baby bump */}
      <g transform="translate(112, 154) scale(0.55)">
        <path
          d="M24 8 C16 -2 2 4 2 18 C2 28 14 38 24 46 C34 38 46 28 46 18 C46 4 32 -2 24 8 Z"
          fill="#ff4d6d"
          className="animate-pulse"
        />
      </g>
    </g>

    {/* Floating butterflies & sparkles */}
    <g transform="translate(160, 110) scale(0.6)">
      <path d="M10 20 C0 10 5 0 20 10 C35 0 40 10 30 20 C40 30 35 40 20 30 C5 40 0 30 10 20 Z" fill="#f472b6" opacity="0.8" />
    </g>
    <g transform="translate(45, 115) scale(0.5)">
      <path d="M10 20 C0 10 5 0 20 10 C35 0 40 10 30 20 C40 30 35 40 20 30 C5 40 0 30 10 20 Z" fill="#c084fc" opacity="0.75" />
    </g>

    <defs>
      <linearGradient id="dressGrad" x1="110" y1="108" x2="110" y2="218" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ffe4e6" />
        <stop offset="0.6" stopColor="#fecdd3" />
        <stop offset="1" stopColor="#fda4af" />
      </linearGradient>
    </defs>
  </svg>
);

// Baby Clothesline with Onesie, Booties, Socks & Bow
export const BabyClothesline: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 500 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-full max-w-lg mx-auto ${className}`}
  >
    {/* Hanging Line */}
    <path
      d="M10 35 Q250 75 490 35"
      stroke="#d4a373"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeDasharray="4 4"
    />

    {/* Wooden Clothespins */}
    <rect x="78" y="38" width="6" height="14" rx="2" fill="#d4a373" />
    <rect x="108" y="42" width="6" height="14" rx="2" fill="#d4a373" />

    <rect x="180" y="51" width="6" height="14" rx="2" fill="#d4a373" />
    <rect x="220" y="53" width="6" height="14" rx="2" fill="#d4a373" />

    <rect x="290" y="53" width="6" height="14" rx="2" fill="#d4a373" />
    <rect x="320" y="51" width="6" height="14" rx="2" fill="#d4a373" />

    <rect x="390" y="42" width="6" height="14" rx="2" fill="#d4a373" />
    <rect x="420" y="38" width="6" height="14" rx="2" fill="#d4a373" />

    {/* Item 1: Cute Baby Booties / Socks */}
    <g transform="translate(75, 45)">
      {/* Sock 1 */}
      <path
        d="M12 4 L12 24 C12 30 6 34 2 34 C-2 34 2 28 6 22 L6 4 Z"
        fill="#ffccd5"
        stroke="#f472b6"
        strokeWidth="1.5"
      />
      <rect x="5" y="2" width="8" height="4" rx="1" fill="#fff" />
      {/* Sock 2 */}
      <path
        d="M32 6 L32 26 C32 32 38 36 42 36 C46 36 42 30 38 24 L38 6 Z"
        fill="#ffccd5"
        stroke="#f472b6"
        strokeWidth="1.5"
      />
      <rect x="31" y="4" width="8" height="4" rx="1" fill="#fff" />
    </g>

    {/* Item 2: Baby Girl Onesie with Pink Bow */}
    <g transform="translate(170, 56)">
      <path
        d="M15 4 L5 16 L14 22 L17 18 L17 48 C17 56 22 62 33 62 C44 62 49 56 49 48 L49 18 L52 22 L61 16 L51 4 C45 10 38 12 33 12 C28 12 21 10 15 4 Z"
        fill="#fed7e2"
        stroke="#f472b6"
        strokeWidth="2"
      />
      {/* Collar accent */}
      <path d="M22 6 Q33 16 44 6" stroke="#fda4af" strokeWidth="2" fill="none" />
      {/* Mini Bow on chest */}
      <circle cx="33" cy="24" r="3" fill="#ff4d6d" />
      <path d="M30 24 C26 20 25 28 30 24 Z" fill="#ff758f" />
      <path d="M36 24 C40 20 41 28 36 24 Z" fill="#ff758f" />
      {/* Sweet heart on body */}
      <path
        d="M33 34 C30 30 26 32 26 36 C26 40 33 46 33 46 C33 46 40 40 40 36 C40 32 36 30 33 34 Z"
        fill="#f43f5e"
        opacity="0.8"
      />
    </g>

    {/* Item 3: Cute Little Princess Dress */}
    <g transform="translate(280, 58)">
      <path
        d="M18 4 L14 16 L22 18 L20 28 L6 60 C6 60 28 66 48 60 L34 28 L32 18 L40 16 L36 4 C32 8 22 8 18 4 Z"
        fill="#ffccd5"
        stroke="#f472b6"
        strokeWidth="2"
      />
      {/* Ruffled hemline */}
      <path
        d="M6 60 Q16 66 27 62 Q38 66 48 60"
        stroke="#fff"
        strokeWidth="3"
        fill="none"
      />
      {/* Bow at waist */}
      <circle cx="27" cy="28" r="3" fill="#fb7185" />
    </g>

    {/* Item 4: Baby Bib with Heart */}
    <g transform="translate(385, 45)">
      <path
        d="M10 8 C6 20 6 36 22 36 C38 36 38 20 34 8 C30 14 26 16 22 16 C18 16 14 14 10 8 Z"
        fill="#fff"
        stroke="#f472b6"
        strokeWidth="2"
      />
      <circle cx="22" cy="24" r="4" fill="#fda4af" />
    </g>
  </svg>
);

// Cute Baby Footprints
export const BabyFootprints: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 50 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    {/* Left footprint */}
    <g transform="translate(5, 5)">
      <ellipse cx="14" cy="24" rx="7" ry="12" fill="#f472b6" transform="rotate(-10 14 24)" opacity="0.85" />
      <circle cx="9" cy="8" r="3" fill="#f472b6" opacity="0.85" />
      <circle cx="14" cy="7" r="2.5" fill="#f472b6" opacity="0.85" />
      <circle cx="18" cy="8" r="2.2" fill="#f472b6" opacity="0.85" />
      <circle cx="21" cy="11" r="1.8" fill="#f472b6" opacity="0.85" />
      <circle cx="23" cy="15" r="1.5" fill="#f472b6" opacity="0.85" />
    </g>
    {/* Right footprint */}
    <g transform="translate(24, 15)">
      <ellipse cx="14" cy="24" rx="7" ry="12" fill="#f472b6" transform="rotate(10 14 24)" opacity="0.85" />
      <circle cx="19" cy="8" r="3" fill="#f472b6" opacity="0.85" />
      <circle cx="14" cy="7" r="2.5" fill="#f472b6" opacity="0.85" />
      <circle cx="10" cy="8" r="2.2" fill="#f472b6" opacity="0.85" />
      <circle cx="7" cy="11" r="1.8" fill="#f472b6" opacity="0.85" />
      <circle cx="5" cy="15" r="1.5" fill="#f472b6" opacity="0.85" />
    </g>
  </svg>
);

// Sleeping Moon & Star (Dreamy baby motif)
export const SleepingMoonAndStars: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 90 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    {/* Soft Crescent Moon */}
    <path
      d="M65 20 C42 20 25 38 25 60 C25 78 38 92 56 95 C45 88 38 75 38 60 C38 42 50 28 65 20 Z"
      fill="url(#moonGrad)"
      stroke="#fed7aa"
      strokeWidth="1.5"
    />
    {/* Sleeping eye */}
    <path d="M38 58 Q44 64 48 58" stroke="#78350f" strokeWidth="2" strokeLinecap="round" fill="none" />
    {/* Cheerful rosy cheek */}
    <circle cx="44" cy="65" r="4" fill="#fb7185" opacity="0.6" />
    {/* Pink nightcap on moon */}
    <path
      d="M60 22 C68 12 78 10 88 15 C82 25 72 26 62 26 Z"
      fill="#ffb3c6"
    />
    <circle cx="89" cy="15" r="4" fill="#ffffff" />

    {/* Cute hanging star */}
    <g transform="translate(62, 55)">
      <path
        d="M12 0 L15 8 L24 9 L17 15 L19 24 L12 19 L5 24 L7 15 L0 9 L9 8 Z"
        fill="#fef08a"
        stroke="#fde047"
        strokeWidth="1"
      />
      {/* Tiny smiling star face */}
      <circle cx="9" cy="11" r="1" fill="#713f12" />
      <circle cx="15" cy="11" r="1" fill="#713f12" />
      <path d="M10 14 Q12 16 14 14" stroke="#713f12" strokeWidth="1" fill="none" />
    </g>

    <defs>
      <linearGradient id="moonGrad" x1="25" y1="20" x2="65" y2="95" gradientUnits="userSpaceOnUse">
        <stop stopColor="#fef3c7" />
        <stop offset="1" stopColor="#fde68a" />
      </linearGradient>
    </defs>
  </svg>
);

// Pink Balloons Bundle
export const PinkBalloons: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 80 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    {/* Strings */}
    <path d="M35 55 Q45 85 50 115" stroke="#f472b6" strokeWidth="1.5" strokeDasharray="2 2" fill="none" />
    <path d="M50 50 L50 115" stroke="#f472b6" strokeWidth="1.5" strokeDasharray="2 2" fill="none" />
    <path d="M65 55 Q55 85 50 115" stroke="#f472b6" strokeWidth="1.5" strokeDasharray="2 2" fill="none" />

    {/* Balloon 1 (Left, Lavender pink) */}
    <ellipse cx="34" cy="38" rx="18" ry="22" fill="#fbcfe8" stroke="#f472b6" strokeWidth="1.5" />
    <path d="M26 24 Q30 20 34 22" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none" />
    <polygon points="34,58 31,63 37,63" fill="#f472b6" />

    {/* Balloon 3 (Right, Rose pink) */}
    <ellipse cx="66" cy="38" rx="18" ry="22" fill="#ffd1dc" stroke="#fb7185" strokeWidth="1.5" />
    <path d="M58 24 Q62 20 66 22" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none" />
    <polygon points="66,58 63,63 69,63" fill="#fb7185" />

    {/* Balloon 2 (Center, Hot pink heart balloon) */}
    <g transform="translate(30, 8) scale(0.85)">
      <path
        d="M24 8 C16 -2 2 4 2 18 C2 28 14 38 24 46 C34 38 46 28 46 18 C46 4 32 -2 24 8 Z"
        fill="#ff758f"
        stroke="#f43f5e"
        strokeWidth="1.5"
      />
      <circle cx="15" cy="15" r="3" fill="#fff" opacity="0.6" />
    </g>

    {/* Little bow tying strings */}
    <circle cx="50" cy="114" r="3.5" fill="#f43f5e" />
  </svg>
);

