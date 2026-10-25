interface ConceptArtProps {
  variant: 'wayfinding' | 'pantry'
  label: string
}

/* Two deliberately cheap concept mockups instead of photography: the design's
   project frames hold diagrams, so the art is drawn from the same tokens as
   the page (sage / clay grounds, chrome window bar, one accent per card). */
export function ConceptArt({ variant, label }: ConceptArtProps) {
  return (
    <svg
      viewBox="0 0 900 590"
      role="img"
      aria-label={label}
      className="block h-auto w-full transition-transform duration-[250ms] ease-out group-hover:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
    >
      {variant === 'wayfinding' ? <WayfindingArt /> : <PantryArt />}
    </svg>
  )
}

function WayfindingArt() {
  return (
    <g>
      <rect width="900" height="590" fill="#e2e7dc" />
      <rect x="46" y="50" width="808" height="490" rx="12" fill="#f5f4ed" />
      <circle cx="76" cy="76" r="5" fill="#c6cbbb" />
      <circle cx="96" cy="76" r="5" fill="#c6cbbb" />
      <circle cx="116" cy="76" r="5" fill="#c6cbbb" />

      <rect x="76" y="104" width="470" height="404" rx="8" fill="#fbfaf6" />
      <rect x="104" y="132" width="130" height="96" rx="4" fill="#e3e6da" />
      <rect x="258" y="132" width="96" height="150" rx="4" fill="#e3e6da" />
      <rect x="378" y="132" width="140" height="70" rx="4" fill="#e3e6da" />
      <rect x="104" y="252" width="94" height="80" rx="4" fill="#e3e6da" />
      <rect x="378" y="226" width="140" height="120" rx="4" fill="#e3e6da" />
      <rect x="104" y="356" width="180" height="120" rx="4" fill="#e3e6da" />
      <rect x="308" y="370" width="210" height="106" rx="4" fill="#e3e6da" />

      <path
        d="M146 424c40-40 58-84 110-96s96 34 128-6 34-76 22-110"
        fill="none"
        stroke="#527f61"
        strokeWidth="5"
        strokeDasharray="9 6"
        strokeLinecap="round"
      />
      <circle cx="146" cy="424" r="11" fill="#244b3b" />
      <circle cx="406" cy="212" r="9" fill="#e7ed92" stroke="#244b3b" strokeWidth="3" />

      <rect x="586" y="104" width="236" height="404" rx="26" fill="#244b3b" />
      <rect x="604" y="132" width="200" height="348" rx="14" fill="#f5f4ed" />
      <rect x="624" y="152" width="160" height="52" rx="4" fill="#e7ed92" />
      <rect x="624" y="220" width="120" height="10" rx="5" fill="#c6cbbb" />
      <rect x="624" y="242" width="160" height="10" rx="5" fill="#d8dbcf" />
      <rect x="624" y="264" width="96" height="10" rx="5" fill="#d8dbcf" />
      <rect x="624" y="300" width="160" height="76" rx="6" fill="#e3e6da" />
      <rect x="624" y="392" width="160" height="30" rx="4" fill="#244b3b" />
      <rect x="624" y="436" width="104" height="10" rx="5" fill="#c6cbbb" />
    </g>
  )
}

function PantryArt() {
  return (
    <g>
      <rect width="900" height="590" fill="#eedfcd" />
      <rect x="46" y="50" width="808" height="490" rx="12" fill="#f5f4ed" />
      <circle cx="76" cy="76" r="5" fill="#c6cbbb" />
      <circle cx="96" cy="76" r="5" fill="#c6cbbb" />
      <circle cx="116" cy="76" r="5" fill="#c6cbbb" />

      <rect x="76" y="104" width="470" height="404" rx="8" fill="#fbfaf6" />
      <rect x="104" y="132" width="180" height="12" rx="6" fill="#d8dbcf" />
      <line x1="112" y1="452" x2="512" y2="452" stroke="#d8dbcf" strokeWidth="2" />
      <rect x="140" y="300" width="56" height="152" rx="4" fill="#244b3b" />
      <rect x="216" y="352" width="56" height="100" rx="4" fill="#7f9a6f" />
      <rect x="292" y="252" width="56" height="200" rx="4" fill="#e7ed92" />
      <rect x="368" y="392" width="56" height="60" rx="4" fill="#d8dbcf" />
      <rect x="444" y="322" width="56" height="130" rx="4" fill="#244b3b" />
      <rect x="140" y="470" width="56" height="8" rx="4" fill="#c6cbbb" />
      <rect x="216" y="470" width="56" height="8" rx="4" fill="#c6cbbb" />
      <rect x="292" y="470" width="56" height="8" rx="4" fill="#c6cbbb" />
      <rect x="368" y="470" width="56" height="8" rx="4" fill="#c6cbbb" />
      <rect x="444" y="470" width="56" height="8" rx="4" fill="#c6cbbb" />

      <rect x="586" y="104" width="236" height="404" rx="16" fill="#f7f5ef" />
      <rect x="610" y="134" width="188" height="130" rx="8" fill="#e2e7dc" />
      <circle cx="704" cy="199" r="30" fill="#244b3b" />
      <rect x="610" y="286" width="132" height="12" rx="6" fill="#262923" />
      <rect x="610" y="312" width="188" height="10" rx="5" fill="#c6cbbb" />
      <rect x="610" y="332" width="150" height="10" rx="5" fill="#c6cbbb" />
      <rect x="610" y="368" width="86" height="26" rx="13" fill="#e7ed92" />
      <rect x="610" y="420" width="188" height="36" rx="4" fill="#244b3b" />
      <rect x="610" y="470" width="120" height="10" rx="5" fill="#c6cbbb" />
    </g>
  )
}
