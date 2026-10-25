import { CONTACT, PERSON } from '../content'
import { ActionLink, Container, Eyebrow } from './ui'

/**
 * The blue panel — padding 50, radius 8, 60 px of paper below it. One white
 * mailto button and the honesty note; no form.
 */
export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-paper">
      <Container>
        <div className="mb-[60px] rounded-lg bg-brand px-[22px] py-[30px] text-white sm:p-[50px]">
          <Eyebrow tone="panel">{CONTACT.eyebrow}</Eyebrow>
          <h2
            id="contact-title"
            className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.08] tracking-[-0.05em]"
          >
            {CONTACT.lineOne}
            <br />
            {CONTACT.lineTwo}
          </h2>
          <div className="mt-7">
            <ActionLink href={`mailto:${PERSON.email}`} variant="white">
              {PERSON.email}
              <span aria-hidden="true">↗</span>
            </ActionLink>
          </div>
          <p className="mt-5 max-w-[520px] text-[0.7rem] leading-[1.75] text-[#e1e9ff]">
            {CONTACT.note}
          </p>
        </div>
      </Container>
    </section>
  )
}
