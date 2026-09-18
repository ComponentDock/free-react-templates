import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './social-icons'

const teachers = [
  {
    name: 'Sarah Johnson',
    role: 'Lead Teacher',
    image: 'https://picsum.photos/seed/teacher1/400/500',
  },
  {
    name: 'Michael Chen',
    role: 'Art Instructor',
    image: 'https://picsum.photos/seed/teacher2/400/500',
  },
  {
    name: 'Emily Rivera',
    role: 'Music Teacher',
    image: 'https://picsum.photos/seed/teacher3/400/500',
  },
  {
    name: 'David Kim',
    role: 'Physical Education',
    image: 'https://picsum.photos/seed/teacher4/400/500',
  },
]

const socials = [
  { icon: FacebookIcon, label: 'Facebook' },
  { icon: TwitterIcon, label: 'Twitter' },
  { icon: InstagramIcon, label: 'Instagram' },
  { icon: LinkedinIcon, label: 'LinkedIn' },
]

export function StaffSection() {
  return (
    <section id="teachers" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold uppercase tracking-wide text-brand-blue">
          Meet Our Teachers
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-gray-600">
          Our passionate educators bring creativity and care to every lesson.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teachers.map((teacher) => (
            <div
              key={teacher.name}
              className="group relative overflow-hidden rounded-xl bg-brand-light shadow-md"
            >
              <img
                src={teacher.image}
                alt={`${teacher.name}, ${teacher.role}`}
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center gap-3 bg-brand-blue/90 py-4 transition-transform duration-300 group-hover:translate-y-0">
                {socials.map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand-blue transition-colors hover:bg-brand-orange hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-gray-800">{teacher.name}</h3>
                <p className="text-sm text-brand-blue">{teacher.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
