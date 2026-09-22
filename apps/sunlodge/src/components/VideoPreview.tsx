import { Play } from 'lucide-react'
export function VideoPreview() {
  return (
    <section className="relative py-0">
      <div
        className="flex min-h-[400px] items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/sunlodge-video/1400/500)' }}
      >
        <div className="absolute inset-0 bg-navy/60" />
        <div className="relative z-10 flex flex-col items-center gap-4">
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-16 w-16 items-center justify-center rounded-full bg-brand transition-colors hover:bg-brand-hover"
            aria-label="Play hotel preview video"
          >
            <Play className="h-7 w-7 text-white" fill="white" />
          </a>
          <span className="text-sm font-semibold tracking-wide text-white">Hotel Preview</span>
        </div>
      </div>
    </section>
  )
}
