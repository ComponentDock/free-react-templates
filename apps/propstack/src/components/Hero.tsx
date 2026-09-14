import { ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://picsum.photos/seed/propstack-hero/1920/1080)',
      }}
    >
      <div className="px-4 text-center text-white">
        <h1 className="mb-6 text-4xl font-bold md:text-5xl">Buy and sell real estate properties</h1>
        <p className="mx-auto mb-8 max-w-xl text-lg text-gray-200">
          Find your dream home with us. We offer the best properties in prime locations at
          competitive prices.
        </p>
      </div>
      <a
        href="#how-it-works"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white transition-transform hover:translate-y-1"
        aria-label="Scroll to How It Works"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  )
}
