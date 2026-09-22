import { cn } from '@free-react-templates/ui'
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './social-icons'

interface Instructor {
  name: string
  role: string
  photo: string
}

const instructors: Instructor[] = [
  {
    name: 'Sarah Johnson',
    role: 'Yoga Trainer',
    photo: 'https://picsum.photos/seed/instructor1/400/400',
  },
  {
    name: 'David Miller',
    role: 'Yoga Trainer',
    photo: 'https://picsum.photos/seed/instructor2/400/400',
  },
  {
    name: 'Emily Chen',
    role: 'Yoga Trainer',
    photo: 'https://picsum.photos/seed/instructor3/400/400',
  },
  {
    name: 'Michael Brown',
    role: 'Yoga Trainer',
    photo: 'https://picsum.photos/seed/instructor4/400/400',
  },
]

const socials = [
  { label: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
  { label: 'Twitter', href: 'https://twitter.com', Icon: TwitterIcon },
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: LinkedinIcon },
]

interface InstructorsProps {
  className?: string
}

export function Instructors({ className }: InstructorsProps) {
  return (
    <section id="instructors" className={cn('bg-light-bg py-20', className)}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-sm font-medium uppercase tracking-widest text-brand">
          Our Team
        </p>
        <h2 className="mt-3 text-center text-3xl font-bold text-heading">Expert Instructors</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {instructors.map((instructor) => (
            <div key={instructor.name} className="text-center">
              <img
                src={instructor.photo}
                alt={instructor.name}
                className="mx-auto h-48 w-48 rounded-full object-cover shadow-md"
                loading="lazy"
              />
              <h3 className="mt-4 font-semibold text-heading">{instructor.name}</h3>
              <p className="text-sm text-text">{instructor.role}</p>
              <div className="mt-3 flex justify-center gap-3">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${instructor.name} ${label}`}
                    className="text-text transition-colors hover:text-brand"
                  >
                    <Icon className="h-4 w-4" />
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
