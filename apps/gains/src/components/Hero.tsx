/**
 * Hero — full-width dark gym-photo banner: huge Teko condensed uppercase
 * headline "Join now" (JOIN in brand red, "now" in white) over a dark
 * background image, with the red uppercase sub-line "get in shape today".
 */
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[720px] items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/id/453/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-night/70" aria-hidden="true" />
      <div className="relative z-10 px-4 text-center">
        <h2 className="text-7xl font-bold uppercase leading-[0.85] text-brand sm:text-8xl lg:text-[160px]">
          Join <span className="text-white">now</span>
        </h2>
        <p className="-mt-2 text-xl uppercase tracking-wide text-brand lg:text-[21px]">
          get in shape today
        </p>
      </div>
    </section>
  )
}
