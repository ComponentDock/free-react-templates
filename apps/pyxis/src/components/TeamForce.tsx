import { ArrowRight } from 'lucide-react'

export function TeamForce() {
  return (
    <section id="about" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="w-full md:w-1/2">
            <img
              src="https://picsum.photos/seed/pyxis-team/600/400"
              alt="Our team"
              className="w-full rounded-lg object-cover"
              loading="lazy"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="mb-6 text-3xl font-semibold">Meet Our Team</h2>
            <p className="mb-6 leading-relaxed text-body">
              We are a passionate team of designers and developers dedicated to crafting beautiful,
              functional digital experiences. Our collaborative approach ensures every project
              exceeds expectations and delivers real value to our clients.
            </p>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3 text-sm font-semibold uppercase text-white transition-colors hover:bg-brand-dark"
            >
              View More
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
