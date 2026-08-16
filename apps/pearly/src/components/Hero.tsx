import { ToothMark } from './Header'
import { heroHeadline, heroPhoto, heroText } from '../data'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-mist">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-32 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative">
          {/* Faint oversized tooth outline behind the caption */}
          <ToothMark className="pointer-events-none absolute -left-16 -top-16 h-72 w-72 text-navy/[0.06]" />
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-mint">
            Dental Clinic
          </p>
          <h1 className="mt-4 text-5xl font-normal leading-[1.05] text-navy">{heroHeadline}</h1>
          <p className="mt-6 max-w-md text-lg text-body">{heroText}</p>
          <a
            href="#contact"
            className="group mt-9 inline-flex h-14 w-[248px] items-center justify-center border border-navy bg-transparent text-lg font-medium text-navy transition-colors hover:bg-mint hover:border-mint hover:text-white"
          >
            Make an Appointment
          </a>
        </div>
        <div className="relative lg:pl-6">
          {/* Floating tooth shape accent */}
          <ToothMark
            data-testid="hero-tooth"
            className="absolute -right-4 -top-8 z-10 h-20 w-20 rotate-12 text-mint"
          />
          <img
            src={heroPhoto}
            alt="Dental care team"
            className="h-[420px] w-full object-cover lg:h-[520px]"
          />
        </div>
      </div>
    </section>
  )
}
