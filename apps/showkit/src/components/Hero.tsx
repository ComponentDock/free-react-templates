import { Button } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-grape-600">
      <img
        src="https://picsum.photos/seed/showkit-hero/1600/900"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-grape-500 to-primary-500 opacity-70"
      />
      <div className="relative mx-auto flex min-h-[640px] max-w-4xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
        <h1 className="text-5xl font-bold uppercase tracking-wide text-white sm:text-6xl">
          Showkit
        </h1>
        <p className="mt-6 font-display text-xl font-bold uppercase text-white sm:text-2xl">
          Showkit App Landing Page Template
        </p>
        <p className="mt-2 text-lg text-white/95">
          A Complete Landing Page and Multipurpose Package
        </p>
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <Button className="w-56 rounded-full bg-white text-ink hover:bg-white hover:text-primary-500">
            View Demos
          </Button>
          <Button className="w-56 rounded-full bg-white text-ink hover:bg-white hover:text-primary-500">
            Buy Showkit
          </Button>
        </div>
      </div>
    </section>
  )
}
