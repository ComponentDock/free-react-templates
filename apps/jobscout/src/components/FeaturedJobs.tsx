import { MapPin, Clock } from 'lucide-react'

interface JobListing {
  title: string
  company: string
  location: string
  salary: string
  type: string
  timeAgo: string
  iconSeed: string
}

const jobs: JobListing[] = [
  {
    title: 'Digital Marketer',
    company: 'Creative Agency',
    location: 'Athens, Greece',
    salary: '$3,500 - $4,000',
    type: 'Full Time',
    timeAgo: '7 hours ago',
    iconSeed: 'jobscout-j1',
  },
  {
    title: 'UI/UX Designer',
    company: 'Tech Solutions',
    location: 'San Francisco, US',
    salary: '$4,000 - $5,500',
    type: 'Full Time',
    timeAgo: '12 hours ago',
    iconSeed: 'jobscout-j2',
  },
  {
    title: 'Frontend Developer',
    company: 'Startup Hub',
    location: 'London, UK',
    salary: '$3,800 - $4,200',
    type: 'Full Time',
    timeAgo: '1 day ago',
    iconSeed: 'jobscout-j3',
  },
  {
    title: 'Project Manager',
    company: 'Global Corp',
    location: 'Berlin, Germany',
    salary: '$3,200 - $3,800',
    type: 'Part Time',
    timeAgo: '2 days ago',
    iconSeed: 'jobscout-j4',
  },
]

export function FeaturedJobs() {
  return (
    <section id="jobs" className="py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-brand">
            Recent Job
          </span>
          <h2 className="text-4xl font-bold text-navy md:text-5xl">Featured Jobs</h2>
        </div>

        <div className="mx-auto max-w-4xl space-y-6">
          {jobs.map((job) => (
            <div
              key={job.title + job.company}
              className="flex flex-col items-start justify-between gap-4 rounded border border-gray-100 p-6 transition-shadow hover:shadow-md sm:flex-row sm:items-center"
            >
              <div className="flex items-center gap-6">
                <img
                  src={`https://picsum.photos/seed/${job.iconSeed}/60/60`}
                  alt={`${job.company} logo`}
                  className="h-14 w-14 rounded object-cover"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-xl font-bold text-navy">{job.title}</h3>
                  <ul className="mt-1 flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-500">
                    <li>{job.company}</li>
                    <li className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-gray-400" />
                      {job.location}
                    </li>
                    <li>{job.salary}</li>
                  </ul>
                </div>
              </div>

              <div className="flex shrink-0 flex-col items-end gap-2">
                <span className="rounded-full border border-accent px-5 py-1 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-white">
                  {job.type}
                </span>
                <span className="flex items-center gap-1 text-xs text-gray-400">
                  <Clock className="h-3 w-3" />
                  {job.timeAgo}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
