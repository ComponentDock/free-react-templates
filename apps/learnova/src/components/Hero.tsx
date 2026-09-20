import { Button } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      role="banner"
      aria-label="Hero"
      className="relative flex min-h-screen items-center justify-center"
    >
      <img
        src="https://picsum.photos/seed/learnova-hero/1920/1080"
        alt="Students learning in a modern classroom"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center text-white sm:px-6">
        <h1 className="text-5xl font-black uppercase leading-tight sm:text-6xl lg:text-7xl">
          Learn From Doing
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
          Unlock your potential with our comprehensive online courses. Learn at your own pace, from
          anywhere in the world, with expert instructors.
        </p>
        <div className="mt-8">
          <Button
            size="lg"
            className="rounded bg-primary-blue px-8 py-3 text-base font-bold text-white hover:bg-blue-600 transition-colors"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  )
}
