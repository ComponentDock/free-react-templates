import { ArrowRight } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="bg-charcoal py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 lg:px-8">
        {/* Text side */}
        <div className="text-white">
          <h3 className="mb-6 text-3xl font-bold">I&apos;m Jon Campbell</h3>
          <p className="mb-4 leading-relaxed text-white/70">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean.
          </p>
          <p className="mb-8 leading-relaxed text-white/70">
            A small river named Duden flows by their place and supplies it with the necessary
            regelialia. It is a paradisematic country, in which roasted parts of sentences fly into
            your mouth.
          </p>
          <a
            href="#services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
          >
            Our services <ArrowRight size={16} />
          </a>
        </div>

        {/* Image side */}
        <div className="relative">
          <img
            src="https://picsum.photos/seed/lawguard-about/600/700"
            alt="Jon Campbell portrait"
            className="w-full rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
