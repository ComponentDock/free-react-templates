/** Trust band: cover photo block left with a yellow "25 Years of
 *  Experience" box pinned to its bottom-right corner (beige strip behind),
 *  heading + two paragraphs + blue "Learn More" pill right. */
export function TrustBand() {
  return (
    <section id="trust" className="relative bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 py-20 lg:flex-row lg:px-8">
        <div className="relative w-full lg:w-[49%]">
          <div
            className="absolute -left-12 -top-10 -z-10 h-full w-[20%] bg-beige"
            aria-hidden="true"
          />
          <img
            src="https://picsum.photos/seed/pristine-trust/720/676"
            alt="A satisfied customer in a freshly cleaned living room"
            className="h-[400px] w-full rounded-l-xl object-cover lg:h-[676px]"
          />
          <div className="absolute right-0 bottom-0 bg-accent p-8 lg:p-9">
            <p className="text-[120px] leading-none font-medium text-navy">25</p>
            <p className="mt-2 text-lg font-medium text-navy">Years of Experience</p>
          </div>
        </div>
        <div className="w-full lg:w-[36%] lg:pl-8">
          <h2 className="text-3xl font-medium leading-tight text-navy lg:text-4xl">
            We know how to build trust &amp; offer the highest quality
          </h2>
          <p className="mt-6 text-base leading-relaxed text-body">
            Every home and workplace we clean gets the same care: vetted teams, eco-friendly
            products and a checklist that leaves no corner behind.
          </p>
          <p className="mt-4 text-base leading-relaxed text-body">
            Our crews arrive on time, work quietly and stand behind every visit with a satisfaction
            guarantee.
          </p>
          <a href="#about" className="btn-blue-pill mt-8">
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
