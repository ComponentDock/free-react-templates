/** Hero: pull-quote overlapping a 500px cover photo, with a bordered
 *  "We're Available For Work" CTA card on the right (black square button
 *  flush at the card's bottom-left corner). */
export function Hero() {
  return (
    <section id="home" className="mt-[10rem]">
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <img
          src="https://picsum.photos/seed/upstart-hero/1920/500"
          alt="Design book photographed at an angle on a studio desk"
          className="h-[500px] w-full object-cover"
        />
        <blockquote className="relative mt-8 max-w-[500px] font-heading text-[3rem] leading-none text-black md:absolute md:left-[8%] md:top-[-100px] md:mt-0">
          <span
            aria-hidden="true"
            className="absolute left-0 top-[-2.5rem] hidden text-[4rem] leading-none md:left-[-40px] md:top-0 md:block"
          >
            {'\u201D'}
          </span>
          <p>Design is not just what it looks like and feels like. Design is how it works.</p>
          <footer className="mt-6 flex items-center gap-2.5 font-body text-base font-normal not-italic text-muted">
            <img
              src="https://picsum.photos/seed/upstart-person-1/100/100"
              alt="Steve Jobs"
              className="h-[50px] w-[50px] rounded-full"
            />
            <cite>Steve Jobs</cite>
          </footer>
        </blockquote>
        <div className="relative mt-8 max-w-[300px] border-2 border-black bg-white p-[30px] pb-[70px] md:absolute md:right-[8%] md:top-[-100px] md:mt-0">
          <h2 className="mb-[30px] font-heading text-[26px] text-black">
            {'We\u2019re Available For Work'}
          </h2>
          <p className="text-muted">
            Our studio takes on a limited number of product and brand projects each quarter. Tell us
            what you are building.
          </p>
          <a
            href="#contact"
            className="absolute bottom-0 left-0 bg-black px-5 py-2.5 font-body text-sm text-white transition-colors hover:bg-accent"
          >
            Hire Us Now
          </a>
        </div>
      </div>
    </section>
  )
}
