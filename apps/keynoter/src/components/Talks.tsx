import { TALKS } from '../content'
import { Container, SectionTitle } from './ui'

/**
 * Six 520px `#f5f5f5` cards in three columns. On hover or keyboard focus a
 * `#FB3ABE → #F149E3` gradient floods the card over 0.4s and every word inside
 * turns white — the reference's only interaction on this band.
 */
export function Talks() {
  return (
    <section id="talks" className="bg-white pb-[50px] lg:pb-[70px]">
      <Container>
        <SectionTitle>We will speak about</SectionTitle>
        <ul className="grid gap-[30px] md:grid-cols-2 lg:grid-cols-3">
          {TALKS.map((talk) => (
            <li key={talk.topic}>
              <article
                tabIndex={0}
                aria-label={talk.topic}
                className="group relative flex h-[520px] flex-col justify-between overflow-hidden rounded-[6px] bg-card px-[18px] pt-[34px] pb-[40px] pl-[35px] transition-colors duration-[400ms] outline-none"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(to_right,#fb3abe,#f149e3)] opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100 group-focus-visible:opacity-100 group-focus:opacity-100"
                />
                <h3 className="relative text-[28px] leading-[1.35] font-black text-ink transition-colors duration-[400ms] group-hover:text-white group-focus-visible:text-white group-focus:text-white lg:text-[36px] lg:leading-[50px]">
                  {talk.topic}
                </h3>
                <div className="relative">
                  <p className="text-[20px] leading-[1.2] font-black text-ink transition-colors duration-[400ms] group-hover:text-white group-focus-visible:text-white group-focus:text-white lg:text-[24px]">
                    {talk.speaker}
                  </p>
                  <p className="mt-[10px] text-[16px] leading-[1.5] text-body transition-colors duration-[400ms] group-hover:text-white group-focus-visible:text-white group-focus:text-white lg:text-[18px]">
                    {talk.role}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
