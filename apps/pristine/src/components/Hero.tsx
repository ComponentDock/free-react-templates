import { Sparkles } from 'lucide-react'

/** Split hero on a bright-yellow background: cleaning photo left (~52%),
 *  centered navy caption right with a sparkles icon, headline, subtext and
 *  a navy "Our Services" pill. */
export function Hero() {
  return (
    <section id="home" className="bg-accent">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 lg:flex-row lg:px-8">
        <div className="w-full lg:w-[52%]">
          <img
            src="https://picsum.photos/seed/pristine-hero/900/760"
            alt="A professional cleaner at work in a bright home"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex w-full flex-col items-center px-4 py-16 text-center lg:w-[47%] lg:py-24">
          <Sparkles className="mb-7 h-10 w-10 text-navy" aria-hidden="true" />
          <h1 className="text-4xl font-medium leading-[1.2] text-navy lg:text-5xl">
            Best cleaning services
            <br />
            helping customers
            <br />
            worldwide.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-body">
            With over 25 years of experience cleaning everything from houses to offices, you can
            trust us.
          </p>
          <a href="#services" className="btn-navy-pill mt-9">
            Our Services
          </a>
        </div>
      </div>
    </section>
  )
}
