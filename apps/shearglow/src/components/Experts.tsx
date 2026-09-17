import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './social-icons'

const experts = [
  {
    name: 'Anna Williams',
    role: 'Senior Stylist',
    src: 'https://picsum.photos/seed/sg-expert1/300/400',
  },
  {
    name: 'Michael Torres',
    role: 'Color Specialist',
    src: 'https://picsum.photos/seed/sg-expert2/300/400',
  },
  {
    name: 'Sarah Chen',
    role: 'Creative Director',
    src: 'https://picsum.photos/seed/sg-expert3/300/400',
  },
]

const socials = [
  { Icon: FacebookIcon, label: 'Facebook' },
  { Icon: TwitterIcon, label: 'Twitter' },
  { Icon: InstagramIcon, label: 'Instagram' },
  { Icon: LinkedinIcon, label: 'LinkedIn' },
]

export function Experts() {
  return (
    <section className="bg-alt-bg py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-4">
          {/* Side thumbnail */}
          <div className="hidden lg:block">
            <img
              src="https://picsum.photos/seed/sg-experts-side/300/500"
              alt="ShearGlow salon"
              className="w-full rounded object-cover"
              loading="lazy"
            />
          </div>

          {/* Main content */}
          <div className="lg:col-span-3">
            <h2 className="font-serif text-3xl font-bold text-dark">Our Experts</h2>
            <div className="mt-2 h-1 w-16 bg-gold-400" />
            <p className="mt-4 max-w-lg text-muted">
              Meet the talented professionals behind ShearGlow. Each stylist brings years of
              experience and a passion for creating your perfect look.
            </p>

            {/* Certificates */}
            <div className="mt-6 flex gap-4">
              {[1, 2, 3].map((n) => (
                <img
                  key={n}
                  src={`https://picsum.photos/seed/sg-cert${n}/120/80`}
                  alt={`Certificate ${n}`}
                  className="h-16 w-24 rounded object-cover"
                  loading="lazy"
                />
              ))}
            </div>

            {/* Team cards */}
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {experts.map((e) => (
                <div key={e.name} className="text-center">
                  <img
                    src={e.src}
                    alt={e.name}
                    className="mx-auto h-48 w-40 rounded object-cover"
                    loading="lazy"
                  />
                  <h3 className="mt-3 font-serif text-lg font-bold text-dark">{e.name}</h3>
                  <p className="text-sm text-muted">{e.role}</p>
                  <div className="mt-2 flex justify-center gap-2">
                    {socials.map(({ Icon, label }) => (
                      <a
                        key={label}
                        href="#"
                        aria-label={label}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-400 text-white transition-colors hover:bg-gold-500"
                      >
                        <Icon className="h-3.5 w-3.5" />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
