import { ButtonLink } from '@free-react-templates/ui'

/* lucide-react removed brand icons; inline SVG keeps the Instagram glyph. */
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  )
}

const leaders = [
  {
    name: 'Tyler Reed',
    role: 'Youth Pastor',
    handle: '@pastortyler',
    blurb:
      'Tyler has been leading Ignite for 6 years and is passionate about helping students discover who they are in Christ. He\u2019s married to Jess and they have two kids.',
    image: 'https://picsum.photos/seed/ignite-13/400/400',
  },
  {
    name: 'Jessica Reed',
    role: 'Girls Ministry Director',
    handle: '@jessreed',
    blurb:
      'Jess leads our girls ministry and small group leaders. She loves coffee, worship music, and watching students grow in their faith.',
    image: 'https://picsum.photos/seed/ignite-14/400/400',
  },
  {
    name: 'Marcus Johnson',
    role: 'Guys Ministry Director',
    handle: '@marcusj',
    blurb:
      'Marcus leads our guys ministry and high school outreach. Former college athlete, current BBQ enthusiast. He\u2019s been on staff for 4 years.',
    image: 'https://picsum.photos/seed/ignite-15/400/400',
  },
  {
    name: 'Sofia Martinez',
    role: 'Middle School Coordinator',
    handle: '@sofia.ignite',
    blurb:
      'Sofia has a heart for middle schoolers navigating the awkward years. She creates environments where students feel safe to ask questions.',
    image: 'https://picsum.photos/seed/ignite-16/400/400',
  },
] as const

export function Leaders() {
  return (
    <section id="leaders" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-accent-500">
            Meet the Team
          </p>
          <h2 className="mt-2 font-display text-4xl tracking-wide text-gray-900 dark:text-white md:text-5xl">
            Our Leaders
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
            We&apos;re not just staff—we&apos;re people who genuinely care about your student&apos;s
            faith journey.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((leader) => (
            <article
              key={leader.name}
              className="flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-6 text-center transition-all hover:shadow-lg dark:border-navy-700 dark:bg-navy-800"
            >
              <img
                src={leader.image}
                alt={leader.name}
                className="h-24 w-24 rounded-full object-cover ring-4 ring-primary-100 dark:ring-primary-900"
              />
              <h3 className="mt-4 font-display text-2xl tracking-wide text-gray-900 dark:text-white">
                {leader.name}
              </h3>
              <p className="mt-0.5 text-sm font-semibold text-primary-600 dark:text-primary-400">
                {leader.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {leader.blurb}
              </p>
              <a
                href="#leaders"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gray-900 transition-colors hover:text-primary-600 dark:text-white"
              >
                <InstagramIcon className="h-4 w-4" />
                {leader.handle}
              </a>
            </article>
          ))}
        </div>

        {/* Volunteer CTA */}
        <div className="mt-6 flex flex-col items-center justify-between gap-6 overflow-hidden rounded-2xl bg-navy-950 p-8 lg:flex-row lg:p-12">
          <div>
            <h3 className="font-display text-3xl tracking-wide text-white lg:text-4xl">
              Want to Make a Difference?
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70">
              We&apos;re always looking for adults who want to invest in the next generation. No
              experience necessary—just a heart for students.
            </p>
          </div>
          <ButtonLink
            href="#about"
            className="shrink-0 rounded-full bg-accent-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-500/25 transition-colors hover:bg-accent-600"
          >
            Become a Volunteer
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
