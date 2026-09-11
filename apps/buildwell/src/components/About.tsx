import { Award, Users, Cpu } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Certified Experience',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.',
    image: 'https://picsum.photos/seed/buildwell-about1/400/300',
  },
  {
    icon: Users,
    title: 'The Great Teamwork',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.',
    image: 'https://picsum.photos/seed/buildwell-about2/400/300',
  },
  {
    icon: Cpu,
    title: 'Modern Technology',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.',
    image: 'https://picsum.photos/seed/buildwell-about3/400/300',
  },
] as const

export function About() {
  return (
    <section id="about">
      {/* Feature cards */}
      <div className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="mx-auto h-48 w-full object-cover"
                  loading="lazy"
                />
                <h3 className="mt-6 text-xl font-bold text-heading">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body">{feature.description}</p>
                <a
                  href="#about"
                  className="mt-4 inline-block text-sm font-semibold text-accent transition-colors hover:text-accent-dark"
                >
                  Read more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Us text block */}
      <div className="bg-light py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Subtitle
              </p>
              <h2 className="mt-2 text-3xl font-bold text-heading">About Us</h2>
              <p className="mt-6 leading-relaxed text-body">
                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis
                dolor repellendus.
              </p>
              <p className="mt-4 leading-relaxed text-body">
                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
              </p>
            </div>
            <div>
              <img
                src="https://picsum.photos/seed/buildwell-about-main/600/400"
                alt="About BuildWell"
                className="w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
