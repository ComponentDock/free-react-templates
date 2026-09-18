import { ArrowRight } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://picsum.photos/seed/toothzen-about/600/400"
                alt="Dental clinic interior"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2">
            <span className="text-sm font-semibold uppercase tracking-widest text-tooth-teal">
              Welcome to Toothzen
            </span>
            <h2 className="mt-2 text-3xl font-bold text-tooth-dark-blue">
              We Are Toothzen A Dental Clinic
            </h2>
            <p className="mt-4 leading-relaxed text-tooth-muted">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean. A small river named Duden flows
              by their place and supplies it with the necessary regelialia.
            </p>
            <a
              href="#appointment"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-tooth-blue transition-colors hover:text-tooth-dark-blue"
            >
              Get in touch with us <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
