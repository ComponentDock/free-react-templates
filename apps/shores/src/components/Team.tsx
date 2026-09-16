import { Mail } from 'lucide-react'

interface TeamMember {
  name: string
  role: string
  description: string
  imageId: string
}

const members: TeamMember[] = [
  {
    name: 'Alea Mirslava',
    role: 'Program Manager',
    description:
      'Leading community development programs with over 10 years of nonprofit experience.',
    imageId: 'shores-team-1',
  },
  {
    name: 'Adam Virland',
    role: 'Operations Director',
    description: 'Managing day-to-day operations and ensuring efficient delivery of aid programs.',
    imageId: 'shores-team-2',
  },
  {
    name: 'Sofia Chen',
    role: 'Outreach Coordinator',
    description: 'Building partnerships and expanding our reach to communities that need help.',
    imageId: 'shores-team-3',
  },
  {
    name: 'Marcus Webb',
    role: 'Volunteer Lead',
    description: 'Coordinating volunteer teams and organizing community events worldwide.',
    imageId: 'shores-team-4',
  },
]

function FacebookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

const socialLinks = [
  { Icon: FacebookIcon, label: 'Facebook' },
  { Icon: TwitterIcon, label: 'Twitter' },
  { Icon: InstagramIcon, label: 'Instagram' },
  { Icon: Mail, label: 'Email' },
]

export function Team() {
  return (
    <section id="team" className="bg-paper py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-ink">Meet our volunteers</h2>
          <p className="mx-auto max-w-xl text-mist">
            Our dedicated team of volunteers is the heart of our organization.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <div key={member.name} className="text-center">
              <img
                src={`https://picsum.photos/seed/${member.imageId}/400/400`}
                alt={member.name}
                className="mx-auto mb-4 h-48 w-48 rounded-full object-cover"
                loading="lazy"
              />
              <h3 className="text-lg font-semibold text-ink">{member.name}</h3>
              <p className="mb-2 text-sm text-brand">{member.role}</p>
              <p className="mb-4 text-sm text-mist">{member.description}</p>
              <div className="flex justify-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-mist transition-colors hover:bg-brand hover:text-white"
                  >
                    <social.Icon size={14} />
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
