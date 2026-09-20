const speakers = [
  { name: 'Patricia Stone', role: 'CEO, TechCorp' },
  { name: 'James Oliver', role: 'CTO, InnovateLab' },
  { name: 'Carla Banks', role: 'VP Engineering, CloudBase' },
  { name: 'William Smith', role: 'Director, FutureAI' },
]

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const socialIcons = [
  { Icon: FacebookIcon, label: 'Facebook' },
  { Icon: TwitterIcon, label: 'Twitter' },
  { Icon: LinkedInIcon, label: 'LinkedIn' },
]

export function Speakers() {
  return (
    <section id="speakers" className="bg-[#F6F7FF] py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-4 text-center text-4xl font-bold font-[family-name:var(--font-heading)] uppercase text-[#302072] md:text-5xl">
          Our Speakers
        </h2>
        <p className="mb-12 text-center font-[family-name:var(--font-sans)] text-[#79709D]">
          Meet the industry leaders who will share their insights.
        </p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {speakers.map((speaker, i) => (
            <div key={speaker.name} className="group text-center">
              <div className="relative mx-auto mb-4 h-[300px] w-[250px] overflow-hidden rounded-lg">
                <img
                  src={`https://picsum.photos/seed/galaflow-speaker-${i + 1}/250/300`}
                  alt={speaker.name}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-[#302072]/80 to-transparent opacity-0 transition group-hover:opacity-100">
                  <div className="flex gap-4">
                    {socialIcons.map(({ Icon, label }) => (
                      <a
                        key={label}
                        href="#"
                        aria-label={`${speaker.name} on ${label}`}
                        className="text-white transition hover:text-[#FDE449]"
                      >
                        <Icon />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] uppercase text-[#302072]">
                {speaker.name}
              </h3>
              <p className="text-sm font-[family-name:var(--font-sans)] text-[#79709D]">
                {speaker.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
