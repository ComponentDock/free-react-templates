/* Hero recreated from the source's white agency_heading: a large
   left-aligned headline with the "Design and Development" span underlined,
   a yellow-underlined "Brows Our Products" CTA (original copy kept 1:1,
   typo included), and two soft floating shapes (purple circle, mint
   triangle). */

export function Hero() {
  return (
    <section id="home" aria-label="Hero" className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-32 lg:px-8 lg:pb-40 lg:pt-56">
        <div className="max-w-3xl">
          <h1 className="text-[2rem] font-medium leading-[1.25] text-ink lg:text-[3.125rem] lg:leading-[62px]">
            We are <span className="underline">Design and Development</span> Agency based on
            California
          </h1>
          <a
            href="#work"
            className="relative mt-12 inline-block px-2 py-1.5 text-base text-ink after:absolute after:inset-x-2 after:bottom-0 after:h-[3px] after:bg-yellow"
          >
            Brows Our Products
          </a>
        </div>
      </div>

      {/* Floating decorative shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[10%] top-[35%] hidden h-24 w-24 rounded-full bg-[#b79ced] opacity-70 lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[30%] right-[18%] hidden h-20 w-20 rotate-45 bg-[#8fe3c0] opacity-70 lg:block"
      />
    </section>
  )
}
