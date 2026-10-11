import { ABOUT } from '../data/content'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="about" className="section-gap bg-white">
      <SectionHeading title={ABOUT.title} subtitle={ABOUT.subtitle} />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2">
        <div className="overflow-hidden">
          <img
            src={ABOUT.image}
            alt="Kayak resting on a quiet alpine lake"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -left-10 top-10 hidden h-[calc(100%-80px)] w-[70px] bg-white shadow-[-35px_35px_50px_0px_rgba(157,157,157,0.3)] lg:block"
          />
          <div className="relative bg-white p-10 shadow-[0px_0px_50px_0px_rgba(157,157,157,0.3)] lg:py-20 lg:pl-10 lg:pr-24">
            <h2 className="text-3xl font-bold leading-tight">
              {ABOUT.headingLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            {ABOUT.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-5 text-body">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
