import { partners } from '../data'

export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 font-heading text-4xl font-bold text-ink">
              We Are A Non-profit Organization
            </h2>
            <p className="mb-4 text-base leading-relaxed text-gray-500">
              Heartward is dedicated to creating lasting change in communities around the world.
              Through education, healthcare, and disaster relief, we work tirelessly to improve the
              lives of those who need it most.
            </p>
            <p className="mb-6 text-base leading-relaxed text-gray-500">
              Our mission is to empower individuals and families by providing access to essential
              resources, fostering sustainable development, and building stronger, more resilient
              communities for future generations.
            </p>
            <a
              href="#features"
              className="inline-block rounded border border-primary px-8 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white"
            >
              Learn More
            </a>
          </div>
          <div className="relative">
            <img
              src="https://picsum.photos/seed/heartward-about/600/400"
              alt="About Heartward"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-12">
          {partners.map((partner) => (
            <img
              key={partner.name}
              src={partner.image}
              alt={partner.name}
              className="h-10 opacity-30 grayscale transition-all hover:opacity-100 hover:grayscale-0"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
