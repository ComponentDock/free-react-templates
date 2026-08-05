import { Play } from 'lucide-react'

export function Video() {
  return (
    <section className="relative overflow-hidden bg-night">
      <img
        src="https://picsum.photos/seed/appru-video/1600/700"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-night/50" />
      <div className="relative flex h-[420px] items-center justify-center lg:h-[520px]">
        <a
          href="https://www.youtube.com/watch?v=ARA0AxrnHdM"
          target="_blank"
          rel="noreferrer"
          aria-label="Play video"
          className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b from-azure to-primary-600 text-white shadow-xl transition-transform hover:scale-110"
        >
          <Play className="h-7 w-7 fill-current" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
