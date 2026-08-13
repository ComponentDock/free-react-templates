import { about } from '../data'
import { SectionTitle } from './SectionTitle'

export function About() {
  return (
    <section id="about" className="section-gap py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-4 md:grid-cols-2">
        <div className="relative">
          <div
            className="absolute -left-4 -top-4 h-full w-full rounded bg-periwinkle/40"
            aria-hidden="true"
          />
          <img
            src="https://picsum.photos/id/823/600/700"
            alt="About Kenedy Jackson"
            className="relative h-auto w-full rounded"
            loading="lazy"
          />
        </div>
        <div>
          <SectionTitle title={about.title} />
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="mb-5 font-body text-[15px] leading-[1.7]">
              {paragraph}
            </p>
          ))}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={about.buttons[0]!.href}
              className="inline-flex items-center rounded-full border border-periwinkle bg-white px-10 py-3.5 font-sans text-base font-semibold text-brand transition-colors hover:bg-periwinkle hover:text-white"
            >
              {about.buttons[0]!.label}
            </a>
            <a
              href={about.buttons[1]!.href}
              className="inline-flex items-center rounded-full border border-brand bg-brand px-10 py-3.5 font-sans text-base font-semibold text-white transition-colors hover:bg-white hover:text-brand"
            >
              {about.buttons[1]!.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
