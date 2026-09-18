import { MapPin, Clock } from 'lucide-react'

const jobs = [
  {
    id: 1,
    title: 'Senior React Developer',
    company: 'TechCorp',
    location: 'Remote',
    type: 'Full-time',
    salary: '$120k - $160k',
    posted: '2 days ago',
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    company: 'DesignStudio',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$90k - $120k',
    posted: '3 days ago',
  },
  {
    id: 3,
    title: 'Backend Engineer',
    company: 'CloudScale',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$130k - $170k',
    posted: '1 day ago',
  },
  {
    id: 4,
    title: 'DevOps Specialist',
    company: 'InfraOps',
    location: 'Austin, TX',
    type: 'Contract',
    salary: '$100k - $140k',
    posted: '5 days ago',
  },
]

export function RecentJobs() {
  return (
    <section className="bg-surface py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold text-gray-900">Recent Job Listings</h2>
          <p className="text-gray-600">Latest opportunities from top companies</p>
        </div>
        <div className="mx-auto max-w-4xl space-y-4">
          {jobs.map((job) => (
            <article
              key={job.id}
              className="flex flex-col items-start justify-between gap-4 rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:flex-row sm:items-center"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                <p className="text-sm text-gray-500">{job.company}</p>
                <div className="mt-2 flex flex-wrap gap-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <MapPin size={14} /> {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {job.type}
                  </span>
                  <span>{job.salary}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-400">{job.posted}</span>
                <a
                  href="#"
                  className="rounded bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
                >
                  Apply Now
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
