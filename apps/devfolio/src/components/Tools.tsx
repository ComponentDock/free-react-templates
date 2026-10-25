import { TOOLS } from '../content'
import { Container, Eyebrow } from './ui'

/** Tools / experience band — 5/7 split, a plain 2 × 2 grid with no borders. */
export function Tools() {
  return (
    <section aria-labelledby="tools-title" className="bg-paper py-[72px]">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Eyebrow>{TOOLS.eyebrow}</Eyebrow>
            <h2 id="tools-title" className="text-[clamp(2rem,4vw,3.3rem)]">
              {TOOLS.lineOne}
              <br />
              {TOOLS.lineTwo}
            </h2>
            <a
              href="#/resume"
              className="mt-8 inline-block text-base leading-[1.75] text-brand underline decoration-line underline-offset-4 hover:text-[#133a95]"
            >
              {TOOLS.link} →
            </a>
          </div>

          <div className="grid gap-[25px] sm:grid-cols-2 lg:col-span-7">
            {TOOLS.cells.map((cell) => (
              <article key={cell.title}>
                <h3 className="text-base tracking-[-0.02em]">{cell.title}</h3>
                <p className="mt-1 text-[0.87rem] leading-[1.75] text-muted">{cell.body}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
