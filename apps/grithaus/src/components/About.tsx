import { ButtonLink, cn } from '@free-react-templates/ui'
import { btn } from './action'
import { SectionHeading } from './SectionHeading'
import { about } from '../data'

export function About() {
  return (
    <section id="about" aria-label="About Grithaus" className="pb-0 pt-[100px]">
      <div className="mx-auto max-w-[1170px] px-4">
        <SectionHeading label={about.label} title={about.heading} />
        <div className="grid gap-[30px] lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="grid gap-[30px] md:grid-cols-2">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="text-[14px] leading-[2] text-body">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-[40px] flex flex-wrap gap-[30px]">
              <ButtonLink href={about.primaryCta.href} className={cn(btn.base, btn.outline)}>
                {about.primaryCta.label}
              </ButtonLink>
              <ButtonLink href={about.secondaryCta.href} className={cn(btn.base, btn.filled)}>
                {about.secondaryCta.label}
              </ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-4 lg:-mt-[50px]">
            <img
              src={about.image}
              alt={about.imageAlt}
              className="h-[420px] w-full rounded-[10px] object-cover lg:h-[520px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
