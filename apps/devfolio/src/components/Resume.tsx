import { PERSON, PROJECTS, RESUME } from '../content'
import { Container, Eyebrow, Tag } from './ui'
import { Footer } from './Footer'
import { SkipLink } from './ui'

/** `#/resume` — the second view; only reachable through the nav and the hero. */
export function Resume() {
  return (
    <>
      <SkipLink />
      <header className="border-b border-line">
        <Container className="flex flex-wrap items-center justify-between gap-4 py-6">
          <a
            href="#/"
            className="flex items-center text-base font-bold tracking-[-0.04em] text-ink no-underline"
          >
            <span aria-hidden="true" className="mr-3 font-mono text-[1.1rem] text-brand">
              {PERSON.glyph}
            </span>
            {PERSON.name}
            <span className="sr-only"> — home</span>
          </a>
          <a href="#/" className="text-sm no-underline hover:text-brand">
            ← Back to the portfolio
          </a>
        </Container>
      </header>

      <main id="main" className="bg-paper py-[72px]">
        <Container className="max-w-[880px]">
          <Eyebrow>{RESUME.title}</Eyebrow>
          <h1 className="text-[clamp(2.25rem,5vw,3.5rem)]">{PERSON.name}</h1>
          <p className="mt-2 text-[0.95rem] text-muted">{RESUME.roleLine}</p>
          <p className="mt-6 max-w-[620px] text-[0.95rem] leading-[1.75]">{RESUME.summary}</p>

          <section aria-labelledby="resume-experience" className="mt-12">
            <h2 id="resume-experience" className="border-b border-line pb-3 text-[1.6rem]">
              Experience
            </h2>
            <div className="mt-6 space-y-8">
              {RESUME.experience.map((job) => (
                <article key={job.org}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-[1.1rem]">
                      {job.role} · {job.org}
                    </h3>
                    <span className="font-mono text-[0.7rem] uppercase tracking-[0.09em] text-muted">
                      {job.period}
                    </span>
                  </div>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-[0.9rem] leading-[1.7] text-muted">
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="resume-projects" className="mt-12">
            <h2 id="resume-projects" className="border-b border-line pb-3 text-[1.6rem]">
              {RESUME.projects}
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {PROJECTS.map((project) => (
                <article key={project.id} className="rounded-lg border border-line bg-white p-5">
                  <h3 className="text-[1.1rem]">{project.name}</h3>
                  <p className="mt-2 text-[0.87rem] leading-[1.75] text-muted">{project.blurb}</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="resume-tools" className="mt-12">
            <h2 id="resume-tools" className="border-b border-line pb-3 text-[1.6rem]">
              {RESUME.tools.title}
            </h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {RESUME.tools.items.map((item) => (
                <li
                  key={item}
                  className="rounded-[3px] border border-line bg-white px-2 py-[3px] font-mono text-[0.7rem] text-[#4c5b6d]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="resume-education" className="mt-12">
            <h2 id="resume-education" className="border-b border-line pb-3 text-[1.6rem]">
              {RESUME.education.title}
            </h2>
            <p className="mt-4 text-[0.9rem] text-muted">{RESUME.education.line}</p>
          </section>
        </Container>
      </main>

      <Footer />
    </>
  )
}
