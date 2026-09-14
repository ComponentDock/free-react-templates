import { ArrowRight } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="overflow-hidden rounded-lg">
          <img
            src="https://picsum.photos/seed/workhive-about/800/600"
            alt="About Workhive workspace"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            About Us
          </span>
          <h2 className="mb-4 text-3xl font-bold text-ink sm:text-4xl font-display">
            Premium quality spaces for agency and personal
          </h2>
          <p className="mb-6 text-body leading-relaxed">
            We provide exceptional coworking spaces designed for creativity, productivity, and
            collaboration. Our spaces are crafted to inspire and empower professionals and teams to
            achieve their best work in environments that foster growth and innovation.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-primary-dark"
          >
            Learn More <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
