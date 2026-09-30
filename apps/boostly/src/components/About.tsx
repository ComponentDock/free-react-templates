/** About / Philosophy: split band — large photo on the left with a peach
 *  (#FFE0BB) strip behind its left edge, text panel on the right: two-line
 *  heading, two body paragraphs and the founder attribution (role above a
 *  45px light-weight name). */
export function About() {
  return (
    <section id="about" className="overflow-hidden">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center lg:flex-row">
        <div className="relative w-full lg:w-1/2">
          <span
            aria-hidden="true"
            className="absolute left-0 top-0 z-10 hidden h-full w-[147px] bg-peach lg:block"
          />
          <img
            src="https://picsum.photos/seed/boostly-about/800/778"
            alt="Founder presenting the company philosophy to the team"
            className="relative h-[500px] w-full object-cover lg:h-[778px]"
          />
        </div>
        <div className="w-full px-4 py-[70px] lg:w-1/2 lg:px-[75px] lg:py-[120px]">
          <h2 className="mb-[50px] font-heading text-[31px] font-bold leading-[1.4] text-ink lg:text-[46px]">
            Our
            <br />
            Philosophy
          </h2>
          <p className="mb-[15px] font-body text-base text-body">
            The automated process starts as soon as your clothes go into the machine. Duis cursus,
            mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
            Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
          </p>
          <p className="mb-[30px] font-body text-base text-body">
            Nunc ut sem vitae risus tristique posuere. Interdum nulla, ut commodo diam libero vitae
            erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
          </p>
          <div>
            <p className="pb-[22px] font-body text-base text-ink">CEO, Consulto</p>
            <h3 className="font-heading text-[33px] font-normal leading-tight text-ink lg:text-[45px]">
              Capcilena Hanry
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}
