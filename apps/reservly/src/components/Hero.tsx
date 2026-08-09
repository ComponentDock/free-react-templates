import { ReservationForm } from './ReservationForm'

export function Hero() {
  return (
    <section
      className="relative flex min-h-[calc(100vh-4rem)] items-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://picsum.photos/seed/reservly-1/1920/1080')",
      }}
    >
      {/* Translucent blue wash over the photo (source: rgba blue overlay). */}
      <div className="absolute inset-0 bg-blue-900/40" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div className="order-2 lg:order-1">
          <ReservationForm />
        </div>

        <div className="order-1 text-white lg:order-2">
          <h1 className="text-4xl font-bold uppercase leading-tight sm:text-5xl">
            Make Your Reservation
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </section>
  )
}
