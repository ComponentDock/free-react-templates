const heroImage = 'https://picsum.photos/seed/manorly-hero/1920/1200'

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <img
        src={heroImage}
        alt="Aerial view of city apartment blocks between green terraces"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(5deg,#f73347_0%,rgba(18,1,248,0.2)_100%)]"
        aria-hidden="true"
      />
      <div className="mx-auto flex min-h-[700px] max-w-6xl flex-col justify-center px-4 py-40 sm:px-6">
        <p className="text-2xl font-light text-white/90">Dream</p>
        <h1 className="mt-6 max-w-2xl text-5xl font-semibold leading-[1.15] text-white sm:text-6xl lg:text-7xl">
          Properties Now In City
        </h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-white/85">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna.
        </p>
      </div>
    </section>
  )
}
