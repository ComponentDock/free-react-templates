import { MapPin, DollarSign, Clock, Building2 } from 'lucide-react'

const jobs = [
  {
    title: 'Restaurant Crew',
    company: 'Hungry Wheeler',
    location: 'New York, NY',
    salary: '$15 - $20/hr',
    type: 'Part-time',
    tags: ['Food', 'Hospitality'],
  },
  {
    title: 'Fullstack Developer',
    company: 'TechNova Inc',
    location: 'San Francisco, CA',
    salary: '$95k - $130k',
    type: 'Full-time',
    tags: ['JavaScript', 'React'],
  },
  {
    title: 'React Developer',
    company: 'WebCraft Studio',
    location: 'Austin, TX',
    salary: '$85k - $115k',
    type: 'Full-time',
    tags: ['React', 'TypeScript'],
  },
  {
    title: 'Real Estate Assistant',
    company: 'Prime Properties',
    location: 'Miami, FL',
    salary: '$45k - $60k',
    type: 'Full-time',
    tags: ['Real Estate'],
  },
  {
    title: 'Telecom Manager',
    company: 'SignalWave',
    location: 'Chicago, IL',
    salary: '$70k - $95k',
    type: 'Full-time',
    tags: ['Telecom', 'Management'],
  },
]

export function RecentJobs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Recent Jobs</h2>
          <p className="text-gray-500">Latest opportunities from top employers</p>
        </div>
        <div className="space-y-4">
          {jobs.map((job) => (
            <div
              key={job.title + job.company}
              className="bg-white rounded-lg border border-gray-100 p-5 flex flex-col md:flex-row md:items-center gap-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center shrink-0">
                  <Building2 className="h-6 w-6 text-brand" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-gray-900 truncate">{job.title}</h3>
                  <p className="text-sm text-gray-500">{job.company}</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" /> {job.location}
                </span>
                <span className="flex items-center gap-1">
                  <DollarSign className="h-4 w-4" /> {job.salary}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" /> {job.type}
                </span>
              </div>
              <div className="flex gap-2 shrink-0">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-brand/10 text-brand px-2 py-1 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
