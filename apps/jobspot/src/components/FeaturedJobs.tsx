import { Heart, MapPin, Briefcase, Calendar } from 'lucide-react'

const jobs = [
  {
    type: 'Partime',
    title: 'Frontend Development',
    company: 'Facebook, Inc.',
    location: 'Western City, UK',
    tag: 'Web Design',
    date: '20 days',
    salary: '$2,000',
    tagColor: 'bg-brand',
  },
  {
    type: 'Fulltime',
    title: 'Full Stack Developer',
    company: 'Google, Inc.',
    location: 'Western City, UK',
    tag: 'Web Design',
    date: '20 days',
    salary: '$2,000',
    tagColor: 'bg-brand-green',
  },
  {
    type: 'Freelance',
    title: 'Open Source Interactive Developer',
    company: 'New York Times',
    location: 'Western City, UK',
    tag: 'Web Design',
    date: '20 days',
    salary: '$2,000',
    tagColor: 'bg-green-500',
  },
  {
    type: 'Partime',
    title: 'Frontend Development',
    company: 'Facebook, Inc.',
    location: 'Western City, UK',
    tag: 'Web Design',
    date: '20 days',
    salary: '$2,000',
    tagColor: 'bg-red-500',
  },
  {
    type: 'Temporary',
    title: 'Open Source Interactive Developer',
    company: 'New York Times',
    location: 'Western City, UK',
    tag: 'Web Design',
    date: '20 days',
    salary: '$2,000',
    tagColor: 'bg-yellow-500',
  },
  {
    type: 'Fulltime',
    title: 'Full Stack Developer',
    company: 'Google, Inc.',
    location: 'Western City, UK',
    tag: 'Web Design',
    date: '20 days',
    salary: '$2,000',
    tagColor: 'bg-brand',
  },
]

export function FeaturedJobs() {
  return (
    <section className="bg-brand-surface py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12">
          <span className="mb-2 block text-sm font-semibold uppercase tracking-widest text-brand">
            Recently Added Jobs
          </span>
          <h2 className="text-3xl font-bold text-gray-900">Featured Jobs Posts For This Week</h2>
        </div>

        <div className="space-y-4">
          {jobs.map((job, i) => (
            <div
              key={`${job.title}-${i}`}
              className="flex flex-col gap-4 rounded-lg border bg-white p-4 shadow-sm transition-shadow hover:shadow-md md:flex-row md:items-center md:justify-between"
            >
              <div className="flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="rounded bg-brand/10 px-2 py-0.5 text-xs font-semibold text-brand">
                    {job.type}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900">{job.title}</h3>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Briefcase size={14} /> {job.company}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} /> {job.location}
                  </span>
                  <span
                    className={`rounded px-2 py-0.5 text-xs font-semibold text-white ${job.tagColor}`}
                  >
                    {job.tag}
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {job.date}
                  </span>
                  <span className="font-semibold text-brand">{job.salary}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  aria-label="Save job"
                  className="flex h-10 w-10 items-center justify-center rounded border text-gray-400 transition-colors hover:border-red-400 hover:text-red-400"
                >
                  <Heart size={16} />
                </button>
                <a
                  href="#"
                  className="rounded bg-brand px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
                >
                  Apply Job
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
