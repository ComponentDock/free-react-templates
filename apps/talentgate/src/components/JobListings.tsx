import { Heart, MapPin, Clock } from 'lucide-react'

const JOBS = [
  {
    title: 'Frontend Development',
    type: 'Part Time',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    logo: 'https://picsum.photos/seed/job-logo-1/50/50',
  },
  {
    title: 'Full Stack Developer',
    type: 'Full Time',
    company: 'Digital Solutions',
    location: 'New York, NY',
    logo: 'https://picsum.photos/seed/job-logo-2/50/50',
  },
  {
    title: 'Open Source Interactive Developer',
    type: 'Remote',
    company: 'OpenTech',
    location: 'Remote',
    logo: 'https://picsum.photos/seed/job-logo-3/50/50',
  },
  {
    title: 'UI/UX Designer',
    type: 'Full Time',
    company: 'Creative Studio',
    location: 'Austin, TX',
    logo: 'https://picsum.photos/seed/job-logo-4/50/50',
  },
]

export function JobListings() {
  return (
    <section id="jobs" className="bg-light-bg py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-dark-overlay">Current Job Posts</h2>
          <p className="text-gray-500">Browse the latest opportunities</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {JOBS.map((job) => (
            <div
              key={job.title}
              className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <img
                src={job.logo}
                alt={`${job.company} logo`}
                className="h-12 w-12 rounded object-cover"
              />
              <div className="flex-1">
                <div className="mb-1 flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-dark-overlay">{job.title}</h3>
                  <span className="rounded-full bg-brand-blue/10 px-3 py-0.5 text-xs font-medium text-brand-blue">
                    {job.type}
                  </span>
                </div>
                <p className="mb-2 text-sm text-gray-500">{job.company}</p>
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <MapPin size={12} />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    Posted 2 days ago
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  className="rounded-full bg-brand-blue px-4 py-2 text-xs font-medium text-white transition hover:bg-brand-blue/90"
                  aria-label={`Apply for ${job.title}`}
                >
                  Apply Job
                </button>
                <button
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-400 transition hover:bg-gray-200 hover:text-red-500"
                  aria-label={`Save ${job.title}`}
                >
                  <Heart size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
