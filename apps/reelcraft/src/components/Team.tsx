const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
)

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
)

const DribbbleIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
    <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
    <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
  </svg>
)

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1.5" />
  </svg>
)

const members = [
  {
    name: 'Sarah Mitchell',
    role: 'Lead Videographer',
    image: 'https://picsum.photos/seed/reelcraft-team1/400/500',
  },
  {
    name: 'James Cooper',
    role: 'Editor',
    image: 'https://picsum.photos/seed/reelcraft-team2/400/500',
  },
  {
    name: 'Emily Davis',
    role: 'Motion Designer',
    image: 'https://picsum.photos/seed/reelcraft-team3/400/500',
  },
  {
    name: 'Michael Brown',
    role: 'Director',
    image: 'https://picsum.photos/seed/reelcraft-team4/400/500',
  },
] as const

const socialIcons = [
  { Icon: FacebookIcon, label: 'Facebook' },
  { Icon: TwitterIcon, label: 'Twitter' },
  { Icon: DribbbleIcon, label: 'Dribbble' },
  { Icon: InstagramIcon, label: 'Instagram' },
] as const

export function Team() {
  return (
    <section
      id="team"
      className="relative bg-cover bg-center py-20"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/reelcraft-team-bg/1920/800)' }}
    >
      <div className="absolute inset-0 bg-surface-dark/85" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">
            Nice to meet
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-wide text-white">
            OUR Team
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <div key={member.name} className="group relative overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover overlay with info */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="font-display text-lg font-bold text-white">{member.name}</h3>
                <p className="mt-1 text-sm text-brand">{member.role}</p>
                <div className="mt-4 flex gap-3">
                  {socialIcons.map((social) => (
                    <a
                      key={social.label}
                      href="#team"
                      aria-label={social.label}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-white/70 transition-colors hover:border-brand hover:text-brand"
                    >
                      <social.Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
