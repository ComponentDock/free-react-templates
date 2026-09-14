function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  )
}

function DribbbleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
      <path
        d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  )
}

const socials = [
  { icon: <FacebookIcon />, label: 'Facebook' },
  { icon: <TwitterIcon />, label: 'Twitter' },
  { icon: <LinkedinIcon />, label: 'LinkedIn' },
  { icon: <DribbbleIcon />, label: 'Dribbble' },
]

export function SocialBar() {
  return (
    <section id="social" className="bg-footer py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-6 px-6">
        <span className="text-sm text-white/70">Follow us on social media</span>
        {socials.map((s) => (
          <a
            key={s.label}
            href="#"
            aria-label={s.label}
            className="text-white/70 transition-colors hover:text-brand-pink"
          >
            {s.icon}
          </a>
        ))}
      </div>
    </section>
  )
}
