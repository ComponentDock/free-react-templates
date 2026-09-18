export function HeroBanner() {
  return (
    <section className="relative flex min-h-[700px] items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://picsum.photos/seed/embankment-hero/1920/900')" }}
      />
      <div className="absolute inset-0 bg-dark/50" />
      <div className="relative z-10 w-full text-center">
        <h3 className="font-oswald text-5xl font-bold text-white md:text-6xl">
          Build Your <span className="text-accent">Dream</span>
        </h3>
        <p className="mx-auto mt-6 max-w-xl font-poppins text-lg text-white/90">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim.
        </p>
        <a
          href="#services"
          className="mt-10 inline-block rounded-[5px] bg-dark px-11 py-3 font-roboto text-[13px] font-medium tracking-wide text-accent transition-colors hover:bg-accent hover:text-dark"
        >
          Discover Now
        </a>
      </div>
    </section>
  )
}
