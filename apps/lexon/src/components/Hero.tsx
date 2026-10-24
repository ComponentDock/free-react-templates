import { Play } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center bg-cover bg-center bg-no-repeat md:min-h-[700px]"
      style={{
        backgroundImage: `url('https://picsum.photos/seed/justlaw-hero/1920/1080')`,
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <p className="mb-4 text-lg text-gray-300">Professional lawyers</p>
        <h1 className="font-display text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
          We will fight
          <br />
          for you like a friend
        </h1>
      </div>

      {/* Bottom red bar */}
      <div className="absolute bottom-0 left-0 z-10 flex w-full items-center justify-between bg-primary-500 px-4 py-6 md:w-1/2 md:px-8">
        <div>
          <p className="text-sm text-white">Schedule a Free Consultation 24/7</p>
          <span className="text-2xl font-bold text-white md:text-3xl">01654.066.456</span>
        </div>
        <a
          href="#"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary-500 transition-colors hover:bg-gray-100"
          aria-label="Play video"
        >
          <Play className="h-5 w-5" />
        </a>
      </div>
    </section>
  )
}
