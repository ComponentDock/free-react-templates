import { aboutImage, aboutParagraphs, aboutTitle, aboutLink } from '../data'

export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 sm:flex-row sm:items-start sm:px-6">
        <div className="w-full sm:w-1/2">
          <img src={aboutImage} alt={aboutTitle} className="w-full rounded object-cover" />
        </div>
        <div className="w-full sm:w-1/2">
          <h2 className="text-3xl font-bold text-heading">{aboutTitle}</h2>
          {aboutParagraphs.map((p, i) => (
            <p key={i} className="mt-4 leading-relaxed text-muted">
              {p}
            </p>
          ))}
          <a
            href="#"
            className="mt-6 inline-block text-sm font-semibold text-brand transition-colors hover:underline"
          >
            {aboutLink}
          </a>
        </div>
      </div>
    </section>
  )
}
