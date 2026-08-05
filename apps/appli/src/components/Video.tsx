import { Play } from 'lucide-react'

export function Video() {
  return (
    <section className="relative overflow-hidden bg-paper py-24 dark:bg-gray-950">
      <img
        src="https://picsum.photos/seed/appli-video/1600/700"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-white/70 dark:bg-gray-950/70" />
      <div className="relative flex justify-center">
        <a
          href="https://www.youtube.com/watch?v=up68UAfH0d0"
          target="_blank"
          rel="noreferrer"
          aria-label="Play video"
          className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-gradient-to-b from-grape to-cobalt text-white shadow-lg transition-transform hover:scale-110"
        >
          <Play className="h-6 w-6 fill-current" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
