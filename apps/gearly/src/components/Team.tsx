import { ButtonLink } from '@free-react-templates/ui'
import { BrandIcon, type BrandName } from './BrandIcon'

const instructors = [
  {
    name: 'David Warner',
    role: 'Instructor',
    blurb: 'Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor.',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Instructor',
    blurb: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
  },
  {
    name: 'James Carter',
    role: 'Instructor',
    blurb: 'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta.',
  },
  {
    name: 'Emma Wilson',
    role: 'Instructor',
    blurb: 'Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur.',
  },
] as const

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'GitHub', name: 'github' },
  { label: 'X', name: 'x' },
  { label: 'LinkedIn', name: 'linkedin' },
]

export function Team() {
  return (
    <section id="instructors" className="bg-paper py-16 transition-colors dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
              Our Great Team
            </p>
            <h2 className="mt-3 font-display text-3xl font-black uppercase text-ink dark:text-white">
              Our Instructors
            </h2>
          </div>
          <ButtonLink href="#instructors" variant="outline" className="uppercase">
            View all
          </ButtonLink>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {instructors.map((instructor) => (
            <article
              key={instructor.name}
              className="overflow-hidden rounded-2xl bg-white text-center shadow-sm transition-transform hover:-translate-y-1 dark:bg-gray-800"
            >
              <div
                className="flex h-48 items-center justify-center bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://picsum.photos/seed/gearly-${instructor.name.toLowerCase().replace(/\s+/g, '-')}/400/300')`,
                }}
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-navy/70 font-display text-xl font-black text-white">
                  {instructor.name
                    .split(' ')
                    .map((part) => part[0])
                    .join('')}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold uppercase text-ink dark:text-white">
                  {instructor.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-brand">{instructor.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-mist dark:text-gray-300">
                  {instructor.blurb}
                </p>
                <div className="mt-4 flex items-center justify-center gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href="#instructors"
                      aria-label={`${instructor.name} on ${social.label}`}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-mist transition-colors hover:border-brand hover:bg-brand hover:text-white dark:border-gray-700"
                    >
                      <BrandIcon name={social.name} className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
