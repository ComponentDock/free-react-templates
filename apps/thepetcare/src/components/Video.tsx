import { Play } from 'lucide-react'

export function Video() {
  return (
    <section className="relative overflow-hidden bg-navy3 py-24">
      <img
        src="https://picsum.photos/seed/thepetcare-video/1600/700"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-4 text-center sm:px-6">
        <h3 className="font-display text-2xl text-white sm:text-3xl">Play the video to see more</h3>
        <button
          type="button"
          aria-label="Play the video"
          className="mt-8 flex h-20 w-20 items-center justify-center rounded-full bg-white text-[#FF6162] shadow-lg transition-transform hover:scale-105"
        >
          <Play className="h-8 w-8 translate-x-0.5" aria-hidden="true" fill="currentColor" />
        </button>
      </div>
    </section>
  )
}
