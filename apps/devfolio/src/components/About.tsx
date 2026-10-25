import { ABOUT } from '../content'
import { Container, Eyebrow } from './ui'

/**
 * `#about` — the one band that inverts the split: headline left (5), argument
 * right (7), on a cool grey ground with hairlines top and bottom. The
 * principles are rules, not cards.
 */
export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="border-y border-line bg-about py-[72px]"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Eyebrow>{ABOUT.eyebrow}</Eyebrow>
            <h2 id="about-title" className="text-[clamp(2rem,4vw,3.3rem)]">
              {ABOUT.lineOne}
              <br />
              {ABOUT.lineTwo}
              <br />
              {ABOUT.lineThree}
            </h2>
          </div>

          <div className="lg:col-span-7">
            <div className="max-w-[600px] space-y-[1.2rem] text-base leading-[1.75]">
              {ABOUT.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-[35px] border-t border-rule">
              {ABOUT.principles.map((principle) => (
                <article key={principle.title} className="border-b border-rule py-[23px]">
                  <h3 className="text-[1.08rem] tracking-[-0.025em]">{principle.title}</h3>
                  <p className="mt-1 text-[0.87rem] leading-[1.75] text-muted">{principle.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
