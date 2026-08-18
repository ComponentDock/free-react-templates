import { ABOUT } from '../data'
import { navyOutlineButton } from './buttonClasses'

export function About() {
  return (
    <section id="about" className="flex flex-col items-center bg-white md:flex-row">
      <div className="w-full bg-phototint md:w-[52%]">
        <img
          src={ABOUT.image}
          alt={ABOUT.imageAlt}
          className="h-[420px] w-full object-cover md:h-[728px]"
        />
      </div>
      <div className="w-full px-4 py-[90px] md:w-[48%] md:py-24 md:pl-16">
        <span className="text-sm font-medium uppercase tracking-wide text-navy">{ABOUT.label}</span>
        <h2 className="mt-5 max-w-xl font-display text-[32px] font-semibold leading-snug text-navy-ink">
          {ABOUT.heading}
        </h2>
        {ABOUT.paragraphs.map((paragraph) => (
          <p
            key={paragraph.slice(0, 24)}
            className="mt-4 max-w-xl text-base font-light leading-relaxed text-[#5E5E5E]"
          >
            {paragraph}
          </p>
        ))}
        <a href="#why-choose" className={`${navyOutlineButton} mt-[20px]`}>
          {ABOUT.cta}
        </a>
      </div>
    </section>
  )
}
