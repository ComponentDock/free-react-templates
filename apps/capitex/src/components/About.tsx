import { ArrowRight } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
        {/* Left: Image + counter */}
        <div className="relative">
          <img
            src="https://picsum.photos/seed/capitex-about/600/400"
            alt="About Capitex"
            className="w-full rounded object-cover"
          />
          <div className="absolute -bottom-6 -right-6 flex h-24 w-24 flex-col items-center justify-center rounded bg-brand text-navy shadow-lg">
            <span className="text-3xl font-bold">99</span>
            <span className="text-xs font-medium">Years</span>
          </div>
        </div>

        {/* Right: Content */}
        <div>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Thousands of customers trust our company
          </h2>
          <p className="mb-4 text-body">
            We have been providing reliable financial solutions for over a decade. Our commitment to
            transparency and customer satisfaction has made us a trusted partner for businesses of
            all sizes.
          </p>
          <p className="mb-8 text-body">
            Whether you need a small business loan or a large-scale financing solution, our team of
            experts is here to guide you through every step of the process.
          </p>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded bg-brand px-6 py-3 text-sm font-semibold text-navy uppercase transition hover:bg-brand-hover"
          >
            Learn More
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
