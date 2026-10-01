import { Apple, Smartphone } from 'lucide-react'

export function MobileApp() {
  return (
    <section className="bg-carbon py-20 text-center">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-3xl font-extrabold uppercase text-white sm:text-4xl">
          Save 30% with the app
        </h2>
        <p className="mt-3 text-gray-300">Easy &amp; Fast — Book a car in 60 seconds</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#home"
            className="inline-flex items-center gap-3 border-2 border-brand px-6 py-3 font-bold uppercase text-brand transition-colors hover:bg-brand hover:text-carbon"
          >
            <Smartphone className="h-5 w-5" aria-hidden="true" />
            Android Store
          </a>
          <a
            href="#home"
            className="inline-flex items-center gap-3 border-2 border-brand px-6 py-3 font-bold uppercase text-brand transition-colors hover:bg-brand hover:text-carbon"
          >
            <Apple className="h-5 w-5" aria-hidden="true" />
            Apple Store
          </a>
        </div>
      </div>
    </section>
  )
}
