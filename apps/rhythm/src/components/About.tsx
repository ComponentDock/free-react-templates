import { ButtonLink } from '@free-react-templates/ui'
import { SectionTitle } from './SectionTitle'
import { aboutCopy, aboutImage } from '../data'

// Split about section — artist photo left, title pair (with giant "About me"
// watermark), copy and square purple CONTACT ME button right.
export function About() {
  return (
    <section id="about" className="bg-paper py-[100px]">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 lg:grid-cols-2">
        <img src={aboutImage} alt="DJ Rhythm performing live" className="w-full" />
        <div>
          <SectionTitle title="DJ Alexandra Rud" watermark="About me" />
          <p className="max-w-lg text-[15px] leading-relaxed text-ink">{aboutCopy}</p>
          <ButtonLink
            href="#contact"
            className="mt-10 rounded-none bg-brand px-[25px] py-[14px] text-[15px] font-semibold uppercase tracking-[2px] text-white hover:bg-brand-alt"
          >
            Contact Me
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
