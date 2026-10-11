/* Flat illustrated hero band: pale periwinkle hills, a low pink sun, navy
   coast, palm silhouettes and a yellow camper bus that drifts left and right
   the way the reference's "running" van does. Drawn with SVG primitives so no
   artwork is copied — the band is decorative, hence aria-hidden. */
export function BeachScene() {
  return (
    <div
      data-testid="beach-scene"
      aria-hidden="true"
      className="relative h-[300px] w-full overflow-hidden md:h-[400px] lg:h-[880px]"
    >
      <svg
        viewBox="0 0 1440 880"
        preserveAspectRatio="xMidYMax slice"
        className="h-full w-full"
        focusable="false"
      >
        <rect width="1440" height="880" fill="#f4f6ff" />
        <circle cx="470" cy="420" r="96" fill="#ffc9d6" />
        <circle cx="1215" cy="250" r="12" fill="#dbe3ff" />
        <circle cx="1055" cy="330" r="7" fill="#dbe3ff" />
        <circle cx="250" cy="355" r="9" fill="#dbe3ff" />
        <circle cx="700" cy="250" r="6" fill="#dbe3ff" />

        {/* Two rolling ridges behind the coast. */}
        <path
          d="M0 470 C120 350 260 350 380 470 C500 590 640 470 760 380 C880 290 1010 300 1120 400 C1230 500 1330 470 1440 400 L1440 880 L0 880 Z"
          fill="#cbd3fb"
        />
        <path
          d="M0 560 C150 470 320 470 460 560 C600 650 720 560 860 500 C1000 440 1140 460 1260 540 C1350 600 1400 580 1440 560 L1440 880 L0 880 Z"
          fill="#a5b1f8"
        />

        {/* Horizon glow, sea and the dark sand bank. */}
        <rect y="560" width="1440" height="70" fill="#dfe6ff" />
        <rect y="620" width="1440" height="140" fill="#24306e" />
        <path
          d="M0 745 C180 715 360 760 540 750 C740 740 900 700 1100 730 C1250 752 1360 745 1440 735 L1440 880 L0 880 Z"
          fill="#0f1a4b"
        />

        {/* Palm silhouettes. */}
        <g fill="#1b2260">
          <path d="M330 755 L338 560 L350 560 L358 755 Z" />
          <path d="M344 566 C300 540 268 548 246 566 C286 540 322 556 344 566 Z" />
          <path d="M344 566 C388 536 420 546 442 566 C402 542 366 556 344 566 Z" />
          <path d="M344 562 C336 522 350 496 372 484 C352 508 346 536 344 562 Z" />
          <path d="M344 562 C320 526 300 514 276 512 C302 520 328 540 344 562 Z" />
          <path d="M1010 762 L1018 574 L1030 574 L1038 762 Z" />
          <path d="M1024 580 C982 556 950 564 930 580 C968 556 1002 570 1024 580 Z" />
          <path d="M1024 580 C1066 552 1096 562 1118 580 C1078 558 1044 570 1024 580 Z" />
          <path d="M1024 576 C1014 538 1028 512 1050 502 C1032 524 1026 552 1024 576 Z" />
        </g>

        {/* Shore rocks. */}
        <path d="M60 880 C40 800 96 762 150 800 C200 834 196 880 196 880 Z" fill="#2a2170" />
        <path
          d="M1290 880 C1268 806 1320 770 1372 800 C1420 828 1418 880 1418 880 Z"
          fill="#2a2170"
        />

        {/* Foam band along the bottom. */}
        <path
          d="M0 812 C160 780 300 840 470 830 C660 818 800 776 980 806 C1160 836 1300 820 1440 796 L1440 880 L0 880 Z"
          fill="#f2f5ff"
        />

        {/* Camper bus with roof luggage. */}
        <g className="bus-running">
          <rect x="556" y="596" width="360" height="70" rx="30" fill="#ffffff" />
          <rect x="590" y="566" width="120" height="40" rx="8" fill="#3f5cc9" />
          <rect x="726" y="576" width="92" height="30" rx="8" fill="#8fa3e8" />
          <rect x="520" y="640" width="452" height="126" rx="24" fill="#ffc800" />
          <rect x="556" y="632" width="380" height="26" rx="13" fill="#fff3c4" />
          <rect x="566" y="668" width="80" height="54" rx="10" fill="#cbd3fb" />
          <rect x="668" y="668" width="80" height="54" rx="10" fill="#cbd3fb" />
          <rect x="770" y="668" width="80" height="54" rx="10" fill="#cbd3fb" />
          <rect x="872" y="668" width="62" height="54" rx="10" fill="#cbd3fb" />
          <circle cx="636" cy="766" r="42" fill="#14183a" />
          <circle cx="636" cy="766" r="16" fill="#ffffff" />
          <circle cx="862" cy="766" r="42" fill="#14183a" />
          <circle cx="862" cy="766" r="16" fill="#ffffff" />
          <circle cx="520" cy="706" r="13" fill="#fff3c4" />
        </g>
      </svg>
    </div>
  )
}
