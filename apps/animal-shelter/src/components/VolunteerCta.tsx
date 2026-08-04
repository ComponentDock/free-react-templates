export function VolunteerCta() {
  return (
    <section className="relative overflow-hidden bg-black py-24">
      <img
        src="https://picsum.photos/seed/animal-shelter-cta/1600/500"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl font-semibold text-white lg:text-4xl">
          Want to help? Become a Volunteer
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm font-light leading-relaxed text-gray-200">
          Your time and care can make a world of difference. Join our volunteer family and help us
          give every pet the love they deserve.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            className="inline-block bg-white px-8 font-medium uppercase leading-[42px] text-ink transition-colors hover:bg-gray-100"
          >
            View pdf details
          </button>
          <button
            type="button"
            className="inline-block bg-white px-8 font-medium uppercase leading-[42px] text-ink transition-colors hover:bg-gray-100"
          >
            Register now
          </button>
        </div>
      </div>
    </section>
  )
}
