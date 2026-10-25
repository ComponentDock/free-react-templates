import { aboutParagraphs, skills } from '../content'

export function About() {
  return (
    <section id="about" className="q-section">
      <div className="grid grid-cols-1 gap-y-6 min-[992px]:-mx-6 min-[992px]:grid-cols-12 min-[992px]:gap-y-0">
        <div className="min-[992px]:col-span-5 min-[992px]:px-6">
          <h2 className="q-h2 m-0">
            <span className="mb-[14px] block font-sans text-[0.74rem] font-normal tracking-[0.04em] text-muted">
              02 / A LITTLE CONTEXT
            </span>
            Learning by
            <br />
            <em className="font-serif font-normal italic">making things.</em>
          </h2>
        </div>

        <div className="min-[992px]:col-span-7 min-[992px]:px-6">
          <p className="max-w-[640px] text-[1.12rem]">{aboutParagraphs[0]}</p>
          <p className="mb-5">{aboutParagraphs[1]}</p>

          <ul aria-label="Skills and tools" className="flex list-none flex-wrap gap-2 p-0">
            {skills.map((skill) => (
              <li key={skill} className="q-chip">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
