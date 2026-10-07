import React from 'react';

interface RumahGadangSvgProps {
  className?: string;
  glow?: boolean;
}

export const RumahGadangSvg: React.FC<RumahGadangSvgProps> = ({ className = 'w-full h-auto', glow = true }) => {
  return (
    <div className={`relative ${className} select-none`}>
      <svg
        viewBox="0 0 900 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-md"
      >
        <defs>
          <linearGradient id="goldRoof" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="35%" stopColor="#D4AF37" />
            <stop offset="70%" stopColor="#996515" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>

          <linearGradient id="darkWood" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#450A0A" />
            <stop offset="50%" stopColor="#2E0404" />
            <stop offset="100%" stopColor="#1C0202" />
          </linearGradient>

          <linearGradient id="goldAccent" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#B45309" />
            <stop offset="50%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>

          <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient glow behind roof */}
        {glow && (
          <ellipse
            cx="450"
            cy="150"
            rx="320"
            ry="90"
            fill="#D4AF37"
            opacity="0.15"
            filter="url(#goldGlow)"
          />
        )}

        {/* Center Main Gonjong (Roof curve) */}
        {/* Gonjong 1 (Far Left Horn) */}
        <path
          d="M 120 190 C 130 110, 150 40, 190 10 C 185 45, 205 110, 240 160 Z"
          fill="url(#goldRoof)"
          opacity="0.95"
        />
        {/* Gonjong Tip 1 finial */}
        <polygon points="188,8 193,0 196,8 192,15" fill="#FEF08A" />

        {/* Gonjong 2 (Left Mid Horn) */}
        <path
          d="M 230 170 C 260 100, 290 45, 335 15 C 330 55, 355 110, 390 155 Z"
          fill="url(#goldRoof)"
        />
        <polygon points="333,13 338,5 341,13 337,20" fill="#FEF08A" />

        {/* Gonjong 3 (Center Pinnacle / Mahkota Gonjong) */}
        <path
          d="M 370 160 C 410 80, 435 25, 450 0 C 465 25, 490 80, 530 160 Z"
          fill="url(#goldRoof)"
        />
        <polygon points="448,-2 450,-10 452,-2 450,8" fill="#FEF08A" />

        {/* Gonjong 4 (Right Mid Horn) */}
        <path
          d="M 510 155 C 545 110, 570 55, 565 15 C 610 45, 640 100, 670 170 Z"
          fill="url(#goldRoof)"
        />
        <polygon points="563,13 567,5 570,13 566,20" fill="#FEF08A" />

        {/* Gonjong 5 (Far Right Horn) */}
        <path
          d="M 660 160 C 695 110, 715 45, 710 10 C 750 40, 770 110, 780 190 Z"
          fill="url(#goldRoof)"
          opacity="0.95"
        />
        <polygon points="708,8 712,0 715,8 711,15" fill="#FEF08A" />

        {/* Main Sweeping Roof Eaves (Perahu / Horn sweep bottom) */}
        <path
          d="M 110 200 C 230 170, 340 165, 450 168 C 560 165, 670 170, 790 200 C 760 215, 670 205, 450 208 C 230 205, 140 215, 110 200 Z"
          fill="url(#goldAccent)"
        />

        {/* Second tiered lower roof ridge */}
        <path
          d="M 140 210 C 260 190, 360 188, 450 190 C 540 188, 640 190, 760 210 L 755 220 C 640 202, 540 200, 450 202 C 360 200, 260 202, 145 220 Z"
          fill="#78350F"
        />

        {/* House Body / Dinding Rumah Gadang (Tirai Singok) */}
        <polygon
          points="180,220 720,220 690,300 210,300"
          fill="url(#darkWood)"
          stroke="#D4AF37"
          strokeWidth="2"
        />

        {/* Carved Floral Songket Wall Panels (Ukiran Itiak Pulang Patang & Saik Galamai) */}
        {Array.from({ length: 9 }).map((_, i) => {
          const x = 230 + i * 50;
          return (
            <g key={i}>
              {/* Window Frame */}
              <rect
                x={x}
                y="235"
                width="36"
                height="45"
                rx="3"
                fill="#180303"
                stroke="#ECC265"
                strokeWidth="1.5"
              />
              {/* Window shutter lines & minang grille */}
              <line x1={x + 18} y1="235" x2={x + 18} y2="280" stroke="#ECC265" strokeWidth="1" />
              <path
                d={`M ${x + 6} 245 L ${x + 18} 255 L ${x + 30} 245 M ${x + 6} 265 L ${x + 18} 255 L ${x + 30} 265`}
                stroke="#C59B27"
                strokeWidth="1"
                fill="none"
              />
            </g>
          );
        })}

        {/* Horizontal Gold Wall Divider Bands */}
        <line x1="200" y1="230" x2="700" y2="230" stroke="#FCD34D" strokeWidth="2" />
        <line x1="210" y1="290" x2="690" y2="290" stroke="#FCD34D" strokeWidth="2" />

        {/* Floor Base / Panggung Batang Kolong */}
        <polygon points="195,300 705,300 710,312 190,312" fill="#B45309" stroke="#FDE68A" strokeWidth="1.5" />

        {/* House Pillars / Tiang Kolong Kayu */}
        {Array.from({ length: 11 }).map((_, idx) => {
          const px = 215 + idx * 47;
          return (
            <g key={`col-${idx}`}>
              <rect x={px - 4} y="312" width="8" height="38" fill="#360808" stroke="#D4AF37" strokeWidth="1" />
              {/* Pillar stone base (Batu Sandi) */}
              <polygon points={`${px - 7},350 ${px + 7},350 ${px + 9},358 ${px - 9},358`} fill="#78350F" />
            </g>
          );
        })}

        {/* Center Entrance Stairway (Tangga Rumah Gadang) */}
        <polygon points="420,270 480,270 495,355 405,355" fill="#450A0A" stroke="#ECC265" strokeWidth="1.5" />
        {/* Steps */}
        <line x1="418" y1="290" x2="482" y2="290" stroke="#ECC265" strokeWidth="2" />
        <line x1="414" y1="310" x2="486" y2="310" stroke="#ECC265" strokeWidth="2" />
        <line x1="410" y1="330" x2="490" y2="330" stroke="#ECC265" strokeWidth="2" />
        <line x1="406" y1="350" x2="494" y2="350" stroke="#ECC265" strokeWidth="2" />

        {/* Decorative Songket Pucuk Rebung Borders on the sides */}
        <g opacity="0.6">
          <polygon points="160,205 170,185 180,205" fill="#FCD34D" />
          <polygon points="175,205 185,185 195,205" fill="#FCD34D" />
          <polygon points="705,205 715,185 725,205" fill="#FCD34D" />
          <polygon points="720,205 730,185 740,205" fill="#FCD34D" />
        </g>
      </svg>
    </div>
  );
};
