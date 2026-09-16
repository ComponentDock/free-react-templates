export function CounterStrip() {
  return (
    <section className="relative z-10 -mt-20 pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-0 md:grid-cols-3">
          {/* Counter column */}
          <div className="flex items-center justify-center bg-[#f86f2d] px-8 py-10 text-white">
            <div className="text-center">
              <span className="block text-4xl font-bold">1,432,805</span>
              <span className="mt-1 block text-sm uppercase tracking-wider opacity-90">
                People Helped
              </span>
            </div>
          </div>

          {/* Donate Money column */}
          <div className="flex items-center justify-center bg-[#fa8f3d] px-8 py-10 text-white">
            <div className="text-center">
              <span className="block text-xl font-bold">Donate Money</span>
              <a
                href="#donate"
                className="mt-4 inline-block rounded-none bg-white px-6 py-2 text-sm font-semibold uppercase tracking-wider text-[#fa8f3d] transition-colors hover:bg-gray-100"
              >
                Donate Now
              </a>
            </div>
          </div>

          {/* Be a Volunteer column */}
          <div className="flex items-center justify-center bg-[#faaa3a] px-8 py-10 text-white">
            <div className="text-center">
              <span className="block text-xl font-bold">Be a Volunteer</span>
              <a
                href="#volunteer"
                className="mt-4 inline-block rounded-none bg-white px-6 py-2 text-sm font-semibold uppercase tracking-wider text-[#faaa3a] transition-colors hover:bg-gray-100"
              >
                Be A Volunteer
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
