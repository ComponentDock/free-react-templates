/** Hero: peach (#FFDDB5) split band — orange uppercase tagline, large
 *  Josefin Sans headline, black sub-copy and the orange Explore Us button
 *  (black wipe-on-hover) on the left; full-height team photo on the right
 *  (hidden below lg, matching the source layout). */
export function Hero() {
  return (
    <section id="home" className="bg-hero">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-end px-4 lg:px-8">
        <div className="flex w-full flex-col justify-center py-16 lg:min-h-[750px] lg:w-[42%] lg:py-0 lg:pr-[50px]">
          <span className="mb-[26px] block font-body text-sm font-bold uppercase tracking-wide text-brand">
            We are new but doing great
          </span>
          <h1 className="mb-5 font-heading text-[38px] font-bold leading-[1.2] text-ink sm:text-[45px] lg:text-[55px] xl:text-[60px]">
            We give the power back to the user
          </h1>
          <p className="mb-10 max-w-xl font-body text-lg leading-normal text-ink lg:text-xl">
            Content marketing is nothing but offering users value.
            <br className="hidden lg:inline" /> It is not just about traffic minion customers.
          </p>
          <a
            href="#services"
            className="group relative inline-flex overflow-hidden rounded-[5px] bg-brand px-[43px] py-[30px] font-body text-xl font-medium leading-none text-white"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 origin-left scale-x-0 bg-ink transition-transform duration-500 ease-out group-hover:scale-x-100"
            />
            <span className="relative">Explore Us</span>
          </a>
        </div>
        <div className="hidden w-1/2 overflow-hidden lg:block">
          <img
            src="https://picsum.photos/seed/boostly-hero/900/750"
            alt="Team members planning a product launch at a whiteboard"
            className="h-[750px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
