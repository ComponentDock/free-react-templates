import { ArrowRight } from 'lucide-react'

export function About() {
  return (
    <section id="about-section" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 relative">
            <img
              src="https://picsum.photos/seed/dictum-about/600/500"
              alt="Our office"
              className="rounded-lg w-full object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary-300 text-white px-6 py-4 rounded-lg shadow-lg">
              <span className="text-3xl font-bold">50</span>
              <span className="block text-sm">Years of Experience</span>
            </div>
          </div>
          <div className="lg:w-1/2">
            <span className="text-primary-300 font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-3xl font-bold text-ink mt-2 mb-4">Welcome To Dictum</h2>
            <p className="text-smoke leading-relaxed mb-6">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean. A small river named Duden flows
              by their place and supplies it with the necessary regelialia.
            </p>
            <p className="text-smoke leading-relaxed mb-6">
              It is a paradisematic country, in which roasted parts of sentences fly into your
              mouth. Even the all-powerful Pointing has no control about the blind texts it is an
              almost unorthographic life.
            </p>
            <a
              href="#services-section"
              className="inline-flex items-center gap-2 bg-ink text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-dark-800 transition-colors"
            >
              Our Services
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
