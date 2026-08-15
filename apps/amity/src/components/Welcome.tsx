const whitePill =
  'inline-flex items-center justify-center rounded-full border-2 border-white px-10 py-[18px] text-[14px] font-semibold leading-none text-white transition-colors hover:bg-white hover:text-ink'

export function Welcome() {
  return (
    <section
      aria-label="About Amity"
      className="relative bg-cover bg-center py-24"
      style={{ backgroundImage: "url('https://picsum.photos/seed/amity-welcome/1600/900')" }}
    >
      <div data-overlay className="absolute inset-0 bg-[rgba(21,21,21,0.9)]" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="relative pb-6 text-[36px] leading-[1.3] font-semibold text-white">
            Welcome to our Charity
          </h2>
          <span className="mb-6 block h-1 w-16 rounded-sm bg-brand" aria-hidden="true" />
          <p className="max-w-xl text-[14px] leading-[2] text-soft">
            For fifteen years we have walked alongside children and families in need — building
            schools, drilling wells, and funding meals. With every donation, another child gets a
            future full of possibility.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#causes" className={whitePill}>
              Read More
            </a>
            <a href="#donate" className={whitePill}>
              Donate Now
            </a>
          </div>
        </div>
        <img
          src="https://picsum.photos/id/1055/640/480"
          alt="Coastal village community served by Amity programs"
          className="w-full rounded-lg object-cover"
        />
      </div>
    </section>
  )
}
