import { cn } from '@free-react-templates/ui'

interface TeamMember {
  name: string
  role: string
  seed: string
  facebook?: string
  twitter?: string
  instagram?: string
  linkedin?: string
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'John Smith',
    role: 'CEO',
    seed: 'bizplanner-team-1',
    facebook: '#',
    twitter: '#',
    instagram: '#',
    linkedin: '#',
  },
  {
    name: 'Sarah Johnson',
    role: 'Creative Director',
    seed: 'bizplanner-team-2',
    facebook: '#',
    twitter: '#',
    instagram: '#',
    linkedin: '#',
  },
  {
    name: 'Mike Wilson',
    role: 'Lead Developer',
    seed: 'bizplanner-team-3',
    facebook: '#',
    twitter: '#',
    instagram: '#',
    linkedin: '#',
  },
  {
    name: 'Emily Davis',
    role: 'Marketing Head',
    seed: 'bizplanner-team-4',
    facebook: '#',
    twitter: '#',
    instagram: '#',
    linkedin: '#',
  },
]

export interface TeamProps {
  className?: string
}

export function Team({ className }: TeamProps) {
  return (
    <section id="team-section" className={cn('bg-charcoal py-20', className)}>
      <div className="mx-auto max-w-7xl px-4">
        {/* Title */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold uppercase text-white md:text-4xl">
            Our Creative Team
          </h2>
        </div>

        {/* Team cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM_MEMBERS.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface TeamCardProps extends TeamMember {}

function TeamCard({ name, role, seed, facebook, twitter, instagram, linkedin }: TeamCardProps) {
  return (
    <div className="group text-center">
      {/* Photo with hover overlay */}
      <div className="relative mb-4 overflow-hidden">
        <img
          src={`https://picsum.photos/seed/${seed}/400/400`}
          alt={name}
          className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary-500/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <h3 className="mb-1 text-lg font-semibold text-white">{name}</h3>
          <p className="mb-3 text-sm text-white/80">{role}</p>
          <div className="flex gap-3">
            {facebook && (
              <a
                href={facebook}
                aria-label={`${name} on Facebook`}
                className="text-white transition-colors hover:text-white/80"
              >
                <FacebookIcon />
              </a>
            )}
            {twitter && (
              <a
                href={twitter}
                aria-label={`${name} on Twitter`}
                className="text-white transition-colors hover:text-white/80"
              >
                <TwitterIcon />
              </a>
            )}
            {instagram && (
              <a
                href={instagram}
                aria-label={`${name} on Instagram`}
                className="text-white transition-colors hover:text-white/80"
              >
                <InstagramIcon />
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                aria-label={`${name} on LinkedIn`}
                className="text-white transition-colors hover:text-white/80"
              >
                <LinkedinIcon />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Name + role below */}
      <h3 className="text-lg font-semibold text-white">{name}</h3>
      <p className="mb-3 text-sm text-gray-400">{role}</p>

      {/* Social links below card */}
      <div className="flex justify-center gap-3">
        {facebook && (
          <a
            href={facebook}
            aria-label={`${name} on Facebook`}
            className="text-gray-400 transition-colors hover:text-primary-500"
          >
            <FacebookIcon />
          </a>
        )}
        {twitter && (
          <a
            href={twitter}
            aria-label={`${name} on Twitter`}
            className="text-gray-400 transition-colors hover:text-primary-500"
          >
            <TwitterIcon />
          </a>
        )}
        {instagram && (
          <a
            href={instagram}
            aria-label={`${name} on Instagram`}
            className="text-gray-400 transition-colors hover:text-primary-500"
          >
            <InstagramIcon />
          </a>
        )}
        {linkedin && (
          <a
            href={linkedin}
            aria-label={`${name} on LinkedIn`}
            className="text-gray-400 transition-colors hover:text-primary-500"
          >
            <LinkedinIcon />
          </a>
        )}
      </div>
    </div>
  )
}

/* Inline SVG social icons (brand icons not in lucide-react) */

function FacebookIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}
