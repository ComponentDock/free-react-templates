import { Globe } from 'lucide-react'

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

const members = [
  {
    name: 'Jacika Chouhan',
    role: 'Senior Business Consultant',
    image: 'https://picsum.photos/seed/advisory-team1/300/300',
  },
  {
    name: 'Dirluba Jahan',
    role: 'Marketing Strategist',
    image: 'https://picsum.photos/seed/advisory-team2/300/300',
  },
  {
    name: 'Jorina Khan',
    role: 'Financial Advisor',
    image: 'https://picsum.photos/seed/advisory-team3/300/300',
  },
  {
    name: 'Mevina Akter',
    role: 'HR Consultant',
    image: 'https://picsum.photos/seed/advisory-team4/300/300',
  },
]

const socials = [
  { Icon: FacebookIcon, label: 'Facebook' },
  { Icon: TwitterIcon, label: 'Twitter' },
  { Icon: Globe, label: 'Website' },
  { Icon: InstagramIcon, label: 'Instagram' },
]

export function Team() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 block text-sm font-bold uppercase tracking-wider text-navy">
            Experts
          </span>
          <h2 className="text-3xl font-bold text-heading sm:text-4xl">Our consultants</h2>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((m) => (
            <div key={m.name} className="group text-center">
              <div className="relative mb-4 overflow-hidden rounded-xl">
                <img
                  src={m.image}
                  alt={m.name}
                  className="h-64 w-full object-cover transition-transform group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-navy/60 to-transparent pb-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="flex gap-3">
                    {socials.map(({ Icon, label }) => (
                      <a
                        key={label}
                        href="#"
                        aria-label={label}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-brand"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-navy">{m.name}</h3>
              <p className="text-sm text-mist">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
