import { BrandButton } from './BrandButton'

export function Hero() {
  return (
    <section id="home" className="bg-white py-16 sm:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row">
        {/* Left — Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://picsum.photos/seed/civicore-hero/600/400"
            alt="Hero illustration"
            className="w-full rounded-lg object-cover"
          />
        </div>

        {/* Right — Copy */}
        <div className="w-full lg:w-1/2">
          <h1 className="font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Find Your Dream <span className="text-brand">Job</span> with Civicore
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-mist">
            Discover thousands of job opportunities from top companies around the world. Your next
            career move starts here — search, apply, and land your dream role today.
          </p>
          <div className="mt-8">
            <BrandButton href="#jobs">Explore Now</BrandButton>
          </div>
        </div>
      </div>
    </section>
  )
}
