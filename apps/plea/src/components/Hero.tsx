import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/plea-hero/1920/1080)',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <h1 className="max-w-2xl text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
          Counseling For Your Better Life
        </h1>
        <p className="mt-4 max-w-xl text-lg text-white/80">
          Professional guidance and support to help you navigate life's challenges with confidence
          and clarity.
        </p>
        <a
          href="#appointment"
          className="mt-8 inline-flex items-center gap-2 bg-[#589167] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#4a7a59]"
        >
          Get Started
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
