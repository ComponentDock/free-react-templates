export function Hero() {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://picsum.photos/seed/spotless-hero/1920/1080')" }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-36 lg:flex-row lg:px-8 lg:py-44">
        {/* White blob text panel */}
        <div className="w-full max-w-2xl rounded-[60%_40%_55%_45%/50%_60%_40%_50%] bg-white/95 p-10 shadow-xl lg:p-14">
          <p className="font-accent text-base font-semibold uppercase tracking-[4px] text-brand">
            The best cleaning service ever
          </p>
          <h1 className="mt-4 text-4xl font-medium leading-tight text-heading lg:text-5xl">
            We Will Make Absolutely Any Place Clean, Neat
          </h1>
          <a href="#contact" className="btn-pill mt-8">
            Free quote
          </a>
        </div>

        {/* Gloved-hand spray photo (desktop only) */}
        <img
          src="https://picsum.photos/seed/spotless-spray/520/640"
          alt="Cleaner spraying a surface with a bottle"
          className="hidden w-full max-w-md rounded-3xl object-cover shadow-2xl lg:block"
        />
      </div>
    </section>
  )
}
