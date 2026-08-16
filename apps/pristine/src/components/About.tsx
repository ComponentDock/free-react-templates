/** About section on a cream background strip: "Satisfaction Guarantee"
 *  heading + paragraph left, full-width photo right. */
export function About() {
  return (
    <section id="about" className="relative bg-white">
      <div className="absolute inset-y-0 left-0 w-4/5 -z-10 bg-cream" aria-hidden="true" />
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-20 lg:flex-row lg:px-8">
        <div className="w-full lg:w-2/5">
          <h2 className="text-3xl font-semibold leading-tight text-navy lg:text-4xl">
            Satisfaction
            <br />
            Guarantee
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-body">
            If you are not delighted with your clean, we return and re-clean the affected areas at
            no charge — no questions asked.
          </p>
        </div>
        <div className="w-full lg:w-3/5">
          <img
            src="https://picsum.photos/seed/pristine-about/820/520"
            alt="A bright, freshly cleaned kitchen"
            className="h-72 w-full rounded-xl object-cover lg:h-auto"
          />
        </div>
      </div>
    </section>
  )
}
