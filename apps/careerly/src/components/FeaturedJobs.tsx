import { MapPin, DollarSign, Bookmark } from 'lucide-react'

const featured = [
  {
    title: 'Restaurant Crew',
    company: 'Hungry Wheeler',
    location: 'New York, NY',
    salary: '$15 - $20/hr',
    description: 'Join our dynamic team in a fast-paced restaurant environment.',
  },
  {
    title: 'Fullstack Developer',
    company: 'TechNova Inc',
    location: 'San Francisco, CA',
    salary: '$95k - $130k',
    description: 'Build scalable web applications with modern JavaScript frameworks.',
  },
  {
    title: 'Real Estate Assistant',
    company: 'Prime Properties',
    location: 'Miami, FL',
    salary: '$45k - $60k',
    description: 'Support property managers with listings and client relations.',
  },
  {
    title: 'Telecom Manager',
    company: 'SignalWave',
    location: 'Chicago, IL',
    salary: '$70k - $95k',
    description: 'Oversee telecom operations and manage field teams.',
  },
]

export function FeaturedJobs() {
  return (
    <section id="featured" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Featured Jobs</h2>
          <p className="text-gray-500">Hand-picked opportunities for you</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((job) => (
            <div
              key={job.title + job.company}
              className="bg-white border border-gray-100 rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-sm font-semibold text-brand">{job.salary}</span>
                <button
                  className="text-gray-300 hover:text-brand transition-colors"
                  aria-label={`Bookmark ${job.title}`}
                >
                  <Bookmark className="h-5 w-5" />
                </button>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{job.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{job.company}</p>
              <p className="text-sm text-gray-600 mb-4 flex-1">{job.description}</p>
              <div className="flex items-center gap-3 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" /> {job.location}
                </span>
                <span className="flex items-center gap-1">
                  <DollarSign className="h-3.5 w-3.5" /> {job.salary}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
