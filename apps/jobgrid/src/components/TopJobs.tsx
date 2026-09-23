import { MapPin, DollarSign } from 'lucide-react'

const jobs = [
  {
    title: 'Senior UI/UX Designer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    salary: '$120K – $160K',
    type: 'Full-time',
  },
  {
    title: 'Full-Stack Developer',
    company: 'WebFlow Solutions',
    location: 'Remote',
    salary: '$130K – $170K',
    type: 'Full-time',
  },
  {
    title: 'Digital Marketing Manager',
    company: 'BrandBoost Agency',
    location: 'New York, NY',
    salary: '$90K – $120K',
    type: 'Full-time',
  },
  {
    title: 'Restaurant General Manager',
    company: 'The Grand Bistro',
    location: 'Chicago, IL',
    salary: '$65K – $85K',
    type: 'Full-time',
  },
  {
    title: 'Civil Engineer',
    company: 'BuildRight Construction',
    location: 'Austin, TX',
    salary: '$95K – $130K',
    type: 'Full-time',
  },
  {
    title: 'Network Engineer',
    company: 'ConnectTel',
    location: 'Seattle, WA',
    salary: '$100K – $140K',
    type: 'Full-time',
  },
] as const

export function TopJobs() {
  return (
    <section className="bg-bg-gray py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
            Browse top jobs
          </h2>
          <p className="mt-3 text-text-muted">Featured positions from leading companies.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <div
              key={job.title}
              className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-brand-dark group-hover:text-brand">
                  {job.title}
                </h3>
                <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
                  {job.type}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-text-muted">{job.company}</p>

              <div className="mt-4 flex flex-col gap-2 text-sm text-text-muted">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-brand/60" />
                  {job.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <DollarSign className="h-4 w-4 text-brand/60" />
                  {job.salary}
                </span>
              </div>

              <button
                type="button"
                className="mt-6 w-full rounded-lg border-2 border-brand py-2.5 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
