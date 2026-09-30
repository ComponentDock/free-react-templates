import { cn } from '@free-react-templates/ui'

interface CaseStudy {
  title: string
  blurb: string
  client: string
  date: string
  image: string
  alt: string
  imageRight: boolean
}

const caseStudies: readonly CaseStudy[] = [
  {
    title: 'kMix Design',
    blurb: 'A modular design system and marketing site for a hardware startup.',
    client: 'JUVINLE Corp.',
    date: '2020',
    image: 'https://picsum.photos/seed/upstart-work-1/960/700',
    alt: 'kMix Design case study — product photography',
    imageRight: false,
  },
  {
    title: 'Dieter Rams',
    blurb: 'An editorial microsite exploring restraint, function and form.',
    client: 'XYZ Inc.',
    date: '2019',
    image: 'https://picsum.photos/seed/upstart-work-2/960/700',
    alt: 'Dieter Rams case study — minimal product design',
    imageRight: true,
  },
]

/** WorkShowcase: two alternating 50/50 case-study rows on the #f8f9fa
 *  band — first image left, second image right. */
export function WorkShowcase() {
  return (
    <section id="work" className="bg-band py-[3em]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {caseStudies.map((study) => (
          <div key={study.title} className="mb-[50px] flex min-h-[500px] flex-col md:flex-row">
            <div
              className={cn(
                'h-[300px] w-full md:h-auto md:min-h-[500px] md:w-1/2',
                study.imageRight && 'md:order-2',
              )}
            >
              <img src={study.image} alt={study.alt} className="h-full w-full object-cover" />
            </div>
            <div className="flex w-full flex-col justify-center p-10 md:w-1/2">
              <h3 className="mb-[30px] font-heading text-[40px] text-black">{study.title}</h3>
              <p className="text-muted">{study.blurb}</p>
              <p className="mt-6 text-muted">
                <strong className="font-bold text-black">Client:</strong> {study.client}
              </p>
              <p className="text-muted">
                <strong className="font-bold text-black">Date:</strong> {study.date}
              </p>
              <a
                href="#work"
                className="mt-6 inline-block self-start font-body text-black transition-colors hover:text-accent"
              >
                View Case Study
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
