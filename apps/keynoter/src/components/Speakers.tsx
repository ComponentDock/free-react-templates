import { ButtonLink } from '@free-react-templates/ui'
import { SPEAKERS, SPEAKERS_CTA } from '../content'
import { Container, Duotone, SectionTitle } from './ui'

/** White band, 362px cards, magenta→indigo portraits, centred indigo CTA. */
export function Speakers() {
  return (
    <section id="speakers" className="band bg-white">
      <Container>
        <SectionTitle>Keynote Speakers</SectionTitle>
        <ul className="grid gap-[30px] md:grid-cols-2 lg:grid-cols-3">
          {SPEAKERS.map((speaker) => (
            <li key={speaker.name} className="mb-[30px] lg:mb-[65px]">
              <Duotone
                src={`https://picsum.photos/seed/${speaker.seed}/724/824`}
                alt={speaker.alt}
                className="mb-[22px] h-[330px] rounded-[6px] lg:h-[412px]"
              />
              <h3 className="text-[24px] leading-[1.2] font-black text-ink md:text-[30px]">
                {speaker.name}
              </h3>
              <p className="mt-[10px] text-[18px] leading-[1.5] text-body">{speaker.role}</p>
            </li>
          ))}
        </ul>
        <div className="text-center">
          <ButtonLink
            href={SPEAKERS_CTA.href}
            className="h-auto rounded-[6px] bg-brand px-[45px] py-[20px] text-[18px] leading-none font-black tracking-[1.5px] text-white uppercase hover:bg-brand-dark"
          >
            {SPEAKERS_CTA.label}
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}
