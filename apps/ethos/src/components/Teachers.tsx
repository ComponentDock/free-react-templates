import { cn } from '@free-react-templates/ui'
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './social-icons'

const teachers = [
  {
    photo: 'https://picsum.photos/seed/ethos-teacher-1/300/350',
    name: 'Sarah Johnson',
    role: 'Digital Marketing Lead',
    socials: [
      { Icon: FacebookIcon, href: '#', label: 'Facebook' },
      { Icon: TwitterIcon, href: '#', label: 'Twitter' },
      { Icon: InstagramIcon, href: '#', label: 'Instagram' },
      { Icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
    ],
  },
  {
    photo: 'https://picsum.photos/seed/ethos-teacher-2/300/350',
    name: 'Michael Chen',
    role: 'Web Development Instructor',
    socials: [
      { Icon: FacebookIcon, href: '#', label: 'Facebook' },
      { Icon: TwitterIcon, href: '#', label: 'Twitter' },
      { Icon: InstagramIcon, href: '#', label: 'Instagram' },
      { Icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
    ],
  },
  {
    photo: 'https://picsum.photos/seed/ethos-teacher-3/300/350',
    name: 'Emily Roberts',
    role: 'Graphic Design Professor',
    socials: [
      { Icon: FacebookIcon, href: '#', label: 'Facebook' },
      { Icon: TwitterIcon, href: '#', label: 'Twitter' },
      { Icon: InstagramIcon, href: '#', label: 'Instagram' },
      { Icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
    ],
  },
]

export function Teachers() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-gray-900">Teachers</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teachers.map((teacher) => (
            <div key={teacher.name} className="overflow-hidden rounded bg-white shadow-sm">
              <img src={teacher.photo} alt={teacher.name} className="h-64 w-full object-cover" />
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-gray-900">{teacher.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{teacher.role}</p>
                <ul className="mt-4 flex justify-center gap-3">
                  {teacher.socials.map(({ Icon, href, label }) => (
                    <li key={label}>
                      <a
                        href={href}
                        aria-label={label}
                        className={cn(
                          'flex h-8 w-8 items-center justify-center rounded-full bg-brand-400 text-white',
                          'transition-colors hover:bg-brand-500',
                        )}
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
