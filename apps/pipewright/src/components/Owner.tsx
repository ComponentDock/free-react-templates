import { OWNER } from '../content'
import { Container, Kicker } from './ui'

/**
 * The centred testimony band: one 112 px portrait, a serif lede that reads as
 * the second headline, two paragraphs and a signature. The only ornament is
 * the avatar.
 */
export function Owner() {
  return (
    <section id="owner" className="section bg-ink-50">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <img
            src={OWNER.image}
            alt={OWNER.imageAlt}
            className="mx-auto h-28 w-28 rounded-full object-cover"
          />
          <div className="mt-6">
            <Kicker>{OWNER.kicker}</Kicker>
          </div>
          <p className="mt-4 font-serif text-2xl leading-snug text-ink-800 sm:text-3xl">
            {OWNER.lede}
          </p>
          {OWNER.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-5 text-lg leading-relaxed text-ink-600">
              {paragraph}
            </p>
          ))}
          <p className="mt-8 font-serif text-xl text-ink-800">{OWNER.signature}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-ink-400">{OWNER.role}</p>
          <p className="mt-8">
            <a
              href="#services"
              className="inline-flex items-center gap-2 border-b-2 border-primary-600 pb-1 text-sm font-semibold text-ink-800 transition-colors hover:text-primary-700"
            >
              {OWNER.link}
            </a>
          </p>
        </div>
      </Container>
    </section>
  )
}
