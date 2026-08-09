import { Play } from 'lucide-react'

export function VideoBand() {
  return (
    <section className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-ink">
      <img
        src="https://picsum.photos/seed/razor-video/1600/600"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative px-4 text-center">
        <button
          type="button"
          aria-label="Play video"
          className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand text-ink shadow-lg transition-transform hover:scale-110"
        >
          <Play className="h-8 w-8 fill-current" aria-hidden="true" />
        </button>
        <h2 className="mt-8 font-display text-4xl font-bold uppercase text-white lg:text-5xl">
          Watch Our Video Popular Hair Style
        </h2>
      </div>
    </section>
  )
}
