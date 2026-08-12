import { aboutImage, aboutLink, aboutParagraphs, aboutTitle } from '../data'

export function About() {
  return (
    <section id="about" className="bg-white py-[100px]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <img src={aboutImage} alt="" className="w-full object-cover" loading="lazy" />
        <div className="lg:pr-[70px]">
          <h2 className="text-3xl font-semibold text-heading">{aboutTitle}</h2>
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="mt-4 text-[15px] leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
          <a
            href="#"
            className="mt-6 inline-block border border-[#eeeeee] px-9 py-2.5 text-sm font-medium uppercase text-heading transition-colors hover:border-brand hover:bg-brand hover:text-white"
          >
            {aboutLink}
          </a>
        </div>
      </div>
    </section>
  )
}
