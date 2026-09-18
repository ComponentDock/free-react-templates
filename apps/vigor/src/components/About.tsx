import { Play } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-4">
            <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-200">
              <img
                src="https://picsum.photos/seed/vigor-about/800/450"
                alt="Gym interior"
                className="h-full w-full object-cover"
              />
              <button
                className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-400 text-white shadow-lg transition-transform hover:scale-110"
                aria-label="Play video"
              >
                <Play className="h-6 w-6 fill-current" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((n) => (
                <img
                  key={n}
                  src={`https://picsum.photos/seed/vigor-thumb-${n}/200/150`}
                  alt={`Gym program ${n}`}
                  className="h-20 w-full rounded object-cover"
                />
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-400">
              Welcome
            </p>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Welcome to <span className="text-brand-400">Vigor</span> Crossfit Gym
            </h2>
            <p className="mb-6 leading-relaxed text-gray-600">
              A small river named Duden flows by their place and supplies it with the necessary
              regelialia. It is a paradisematic country, in which roasted parts of sentences fly
              into your mouth. Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <a
              href="#contact"
              className="inline-block rounded-full bg-brand-400 px-8 py-3 font-semibold text-white transition-colors hover:bg-transparent hover:text-brand-400 hover:ring-2 hover:ring-brand-400"
            >
              Join us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
