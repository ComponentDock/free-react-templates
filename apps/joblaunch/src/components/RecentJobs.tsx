import { Heart, MapPin, Building2, ChevronLeft, ChevronRight } from 'lucide-react'

interface JobItem {
  title: string
  type: string
  typeColor: string
  company: string
  location: string
}

const jobs: JobItem[] = [
  {
    title: 'Frontend Development',
    type: 'Part Time',
    typeColor: 'bg-primary',
    company: 'Facebook, Inc.',
    location: 'New York City, USA',
  },
  {
    title: 'Software Engineering',
    type: 'Full Time',
    typeColor: 'bg-yellow-500',
    company: 'Google LLC',
    location: 'San Francisco, USA',
  },
  {
    title: 'UI/UX Designer',
    type: 'Freelance',
    typeColor: 'bg-cyan-500',
    company: 'Spotify AB',
    location: 'Stockholm, Sweden',
  },
  {
    title: 'Data Science',
    type: 'Internship',
    typeColor: 'bg-gray-400',
    company: 'Amazon, Inc.',
    location: 'Seattle, USA',
  },
  {
    title: 'Backend Development',
    type: 'Temporary',
    typeColor: 'bg-red-500',
    company: 'Microsoft Corp.',
    location: 'Redmond, USA',
  },
  {
    title: 'DevOps Engineer',
    type: 'Full Time',
    typeColor: 'bg-yellow-500',
    company: 'Netflix, Inc.',
    location: 'Los Gatos, USA',
  },
  {
    title: 'Mobile Development',
    type: 'Part Time',
    typeColor: 'bg-primary',
    company: 'Apple, Inc.',
    location: 'Cupertino, USA',
  },
  {
    title: 'Project Manager',
    type: 'Full Time',
    typeColor: 'bg-yellow-500',
    company: 'Tesla, Inc.',
    location: 'Austin, USA',
  },
  {
    title: 'Cloud Architect',
    type: 'Freelance',
    typeColor: 'bg-cyan-500',
    company: 'Salesforce',
    location: 'San Francisco, USA',
  },
]

export function RecentJobs() {
  return (
    <section className="bg-bg-light py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h2 className="text-3xl font-bold text-ink">Recent Jobs</h2>
          <a
            href="#"
            className="bg-primary text-white rounded-full px-6 py-3 font-semibold hover:bg-primary-dark transition-colors"
          >
            + Post a Job
          </a>
        </div>

        <div className="flex flex-col gap-4">
          {jobs.map((job, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold text-ink">{job.title}</h3>
                  <span
                    className={`${job.typeColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}
                  >
                    {job.type}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-ink-muted">
                  <span className="flex items-center gap-1">
                    <Building2 size={14} />
                    {job.company}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {job.location}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  className="p-2 rounded-full border border-border-light text-ink-muted hover:text-red-500 hover:border-red-500 transition-colors"
                  aria-label={`Favorite ${job.title}`}
                >
                  <Heart size={18} />
                </button>
                <a
                  href="#"
                  className="bg-primary text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors"
                >
                  Apply Job
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-2 mt-8">
          <button
            className="p-2 rounded-full border border-border-light hover:bg-white transition-colors"
            aria-label="Previous page"
          >
            <ChevronLeft size={18} />
          </button>
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              className={`w-10 h-10 rounded-full text-sm font-semibold transition-colors ${
                n === 1
                  ? 'bg-primary text-white'
                  : 'border border-border-light text-ink-muted hover:bg-white'
              }`}
            >
              {n}
            </button>
          ))}
          <button
            className="p-2 rounded-full border border-border-light hover:bg-white transition-colors"
            aria-label="Next page"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
