import { Play } from 'lucide-react'

export function Video() {
  return (
    <section className="relative overflow-hidden bg-black py-24">
      <img
        src="https://picsum.photos/seed/animal-shelter-video/1600/400"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <button
          type="button"
          aria-label="Play video"
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white transition-transform hover:scale-105"
        >
          <Play className="h-6 w-6" fill="currentColor" aria-hidden="true" />
        </button>
        <h2 className="mt-8 text-2xl font-semibold text-white lg:text-3xl">
          Watch this video how they live here
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm font-light leading-relaxed text-gray-200">
          Step inside our shelter and meet the residents — happy tails, cozy corners, and the people
          who care for them every single day.
        </p>
      </div>
    </section>
  )
}
