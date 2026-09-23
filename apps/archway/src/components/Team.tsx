import { type SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

function TwitterIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function FacebookIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function LinkedinIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const members = [
  {
    name: 'David Smith',
    role: 'Architect',
    image: 'https://picsum.photos/seed/archway-staff1/300/400',
  },
  {
    name: 'Sarah Johnson',
    role: 'Interior Designer',
    image: 'https://picsum.photos/seed/archway-staff2/300/400',
  },
  {
    name: 'Michael Brown',
    role: 'Project Manager',
    image: 'https://picsum.photos/seed/archway-staff3/300/400',
  },
  {
    name: 'Emily Davis',
    role: 'Landscape Architect',
    image: 'https://picsum.photos/seed/archway-staff4/300/400',
  },
] as const

const socials = [
  { Icon: TwitterIcon, label: 'Twitter' },
  { Icon: FacebookIcon, label: 'Facebook' },
  { Icon: LinkedinIcon, label: 'LinkedIn' },
  { Icon: InstagramIcon, label: 'Instagram' },
] as const

export function Team() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-ink sm:text-4xl">Our Architect Team</h2>
          <p className="mx-auto max-w-2xl text-[#6c757d]">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((m) => (
            <div key={m.name} className="text-center">
              <img
                src={m.image}
                alt={m.name}
                className="mx-auto mb-4 aspect-[3/4] w-full rounded-lg object-cover"
              />
              <h3 className="text-lg font-bold text-ink">{m.name}</h3>
              <p className="mb-3 text-sm text-brand">{m.role}</p>
              <div className="flex justify-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-paper text-mist transition-colors hover:bg-brand hover:text-white"
                  >
                    <s.Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
