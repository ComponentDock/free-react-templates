import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './BrandIcons'

const TEAM_MEMBERS = [
  {
    name: 'Adrian Molises',
    role: 'CEO & Founder',
    image: 'https://picsum.photos/seed/pulsewave-t1/300/300',
  },
  {
    name: 'Arthur MaGregor',
    role: 'CTO',
    image: 'https://picsum.photos/seed/pulsewave-t2/300/300',
  },
  {
    name: 'Anna Hanzen',
    role: 'Creative Director',
    image: 'https://picsum.photos/seed/pulsewave-t3/300/300',
  },
  {
    name: 'Brian Wooden',
    role: 'Lead Designer',
    image: 'https://picsum.photos/seed/pulsewave-t4/300/300',
  },
]

const SOCIALS = [
  { Icon: FacebookIcon, label: 'Facebook' },
  { Icon: TwitterIcon, label: 'Twitter' },
  { Icon: InstagramIcon, label: 'Instagram' },
  { Icon: LinkedinIcon, label: 'LinkedIn' },
]

export function Team() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-[88px]">
        <h2 className="mb-12 text-center text-3xl font-bold text-text-dark">
          Our Digital Experts Team
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM_MEMBERS.map(({ name, role, image }) => (
            <div key={name} className="text-center">
              <img
                src={image}
                alt={name}
                className="mx-auto mb-4 h-[250px] w-full rounded-lg object-cover"
                loading="lazy"
              />
              <h3 className="mb-2 text-xl font-semibold text-text-dark">{name}</h3>
              <p className="mb-4 text-sm text-text-muted">{role}</p>
              <ul className="flex justify-center gap-3">
                {SOCIALS.map(({ Icon, label }) => (
                  <li key={label}>
                    <a
                      href="#"
                      aria-label={`${name} ${label}`}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-icon-bg text-accent-blue transition-colors hover:bg-accent-blue hover:text-white"
                    >
                      <Icon className="h-3.5 w-3.5" />
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
