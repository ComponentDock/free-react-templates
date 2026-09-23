import { Button } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/70" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-24 sm:px-6 lg:flex-row lg:gap-16">
        <div className="flex-1 text-center lg:text-left">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-brand">
            Best Seller Book Of The Week
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
            An Incredibly Easy Way To Read Your Favourite Books
          </h1>
          <p className="mb-8 max-w-lg text-lg text-gray-300">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
            the Semantics.
          </p>
          <Button
            variant="primary"
            size="lg"
            className="rounded-full bg-primary-500 px-8 py-3 text-white hover:bg-primary-600"
          >
            Buy Now
          </Button>
        </div>
        <div className="flex-1">
          <img
            src="https://picsum.photos/seed/pageturn-hero/600/700"
            alt="Book illustration"
            className="mx-auto w-full max-w-md rounded-lg object-cover shadow-2xl lg:max-w-full"
          />
        </div>
      </div>
    </section>
  )
}
