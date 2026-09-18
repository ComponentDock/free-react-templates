import { Play } from 'lucide-react'

export function Hero() {
  return (
    <section
      className="relative h-[500px] md:h-[600px] bg-cover bg-center flex items-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/chambers-hero/1920/800)' }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Don&apos;t Feel Helpless We Fight for Justice
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            A small river named Duden flows by their place and supplies it with the necessary
            regelialia.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded font-medium transition-colors"
            >
              Contact us
            </a>
            <a
              href="#about"
              className="border-2 border-white text-white hover:bg-white hover:text-bg-dark px-6 py-3 rounded font-medium transition-colors"
            >
              Read more
            </a>
          </div>
        </div>
        <a
          href="#"
          className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex w-16 h-16 rounded-full bg-primary/90 items-center justify-center hover:bg-primary transition-colors"
          aria-label="Play video"
        >
          <Play size={24} className="text-white ml-1" fill="white" />
        </a>
      </div>
    </section>
  )
}
