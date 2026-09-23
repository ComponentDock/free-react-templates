import { Button } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative bg-gray-900 bg-cover bg-center bg-no-repeat py-20 sm:py-28"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://picsum.photos/seed/bookcraft-hero/1600/900)',
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-xl">
          <h1 className="mb-4 font-[Oswald] text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl">
            Meet Your Next Book
          </h1>
          <p className="mb-8 text-lg text-white/80">
            Discover a compelling story crafted with passion. This book takes you on a journey
            through unforgettable characters and breathtaking landscapes.
          </p>
          <Button className="rounded-full border-2 border-white bg-white px-8 py-3 text-sm font-semibold text-gray-900 transition-all hover:border-white hover:bg-transparent hover:text-white">
            Buy This Book On Amazon
          </Button>
        </div>

        <div className="mt-12 flex justify-center">
          <img
            src="https://picsum.photos/seed/bookcraft-book/400/560"
            alt="Book cover"
            className="w-64 rounded-lg shadow-2xl sm:w-80"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}
