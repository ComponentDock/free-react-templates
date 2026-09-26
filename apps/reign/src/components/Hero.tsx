import { Play } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center justify-center bg-cover bg-center text-center text-white"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(https://picsum.photos/seed/reign-hero/1920/1080)',
      }}
    >
      <div className="mx-auto max-w-3xl px-4 py-32">
        <h1 className="mb-6 text-5xl font-bold md:text-6xl">Do What You Love</h1>
        <p className="mb-10 text-lg leading-relaxed text-white/80 md:text-xl">
          Crafting beautiful digital experiences with passion and precision. We bring your vision to
          life through thoughtful design and innovative solutions.
        </p>
        <button
          aria-label="Play video"
          className="inline-flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/60 bg-white/10 text-white transition-colors hover:bg-white/20"
        >
          <Play size={24} className="ml-1" />
        </button>
      </div>
    </section>
  )
}
