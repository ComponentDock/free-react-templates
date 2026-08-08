import { ArrowRight, MapPin } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

interface Job {
  title: string
  company: string
  location: string
  salary: string
  posted: string
  tags: readonly string[]
  featured?: boolean
  logo: string
}

const jobs: Job[] = [
  {
    title: 'Senior React Developer',
    company: 'TechFlow Inc.',
    location: 'San Francisco, CA',
    salary: '$140K–$180K',
    posted: '2 days ago',
    tags: ['React', 'TypeScript', 'Node.js'],
    featured: true,
    logo: 'https://picsum.photos/seed/jobfield-1/96/96',
  },
  {
    title: 'Lead UX Designer',
    company: 'DesignCraft Studio',
    location: 'Remote',
    salary: '$120K–$160K',
    posted: '1 day ago',
    tags: ['Figma', 'User Research', 'Design Systems'],
    logo: 'https://picsum.photos/seed/jobfield-2/96/96',
  },
  {
    title: 'Data Scientist',
    company: 'DataVault Analytics',
    location: 'New York, NY',
    salary: '$130K–$170K',
    posted: '3 days ago',
    tags: ['Python', 'Machine Learning', 'SQL'],
    logo: 'https://picsum.photos/seed/jobfield-3/96/96',
  },
  {
    title: 'DevOps Engineer',
    company: 'CloudPeak Systems',
    location: 'Austin, TX',
    salary: '$125K–$165K',
    posted: '1 day ago',
    tags: ['AWS', 'Kubernetes', 'Terraform'],
    logo: 'https://picsum.photos/seed/jobfield-4/96/96',
  },
  {
    title: 'Product Marketing Manager',
    company: 'GrowthLab Marketing',
    location: 'Remote',
    salary: '$110K–$145K',
    posted: '4 days ago',
    tags: ['SaaS', 'Content Strategy', 'Analytics'],
    logo: 'https://picsum.photos/seed/jobfield-5/96/96',
  },
  {
    title: 'Financial Analyst',
    company: 'FinEdge Capital',
    location: 'Chicago, IL',
    salary: '$95K–$125K',
    posted: '2 days ago',
    tags: ['Financial Modeling', 'Excel', 'Python'],
    logo: 'https://picsum.photos/seed/jobfield-6/96/96',
  },
] as const

export function FeaturedJobs() {
  return (
    <section
      id="jobs"
      className="border-y border-gray-200 bg-gray-50 py-16 lg:py-20 dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            Latest Opportunities
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Hand-picked roles from the best companies, updated daily.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <article
              key={job.title}
              className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
            >
              <div className="flex items-start justify-between gap-3">
                <img
                  src={job.logo}
                  alt={`${job.company} logo`}
                  loading="lazy"
                  className="h-14 w-14 rounded-lg object-cover"
                />
                <span
                  className={
                    job.featured
                      ? 'rounded-full bg-primary-600 px-3 py-0.5 text-xs font-semibold text-white'
                      : 'rounded-full bg-accent-100 px-3 py-0.5 text-xs font-semibold text-accent-700 dark:bg-accent-900/50 dark:text-accent-300'
                  }
                >
                  {job.featured ? 'Featured' : 'Full-time'}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                {job.title}
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{job.company}</p>
              <p className="mt-2 flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {job.location}
                <span className="text-gray-400 dark:text-gray-500">·</span>
                <span>{job.salary}</span>
                <span className="text-gray-400 dark:text-gray-500">·</span>
                <span>{job.posted}</span>
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="#jobs"
                className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
              >
                Apply Now
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink href="#jobs" className="px-6 py-3 text-sm font-semibold">
            View All Jobs
          </ButtonLink>
          <ButtonLink
            href="#categories"
            variant="outline"
            className="bg-white px-6 py-3 text-sm font-semibold dark:bg-gray-950"
          >
            Browse Categories
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
