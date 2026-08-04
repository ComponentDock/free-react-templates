export function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold text-ink dark:text-white lg:text-4xl">
            We care your pet
            <br />
            <span className="text-brand">As you care</span>
          </h2>
          <p className="mt-6 text-sm font-light leading-relaxed text-mist dark:text-gray-400">
            From the first checkup to the daily cuddles, we treat every pet like our own. Our team
            of passionate caregivers is here to listen, nurture, and keep your companion happy and
            healthy.
          </p>
          <button
            type="button"
            className="mt-8 inline-block border border-brand bg-white px-11 py-4 text-sm font-normal uppercase tracking-[3px] text-brand transition-colors hover:bg-brand hover:text-white"
          >
            About Us
          </button>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded bg-paper p-8 text-center dark:bg-gray-900">
            <p className="text-4xl font-semibold text-brand">452</p>
            <p className="mt-2 text-sm font-light text-mist dark:text-gray-400">Pets Available</p>
          </div>
          <div className="rounded bg-paper p-8 text-center dark:bg-gray-900">
            <p className="text-4xl font-semibold text-brand">52+</p>
            <p className="mt-2 text-sm font-light text-mist dark:text-gray-400">Happy Volunteers</p>
          </div>
        </div>
      </div>
    </section>
  )
}
