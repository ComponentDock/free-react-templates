function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function PinterestIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <line x1="12" y1="17" x2="12" y2="22" stroke="currentColor" strokeWidth="2" />
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.25 2.67 7.9 6.44 9.34-.09-.78-.17-1.99.04-2.85.18-.78 1.2-5.07 1.2-5.07s-.31-.61-.31-1.52c0-1.42.82-2.49 1.84-2.49.87 0 1.29.65 1.29 1.43 0 .87-.56 2.18-.84 3.39-.24 1.01.5 1.83 1.49 1.83 1.79 0 3.17-1.89 3.17-4.61 0-2.41-1.73-4.1-4.21-4.1-2.87 0-4.55 2.15-4.55 4.37 0 .87.33 1.79.75 2.3.08.1.09.19.07.29l-.28 1.13c-.04.19-.15.23-.35.14-1.31-.61-2.13-2.53-2.13-4.07 0-3.31 2.41-6.36 6.94-6.36 3.65 0 6.48 2.6 6.48 6.07 0 3.62-2.28 6.53-5.46 6.53-1.07 0-2.07-.55-2.41-1.21l-.66 2.5c-.24.91-.88 2.06-1.32 2.76A10 10 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
    </svg>
  )
}

function DribbbleIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
      <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
    </svg>
  )
}

const socials = [
  {
    name: 'Twitter',
    Icon: TwitterIcon,
    color: 'bg-social-twitter',
    hoverColor: 'hover:bg-[#5aa3e8]',
  },
  {
    name: 'Facebook',
    Icon: FacebookIcon,
    color: 'bg-social-facebook',
    hoverColor: 'hover:bg-[#3e5891]',
  },
  {
    name: 'Dribbble',
    Icon: DribbbleIcon,
    color: 'bg-social-dribbble',
    hoverColor: 'hover:bg-[#d85085]',
  },
]

function UnheadedGrid() {
  return (
    <div className="mb-8 w-full">
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
        {socials.map((s) => (
          <div key={`solid-${s.name}`} className="flex flex-col gap-3">
            <button
              className={`btn-paddle ${s.color} ${s.hoverColor} text-white`}
              aria-label={`${s.name} solid`}
            >
              <s.Icon />
            </button>
          </div>
        ))}
        {socials.map((s) => (
          <div key={`outline-${s.name}`} className="flex flex-col gap-3">
            <button
              className={`btn-paddle border-2 ${s.color.replace('bg-', 'border-')} text-${s.color.replace('bg-', '')}`}
              aria-label={`${s.name} outline`}
            >
              <s.Icon />
            </button>
          </div>
        ))}
        {socials.map((s) => (
          <div key={`round-${s.name}`} className="flex flex-col gap-3">
            <button
              className={`btn-round ${s.color} ${s.hoverColor} text-white`}
              aria-label={`${s.name} round`}
            >
              <s.Icon />
            </button>
          </div>
        ))}
        {socials.map((s) => (
          <div key={`round-outline-${s.name}`} className="flex flex-col gap-3">
            <button
              className={`btn-round border-2 ${s.color.replace('bg-', 'border-')} text-${s.color.replace('bg-', '')}`}
              aria-label={`${s.name} round outline`}
            >
              <s.Icon />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

const allSocials = [
  {
    name: 'Twitter',
    Icon: TwitterIcon,
    color: 'bg-social-twitter',
    textColor: 'text-social-twitter',
  },
  {
    name: 'Facebook',
    Icon: FacebookIcon,
    color: 'bg-social-facebook',
    textColor: 'text-social-facebook',
  },
  {
    name: 'Linkedin',
    Icon: LinkedinIcon,
    color: 'bg-social-linkedin',
    textColor: 'text-social-linkedin',
  },
  {
    name: 'Pinterest',
    Icon: PinterestIcon,
    color: 'bg-social-pinterest',
    textColor: 'text-social-pinterest',
  },
  {
    name: 'Dribbble',
    Icon: DribbbleIcon,
    color: 'bg-social-dribbble',
    textColor: 'text-social-dribbble',
  },
]

function HeadedSection() {
  return (
    <div>
      <h2 className="mb-6 text-base font-medium text-paddle-heading">Social Buttons</h2>
      <div className="flex flex-col gap-4">
        {allSocials.map((s) => (
          <div key={s.name} className="flex flex-wrap gap-3">
            <button className={`btn-paddle ${s.color} text-white`} aria-label={`${s.name} solid`}>
              <s.Icon /> {s.name}
            </button>
            <button
              className={`btn-paddle border-2 ${s.color.replace('bg-', 'border-')} ${s.textColor}`}
              aria-label={`${s.name} outline`}
            >
              <s.Icon /> {s.name}
            </button>
            <button
              className={`btn-round ${s.color} text-white`}
              aria-label={`${s.name} round solid`}
            >
              <s.Icon /> {s.name}
            </button>
            <button
              className={`btn-round border-2 ${s.color.replace('bg-', 'border-')} ${s.textColor}`}
              aria-label={`${s.name} round outline`}
            >
              <s.Icon /> {s.name}
            </button>
            <button
              className={`btn-paddle bg-transparent ${s.textColor}`}
              aria-label={`${s.name} flat`}
            >
              <s.Icon /> {s.name}
            </button>
            <button
              className={`btn-round bg-transparent ${s.textColor}`}
              aria-label={`${s.name} round flat`}
            >
              <s.Icon /> {s.name}
            </button>
            <button
              className={`btn-tag ${s.color} relative text-white pl-4 pr-6`}
              aria-label={`${s.name} tag`}
            >
              <s.Icon /> {s.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export function SocialButtons() {
  return (
    <section data-testid="social-buttons" className="mb-12">
      <UnheadedGrid />
      <HeadedSection />
    </section>
  )
}
