import { BrandIcon, type BrandName } from './BrandIcon'

const members = [
  {
    name: 'Aaron Ballance',
    role: 'Ceo Bitcoin',
    image: 'https://picsum.photos/seed/coinly-team-1/400/460',
  },
  {
    name: 'Jackson Nash',
    role: 'Marketing Director',
    image: 'https://picsum.photos/seed/coinly-team-2/400/460',
  },
  {
    name: 'Melissa Barth',
    role: 'Product Manager',
    image: 'https://picsum.photos/seed/coinly-team-3/400/460',
  },
  {
    name: 'Katy Abrams',
    role: 'Head of Design',
    image: 'https://picsum.photos/seed/coinly-team-4/400/460',
  },
] as const

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'Twitter', name: 'twitter' },
  { label: 'LinkedIn', name: 'linkedin' },
]

export function Team() {
  return (
    <section className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-4xl font-medium text-brand md:text-5xl">
          Meet Our Team
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-muted">
          Our experts in the field of crypto currency can always help you with any of your
          questions!
        </p>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <div
              key={member.name}
              className="rounded-xl bg-white p-10 text-center shadow-[0_1px_2px_rgba(33,54,61,0.15)]"
            >
              <img
                src={member.image}
                alt={`Portrait of ${member.name}`}
                className="mx-auto h-52 w-52 rounded-full object-cover"
              />
              <h4 className="mt-5 font-display text-xl font-medium text-brand">{member.name}</h4>
              <p className="mt-1 text-sm text-muted">{member.role}</p>
              <ul
                aria-label={`${member.name} social links`}
                className="mt-5 flex justify-center gap-2"
              >
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href="#team"
                      aria-label={social.label}
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-ash text-white transition-colors hover:bg-gradient-to-r hover:from-grad-start hover:to-grad-end"
                    >
                      <BrandIcon name={social.name} className="h-4 w-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
