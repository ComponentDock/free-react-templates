interface CaseStudy {
  category: string
  title: string
  description: string
  image: string
}

const studies: CaseStudy[] = [
  {
    category: 'Criminal Defense',
    title: 'Major Fraud Case Dismissed',
    description:
      'Successfully defended a corporate executive against fraud charges, resulting in full dismissal.',
    image: 'https://picsum.photos/seed/docket-cs1/600/400',
  },
  {
    category: 'Family Law',
    title: 'Child Custody Victory',
    description:
      'Secured favorable custody arrangement prioritizing the best interests of the children.',
    image: 'https://picsum.photos/seed/docket-cs2/600/400',
  },
  {
    category: 'Business Law',
    title: 'Corporate Merger Success',
    description:
      'Guided a complex multi-million dollar merger through regulatory approval and closing.',
    image: 'https://picsum.photos/seed/docket-cs3/600/400',
  },
  {
    category: 'Personal Injury',
    title: 'Maximum Compensation Awarded',
    description: 'Won substantial compensation for a client injured in a workplace accident.',
    image: 'https://picsum.photos/seed/docket-cs4/600/400',
  },
  {
    category: 'Real Estate',
    title: 'Property Dispute Resolved',
    description: 'Resolved a complex property boundary dispute through skilled negotiation.',
    image: 'https://picsum.photos/seed/docket-cs5/600/400',
  },
  {
    category: 'Criminal Defense',
    title: 'DUI Charges Reduced',
    description: 'Negotiated reduced charges for a client facing serious DUI allegations.',
    image: 'https://picsum.photos/seed/docket-cs6/600/400',
  },
  {
    category: 'Judicial Law',
    title: 'Appeal Successfully Won',
    description: 'Won a critical appellate case that set a precedent for future similar cases.',
    image: 'https://picsum.photos/seed/docket-cs7/600/400',
  },
]

export function CaseStudies() {
  return (
    <section aria-labelledby="cases-heading" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="cases-heading" className="mb-12 text-center text-3xl font-bold text-[#212529]">
          Recent Case Studies
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {studies.map((study) => (
            <article
              key={study.title}
              className="overflow-hidden rounded border border-gray-200 bg-white transition-shadow hover:shadow-lg"
            >
              <img src={study.image} alt="" className="h-48 w-full object-cover" loading="lazy" />
              <div className="p-6">
                <span className="mb-3 inline-block rounded bg-[#007bff] px-3 py-1 text-xs font-medium text-white">
                  {study.category}
                </span>
                <h3 className="mb-2 text-lg font-bold text-[#212529]">{study.title}</h3>
                <p className="text-sm leading-relaxed text-[#b2b2b8]">{study.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
