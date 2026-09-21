import { Play } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 md:grid-cols-2">
        {/* Image with play button */}
        <div className="relative">
          <img
            src="https://picsum.photos/seed/piston-about/600/400"
            alt="About Piston"
            className="w-full rounded object-cover"
          />
          <button
            type="button"
            aria-label="Play video"
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-dark transition hover:bg-brand-dark"
          >
            <Play size={28} fill="currentColor" />
          </button>
        </div>
        {/* Text */}
        <div className="flex flex-col justify-center">
          <h2 className="mb-4 text-3xl font-bold text-dark">Welcome to Piston</h2>
          <p className="mb-4 leading-relaxed text-mist">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean.
          </p>
          <p className="leading-relaxed text-mist">
            A small river named Duden flows by their place and supplies it with the necessary
            regelialia. It is a paradisematic country, in which roasted parts of sentences fly into
            your mouth.
          </p>
        </div>
      </div>
    </section>
  )
}
