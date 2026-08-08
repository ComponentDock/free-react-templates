import { ButtonLink } from '@free-react-templates/ui'

interface Company {
  name: string
  industry: string
  location: string
  openings: number
  live?: boolean
  logo: string
}

const companies: Company[] = [
  {
    name: 'TechFlow Inc.',
    industry: 'Software Development',
    location: 'San Francisco, CA',
    openings: 24,
    live: true,
    logo: 'https://picsum.photos/seed/jobfield-7/96/96',
  },
  {
    name: 'DesignCraft Studio',
    industry: 'Creative Agency',
    location: 'New York, NY',
    openings: 12,
    logo: 'https://picsum.photos/seed/jobfield-8/96/96',
  },
  {
    name: 'DataVault Analytics',
    industry: 'Data & Analytics',
    location: 'Seattle, WA',
    openings: 18,
    live: true,
    logo: 'https://picsum.photos/seed/jobfield-9/96/96',
  },
  {
    name: 'CloudPeak Systems',
    industry: 'Cloud Infrastructure',
    location: 'Austin, TX',
    openings: 31,
    logo: 'https://picsum.photos/seed/jobfield-10/96/96',
  },
  {
    name: 'GrowthLab Marketing',
    industry: 'Digital Marketing',
    location: 'Remote',
    openings: 9,
    live: true,
    logo: 'https://picsum.photos/seed/jobfield-11/96/96',
  },
  {
    name: 'FinEdge Capital',
    industry: 'Financial Services',
    location: 'Chicago, IL',
    openings: 15,
    logo: 'https://picsum.photos/seed/jobfield-12/96/96',
  },
] as const

export function Companies() {
  return (
    <section id="companies" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            Companies Hiring Now
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Join teams at the world&rsquo;s most innovative companies.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {companies.map((company) => (
            <article
              key={company.name}
              className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
            >
              <div className="flex items-center gap-4">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  loading="lazy"
                  className="h-14 w-14 rounded-xl object-cover"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {company.name}
                    </h3>
                    {company.live && (
                      <span className="relative flex h-2 w-2" aria-label="Hiring now">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{company.industry}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">{company.location}</p>
              <a
                href="#jobs"
                className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
              >
                {company.openings} open positions
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <ButtonLink
            href="#jobs"
            variant="outline"
            className="bg-white px-6 py-3 text-sm font-semibold dark:bg-gray-950"
          >
            View All Companies
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
