import { cn } from '@free-react-templates/ui'
import { aboutSections, readMoreLabel } from '../data'
import { SiteButton } from './SiteButton'

/* Three consecutive full-bleed photo sections with a left-offset content
   column (the reference's .about-section trio); the middle section's photo
   is light enough for dark ink text, the others use white text. */
export function About() {
  return (
    <>
      {aboutSections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="relative flex min-h-[640px] items-center overflow-hidden py-24 lg:min-h-[760px]"
        >
          <img src={section.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className={cn('absolute inset-0', section.light ? 'bg-white/50' : 'bg-black/40')} />
          <div className="relative w-full px-6 lg:pl-[227px]">
            <div className="max-w-[470px]">
              <h2 className={cn('text-5xl font-medium', section.light ? 'text-ink' : 'text-white')}>
                {section.heading}
              </h2>
              <p
                className={cn(
                  'mt-5 leading-relaxed',
                  section.light ? 'text-ink/80' : 'text-white/80',
                )}
              >
                {section.text}
              </p>
              <div className="mt-10">
                <SiteButton href="#contact">{readMoreLabel}</SiteButton>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
