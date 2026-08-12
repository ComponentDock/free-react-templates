import { TrendingUp } from 'lucide-react'
import { Badge } from '@free-react-templates/ui'

interface CaseStudy {
  category: string
  title: string
  blurb: string
  client: string
  metric: string
  image: string
}

const studies: CaseStudy[] = [
  {
    category: 'Finance',
    title: 'Digital Transformation for Regional Bank',
    blurb:
      'Modernized core processes and launched a digital onboarding flow that cut branch workloads while lifting customer satisfaction.',
    client: 'Meridian Trust Bank',
    metric: '+45% efficiency',
    image: 'https://picsum.photos/seed/consilio-9/600/450',
  },
  {
    category: 'Healthcare',
    title: 'Patient Journey Redesign for Hospital Group',
    blurb:
      'Redesigned scheduling and intake across five facilities, removing bottlenecks and giving clinicians more time with patients.',
    client: 'Carewell Health',
    metric: '-30% wait time',
    image: 'https://picsum.photos/seed/consilio-10/600/450',
  },
  {
    category: 'Manufacturing',
    title: 'Supply Chain Overhaul for Industrial Parts Maker',
    blurb:
      'Consolidated suppliers and renegotiated logistics contracts, releasing working capital and stabilizing lead times.',
    client: 'Northgate Industries',
    metric: '$2M saved',
    image: 'https://picsum.photos/seed/consilio-11/600/450',
  },
]

export function CaseStudies() {
  return (
    <section aria-labelledby="case-studies-heading" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12">
          <p className="mb-3 flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-eyebrow">
            <span className="h-0.5 w-14 bg-eyebrow" aria-hidden="true" />
            Success Stories
          </p>
          <h2
            id="case-studies-heading"
            className="font-display text-3xl font-bold text-brand-deep dark:text-white"
          >
            Our Case Studies
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {studies.map((study) => (
            <article
              key={study.title}
              className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
            >
              <img src={study.image} alt="" className="h-44 w-full object-cover" loading="lazy" />
              <div className="p-6">
                <Badge className="mb-3 bg-accent/10 text-accent">{study.category}</Badge>
                <h3 className="mb-3 font-display text-base font-bold leading-snug text-brand-deep dark:text-white">
                  <a href="#case-studies" className="transition-colors hover:text-accent">
                    {study.title}
                  </a>
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-body dark:text-gray-400">
                  {study.blurb}
                </p>
                <p className="mb-4 text-xs font-medium uppercase tracking-wide text-gray-400">
                  Client: <span className="text-gray-600 dark:text-gray-300">{study.client}</span>
                </p>
                <span className="inline-flex items-center gap-1.5 rounded bg-brand-deep px-3 py-1.5 text-xs font-semibold text-white">
                  <TrendingUp className="h-3.5 w-3.5" aria-hidden="true" />
                  {study.metric}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
