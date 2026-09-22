export function Satisfaction() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          {/* Green shape background with text */}
          <div className="relative w-full lg:w-1/2">
            <div className="rounded-bl-[156px] bg-brand px-8 py-16 text-center sm:px-16 lg:text-left">
              <h2 className="mb-6 text-3xl font-medium text-white lg:text-4xl">
                100% satisfaction guaranteed.
              </h2>
              <p className="mb-8 text-gray-100">Almost before we knew it, we had left the ground</p>
              <a
                href="#contact"
                className="inline-block rounded-bl-xl border-2 border-white px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-brand"
              >
                Make an Appointment
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="https://picsum.photos/seed/vitalblend-satisfaction/600/500"
              alt="Satisfied client"
              className="w-full rounded-lg object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
