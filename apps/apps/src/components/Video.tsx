import { Play } from 'lucide-react'

export function Video() {
  return (
    <section className="relative overflow-hidden bg-night">
      <img
        src="https://picsum.photos/seed/apps-video/1600/700"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-night/60" />
      <div className="relative flex h-[420px] flex-col items-center justify-center gap-6 px-4 text-center lg:h-[520px]">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Being unique is the preference
        </h2>
        <a
          href="https://www.youtube.com/watch?v=ARA0AxrnHdM"
          target="_blank"
          rel="noreferrer"
          aria-label="Play video"
          className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b from-primary-500 to-azure text-white shadow-xl transition-transform hover:scale-110"
        >
          <Play className="h-7 w-7 fill-current" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
