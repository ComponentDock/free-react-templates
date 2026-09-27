import { Download } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-white mb-2">
              About Me
            </h2>
            <h3 className="font-[family-name:var(--font-heading)] text-xl text-brand mb-6">
              We can make it together
            </h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean. A small river named Duden flows
              by their place and supplies it with the necessary regelialia. It is a paradisematic
              country, in which roasted parts of sentences fly into your mouth.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              <Download size={18} />
              Download my CV
            </a>
          </div>

          <div className="flex justify-center">
            <img
              src="https://picsum.photos/seed/unfurl-about/500/600"
              alt="About me portrait"
              className="rounded-lg shadow-2xl max-w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
