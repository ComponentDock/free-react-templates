import { ButtonLink } from '@free-react-templates/ui'
import { ABOUT_PARAGRAPHS } from '../data/content'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="about" className="section-pad bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="About Our Company"
            title="Safe Logistic & Transport Solutions That Save Your Valuable Time!"
            align="left"
          />
          {ABOUT_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="mt-6 text-body">
              {paragraph}
            </p>
          ))}
          <ButtonLink href="#quote" className="btn mt-9 px-11 py-5 text-white">
            <span>More About Us</span>
          </ButtonLink>
        </div>
        <div className="relative pb-16 pt-12">
          <img
            src="https://picsum.photos/seed/vitesse-about-1/640/420"
            loading="lazy"
            alt="Freight trucks lined up at a distribution depot"
            className="absolute right-0 top-0 w-2/3 rounded-md object-cover"
          />
          <img
            src="https://picsum.photos/seed/vitesse-about-2/640/520"
            loading="lazy"
            alt="Cargo ship being loaded at the harbour"
            className="relative z-10 w-4/5 rounded-md object-cover"
          />
          <img
            src="https://picsum.photos/seed/vitesse-about-3/420/300"
            loading="lazy"
            alt="Warehouse crew preparing pallets for dispatch"
            className="absolute bottom-0 right-8 z-20 w-2/5 rounded-md border-4 border-white object-cover"
          />
        </div>
      </div>
    </section>
  )
}
