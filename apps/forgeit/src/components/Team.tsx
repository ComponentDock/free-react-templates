interface TeamMemberProps {
  name: string
  title: string
  description: string
  image: string
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9.09 9.09 0 0 1-2.88 1.1A4.52 4.52 0 0 0 12 7.53v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function TeamMember({ name, title, description, image }: TeamMemberProps) {
  return (
    <div className="text-center">
      <img
        src={image}
        alt={name}
        className="mx-auto mb-6 h-32 w-32 rounded-full object-cover"
        loading="lazy"
      />
      <h3 className="text-xl font-bold text-dark">{name}</h3>
      <p className="mb-4 text-sm text-body">{title}</p>
      <p className="mb-6 text-sm text-body">{description}</p>
      <div className="flex justify-center gap-3">
        <a href="#" aria-label={`${name} on Facebook`} className="text-body hover:text-brand">
          <FacebookIcon />
        </a>
        <a href="#" aria-label={`${name} on Twitter`} className="text-body hover:text-brand">
          <TwitterIcon />
        </a>
        <a href="#" aria-label={`${name} on LinkedIn`} className="text-body hover:text-brand">
          <LinkedinIcon />
        </a>
        <a href="#" aria-label={`${name} on Instagram`} className="text-body hover:text-brand">
          <InstagramIcon />
        </a>
      </div>
    </div>
  )
}

const TEAM: TeamMemberProps[] = [
  {
    name: 'John Rooster',
    title: 'Co-Founder, President',
    description:
      'Visionary leader with 15 years of experience in digital innovation and team building.',
    image: 'https://picsum.photos/seed/forgeit-john/200/200',
  },
  {
    name: 'Tom Sharp',
    title: 'Co-Founder, COO',
    description:
      'Operations expert who ensures every project runs smoothly from concept to delivery.',
    image: 'https://picsum.photos/seed/forgeit-tom/200/200',
  },
  {
    name: 'Winston Hodson',
    title: 'Marketing',
    description: 'Strategic marketer who crafts campaigns that resonate with target audiences.',
    image: 'https://picsum.photos/seed/forgeit-winston/200/200',
  },
]

export function Team() {
  return (
    <section id="team-section" className="border-b py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="section-heading">Our Team</h2>
        </div>
        <div className="grid gap-12 md:grid-cols-3">
          {TEAM.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  )
}
