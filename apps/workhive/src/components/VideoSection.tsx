import { Play } from 'lucide-react'

export function VideoSection() {
  return (
    <section
      className="relative flex min-h-[400px] items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://picsum.photos/seed/workhive-video/1600/600')" }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center">
        <a
          href="#"
          aria-label="Play video"
          className="inline-flex h-20 w-20 items-center justify-center rounded-full border-2 border-white text-white transition-colors hover:bg-white hover:text-primary"
        >
          <Play className="h-8 w-8" />
        </a>
      </div>
    </section>
  )
}
