import { ButtonLink } from '@free-react-templates/ui'

/* Brand icons — lucide-react dropped brand logos; using inline SVGs instead. */
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
)
const GlobeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-[18px] w-[18px]"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)
const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-[18px] w-[18px]"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

interface Trainer {
  name: string
  role: string
  seed: string
}

const trainers: Trainer[] = [
  { name: 'Alex Morgan', role: 'Head Trainer', seed: 'fitcraft-trainer-1' },
  { name: 'Jordan Blake', role: 'Strength Coach', seed: 'fitcraft-trainer-2' },
  { name: 'Casey Rivera', role: 'Fitness Director', seed: 'fitcraft-trainer-3' },
]

const socialIcons = [
  { Icon: FacebookIcon, label: 'Facebook' },
  { Icon: TwitterIcon, label: 'Twitter' },
  { Icon: GlobeIcon, label: 'Website' },
  { Icon: InstagramIcon, label: 'Instagram' },
]

export function Team() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="mb-4 inline-block border-l-2 border-brand pl-6 font-display text-2xl font-light uppercase tracking-wider text-brand">
              Our Trainers
            </span>
            <h2 className="font-display text-4xl font-bold uppercase text-ink md:text-5xl">
              Meet Our Expert Trainers
            </h2>
          </div>
          <ButtonLink
            href="#classes"
            className="shrink-0 border border-brand bg-transparent px-8 py-3 font-display text-sm font-light uppercase tracking-widest text-white hover:bg-brand hover:text-white"
          >
            View All Trainers
          </ButtonLink>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {trainers.map((trainer) => (
            <div key={trainer.name} className="group text-center">
              <div className="relative mb-6 overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${trainer.seed}/400/450`}
                  alt={trainer.name}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Social overlay slides up on hover */}
                <div className="absolute inset-x-0 bottom-0 flex justify-center gap-4 bg-brand/90 py-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  {socialIcons.map(({ Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={label}
                      className="text-white transition-colors hover:text-ink-dark"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
              <span className="mb-1 block text-sm text-brand">{trainer.role}</span>
              <h3 className="font-display text-2xl font-bold text-ink">{trainer.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
