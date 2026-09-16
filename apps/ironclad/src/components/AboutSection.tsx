import { Hammer, Play } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="https://picsum.photos/seed/ironclad-about/600/400"
              alt="Construction project"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-brand-400/20 flex items-center justify-center">
              <div className="w-16 h-16 bg-brand-400 rounded-full flex items-center justify-center">
                <Hammer className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
          <div>
            <span className="text-brand-400 font-medium text-sm uppercase tracking-wide">
              Welcome to Ironclad
            </span>
            <h2 className="text-3xl font-bold text-dark mt-2 mb-4">
              Ironclad A Construction Company
            </h2>
            <div className="flex items-start gap-3 mb-4">
              <Hammer className="w-6 h-6 text-brand-400 flex-shrink-0 mt-1" />
              <h3 className="text-lg font-semibold text-dark">
                We're in this business since 1975 and We provide the best industrial services
              </h3>
            </div>
            <p className="text-body mb-6 leading-relaxed">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-14 h-14 rounded-full border-2 border-brand-400 flex items-center justify-center text-brand-400 hover:bg-brand-400 hover:text-white transition-colors"
                aria-label="Watch our video"
              >
                <Play className="w-5 h-5" />
              </a>
              <span className="text-sm text-body">
                This is how we work on our clients, Watch video
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
