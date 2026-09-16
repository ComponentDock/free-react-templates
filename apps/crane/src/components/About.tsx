import { ArrowRight } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="bg-mist py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-lg border border-gray-200 bg-white p-8 md:flex md:items-center md:gap-12">
          {/* Image */}
          <div className="mb-8 md:mb-0 md:w-1/2">
            <img
              src="https://picsum.photos/seed/crane-about/600/400"
              alt="Construction team at work"
              className="w-full rounded-lg object-cover"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2">
            <h2 className="mb-4 text-3xl font-bold text-heading">
              We Serve all of your
              <br />
              Construction Services
            </h2>
            <p className="mb-4 text-body">
              &ldquo;Construction is a full service construction company offering building solutions
              from start to finish. Our staff has been operating in the industry for ten
              years.&rdquo;
            </p>
            <p className="mb-6 text-body">
              There are many variations of passages of lorem Ipsum available, but the majority have
              suffered alteration in some form, by injected humour, or randomised words which
              don&rsquo;t look even slightly believable.
            </p>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded bg-primary-400 px-8 py-3 font-semibold text-white transition-colors hover:bg-primary-500"
            >
              About Us
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
