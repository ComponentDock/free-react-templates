import { HardHat } from 'lucide-react'
import { miniServices } from '../data'

const aboutImage = 'https://picsum.photos/seed/amberline-about/900/1100'

export function About() {
  return (
    <section id="about" className="bg-page py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1320px] items-center gap-14 px-4 md:grid-cols-2">
        <div className="relative">
          <img
            src={aboutImage}
            alt="A foreman reviewing drawings on a site walkway"
            className="h-[400px] w-full object-cover object-top md:h-[540px]"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 flex items-center gap-4 bg-ink p-[30px] text-white md:right-[-107px] md:bottom-[107px] md:origin-top-left md:rotate-[-90deg]">
            <HardHat aria-hidden="true" className="size-[54px] text-brand" />
            <span className="text-[40px] font-bold text-brand">38</span>
            <span className="text-[14px] uppercase tracking-[0.1em] text-white">Years of experience</span>
          </div>
        </div>

        <div>
          <span className="mb-1 block text-[16px] font-semibold text-deep-amber">Welcome to us</span>
          <h2 className="text-[40px] font-medium leading-[1.2] text-black/80 lg:text-[54px]">
            Quality and Affordable Constructor
          </h2>
          <p className="mt-5 max-w-[36rem]">
            We build from the footing up, price every trade before the first machine arrives and
            keep one foreman on the site from start to handover.
          </p>
          <h3 className="mt-8 text-[26px] font-medium text-black/80">We Can Help You</h3>
          <ul className="mt-6 grid gap-5 sm:grid-cols-2">
            {miniServices.map((service) => (
              <li key={service.title} className="bg-white p-[25px] shadow-[0_24px_48px_-13px_rgba(0,0,0,0.05)]">
                <service.icon aria-hidden="true" className="size-[60px] text-brand" />
                <h4 className="mt-3 text-[20px] font-medium text-black/80">{service.title}</h4>
                <p className="mt-2 text-[15px] leading-[1.7]">{service.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
