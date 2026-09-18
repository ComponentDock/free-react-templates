import { ButtonLink } from '@free-react-templates/ui'

interface CaseStudyItem {
  image: string
  category: string
  title: string
}

const caseStudies: CaseStudyItem[] = [
  {
    image: 'https://picsum.photos/seed/stratagem-case1/400/300',
    category: 'Finance Solution',
    title: 'Consumer Products Consulting',
  },
  {
    image: 'https://picsum.photos/seed/stratagem-case2/400/300',
    category: 'Marketing & SEO',
    title: 'Digital Growth Strategy',
  },
  {
    image: 'https://picsum.photos/seed/stratagem-case3/400/300',
    category: 'Corporate Business',
    title: 'Enterprise Restructuring',
  },
  {
    image: 'https://picsum.photos/seed/stratagem-case4/400/300',
    category: 'Startup Agency',
    title: 'Launch & Scale Program',
  },
]

export function CaseStudy() {
  return (
    <section id="case-study" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-light text-navy md:text-4xl">Case Study</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-mist">
          Explore our successful projects and see how we help businesses achieve their goals
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {caseStudies.map((cs) => (
            <div
              key={cs.title}
              className="group overflow-hidden rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="overflow-hidden">
                <img
                  src={cs.image}
                  alt={cs.title}
                  className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-medium text-brand">{cs.category}</span>
                <h3 className="mt-2 text-base font-medium text-navy">{cs.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <ButtonLink
            href="#"
            className="inline-flex items-center rounded-full border border-brand px-8 py-3 text-sm font-medium text-brand transition-colors hover:bg-brand hover:text-white"
          >
            More Cases
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
