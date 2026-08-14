function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 800 480"
      className="w-full"
      role="img"
      aria-label="Two people working at desks with laptops"
    >
      {/* Flat studio backdrop */}
      <rect x="0" y="0" width="800" height="480" fill="#f4f5f9" />
      {/* Wall picture frames */}
      <rect x="120" y="70" width="90" height="70" rx="4" fill="#ffffff" stroke="#d8d8d8" />
      <rect x="135" y="85" width="60" height="40" rx="2" fill="#8dd4cd" />
      <rect x="560" y="80" width="70" height="90" rx="4" fill="#ffffff" stroke="#d8d8d8" />
      <circle cx="595" cy="115" r="18" fill="#b9e6e2" />
      {/* Desk one */}
      <rect x="90" y="320" width="330" height="18" rx="6" fill="#25262a" />
      <rect x="110" y="338" width="16" height="110" rx="4" fill="#333333" />
      <rect x="384" y="338" width="16" height="110" rx="4" fill="#333333" />
      {/* Laptop one */}
      <rect x="140" y="262" width="190" height="58" rx="8" fill="#3ca59d" />
      <rect x="166" y="246" width="138" height="16" rx="4" fill="#25262a" />
      <rect x="176" y="250" width="118" height="8" rx="2" fill="#8dd4cd" />
      {/* Person one — dark hair, teal top */}
      <circle cx="250" cy="180" r="34" fill="#f2c9a0" />
      <path d="M216 176 a34 34 0 0 1 68 0 v-12 a34 30 0 0 0 -68 0 z" fill="#25262a" />
      <rect x="214" y="212" width="72" height="108" rx="22" fill="#3ca59d" />
      <circle cx="238" cy="178" r="3" fill="#25262a" />
      <circle cx="264" cy="178" r="3" fill="#25262a" />
      <path
        d="M244 196 q6 8 12 0"
        stroke="#25262a"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      {/* Desk two */}
      <rect x="440" y="330" width="330" height="18" rx="6" fill="#25262a" />
      <rect x="460" y="348" width="16" height="100" rx="4" fill="#333333" />
      <rect x="734" y="348" width="16" height="100" rx="4" fill="#333333" />
      {/* Laptop two */}
      <rect x="490" y="272" width="190" height="58" rx="8" fill="#5fbcb4" />
      <rect x="516" y="256" width="138" height="16" rx="4" fill="#25262a" />
      <rect x="526" y="260" width="118" height="8" rx="2" fill="#b9e6e2" />
      {/* Person two — blue hair, gray top */}
      <circle cx="600" cy="180" r="34" fill="#f2c9a0" />
      <path d="M566 176 a34 34 0 0 1 68 0 v-14 a34 30 0 0 0 -68 0 z" fill="#5b7db1" />
      <rect x="564" y="212" width="72" height="118" rx="22" fill="#333333" />
      <circle cx="588" cy="178" r="3" fill="#25262a" />
      <circle cx="614" cy="178" r="3" fill="#25262a" />
      <path
        d="M594 196 q6 8 12 0"
        stroke="#25262a"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 pb-8 pt-5 text-center md:flex-row md:text-left">
        <div className="md:w-2/5">
          <h1 className="text-[40px] font-black leading-tight text-dark">
            Tell Your Story to the World
          </h1>
          <p className="mt-4 text-[1.1rem] font-extralight leading-relaxed text-ink">
            Join with us! Login or Register. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Delectus, ex!
          </p>
        </div>
        <div className="mt-8 w-full md:mt-0 md:w-3/5">
          <HeroIllustration />
        </div>
      </div>
    </section>
  )
}
