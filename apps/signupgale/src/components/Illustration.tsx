export function Illustration() {
  return (
    <svg
      viewBox="0 0 500 500"
      className="h-auto w-[80%] max-w-[400px]"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Flat vector illustration of a person working at a desk with a computer"
    >
      {/* Background elements */}
      <rect x="80" y="280" width="340" height="12" rx="2" fill="#e0e0e0" />

      {/* Desk */}
      <rect x="100" y="260" width="300" height="20" rx="4" fill="#b0b0b0" />
      <rect x="120" y="280" width="12" height="80" fill="#b0b0b0" />
      <rect x="368" y="280" width="12" height="80" fill="#b0b0b0" />

      {/* Monitor */}
      <rect x="180" y="160" width="140" height="100" rx="6" fill="#2d2d2d" />
      <rect x="186" y="166" width="128" height="84" rx="3" fill="#4a90d9" />
      {/* Screen content lines */}
      <rect x="196" y="180" width="60" height="4" rx="2" fill="rgba(255,255,255,0.6)" />
      <rect x="196" y="190" width="80" height="4" rx="2" fill="rgba(255,255,255,0.4)" />
      <rect x="196" y="200" width="50" height="4" rx="2" fill="rgba(255,255,255,0.3)" />
      {/* Monitor stand */}
      <rect x="240" y="260" width="20" height="8" fill="#b0b0b0" />
      <rect x="230" y="268" width="40" height="4" rx="2" fill="#999" />

      {/* Chair */}
      <rect x="200" y="310" width="100" height="8" rx="4" fill="#7c6bf5" />
      <rect x="200" y="318" width="8" height="60" fill="#999" />
      <rect x="292" y="318" width="8" height="60" fill="#999" />
      <rect x="190" y="290" width="120" height="20" rx="6" fill="#7c6bf5" />

      {/* Person */}
      {/* Head */}
      <circle cx="250" cy="240" r="22" fill="#f0c8a0" />
      {/* Hair */}
      <path
        d="M228 232 Q228 218 250 218 Q272 218 272 232 Q270 225 250 225 Q230 225 228 232Z"
        fill="#4a3728"
      />
      {/* Eyes */}
      <circle cx="242" cy="242" r="2" fill="#333" />
      <circle cx="258" cy="242" r="2" fill="#333" />
      {/* Smile */}
      <path
        d="M244 250 Q250 256 256 250"
        fill="none"
        stroke="#333"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Body */}
      <rect x="232" y="262" width="36" height="50" rx="8" fill="#7c6bf5" />
      {/* Arms */}
      <rect x="210" y="270" width="22" height="8" rx="4" fill="#f0c8a0" />
      <rect x="268" y="270" width="22" height="8" rx="4" fill="#f0c8a0" />

      {/* Plant on desk left */}
      <rect x="120" y="230" width="20" height="30" rx="3" fill="#8B7355" />
      <circle cx="130" cy="225" r="15" fill="#4CAF50" />
      <circle cx="122" cy="220" r="10" fill="#66BB6A" />
      <circle cx="138" cy="222" r="12" fill="#43A047" />

      {/* Plant on desk right */}
      <rect x="360" y="230" width="20" height="30" rx="3" fill="#8B7355" />
      <circle cx="370" cy="225" r="15" fill="#4CAF50" />
      <circle cx="362" cy="220" r="10" fill="#66BB6A" />
      <circle cx="378" cy="222" r="12" fill="#43A047" />

      {/* Drawer unit left */}
      <rect x="100" y="290" width="60" height="70" rx="3" fill="#c0c0c0" />
      <line x1="105" y1="310" x2="155" y2="310" stroke="#aaa" strokeWidth="1" />
      <line x1="105" y1="330" x2="155" y2="330" stroke="#aaa" strokeWidth="1" />
      <rect x="125" y="305" width="10" height="4" rx="2" fill="#999" />
      <rect x="125" y="325" width="10" height="4" rx="2" fill="#999" />
      <rect x="125" y="345" width="10" height="4" rx="2" fill="#999" />

      {/* Books on desk right */}
      <rect x="340" y="240" width="12" height="20" rx="1" fill="#7c6bf5" />
      <rect x="353" y="236" width="10" height="24" rx="1" fill="#6a5ae0" />
      <rect x="364" y="242" width="8" height="18" rx="1" fill="#9b8ff5" />
    </svg>
  )
}
