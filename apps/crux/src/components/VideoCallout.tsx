import { Play } from 'lucide-react'

export function VideoCallout() {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{
        background: 'radial-gradient(circle at 50% 50%, #7539dd 0%, #7034db 100%)',
      }}
    >
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h2 className="mb-6 text-2xl font-semibold leading-snug text-white md:text-3xl">
          New Features that
          <br />
          open the door of future
        </h2>
        <button
          aria-label="Play video"
          className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30"
        >
          <Play size={28} fill="currentColor" />
        </button>
        <p className="mx-auto max-w-xl text-sm leading-relaxed text-white/80">
          Discover how our latest tools and features are reshaping the way teams build digital
          products. Faster workflows, smarter insights, and stunning results.
        </p>
      </div>
    </section>
  )
}
