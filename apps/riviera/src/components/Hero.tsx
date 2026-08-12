/* Hero — the full-height pool-resort photo with the huge centered white
   headline; the top ~396px is kept clear because the header overlays it. */
export function Hero() {
  return (
    <section aria-label="Hero" className="relative h-[938px] overflow-hidden pt-[396px]">
      <img
        src="https://picsum.photos/seed/riviera-1/1920/938"
        alt="Pool resort at the Riviera"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <h1 className="relative z-10 text-center text-[64px] font-semibold leading-none text-white md:text-[96px]">
        A Luxury Stay
      </h1>
    </section>
  )
}
