import { MapPin, DollarSign, Building2 } from 'lucide-react'
const jobs = [
  {
    title: 'Frontend Development',
    type: 'Part Time',
    company: 'Tech Solutions Inc',
    location: 'San Francisco, CA',
    salary: '$80k - $120k',
  },
  {
    title: 'Full Stack Developer',
    type: 'Full Time',
    company: 'Digital Wave Co',
    location: 'New York, NY',
    salary: '$100k - $150k',
  },
  {
    title: 'Open Source Interactive Developer',
    type: 'Freelance',
    company: 'OpenDev Foundation',
    location: 'Remote',
    salary: '$90k - $130k',
  },
]

const agencies = [
  { name: 'Google Company', positions: 23 },
  { name: 'Facebook Company', positions: 18 },
  { name: 'IT Programming INC', positions: 31 },
]

export function HotJobs() {
  return (
    <section id="candidates" className="bg-light-bg py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row">
          {/* Job listings */}
          <div className="flex-1">
            <h2 className="mb-8 text-3xl font-extrabold text-ink">Hot Jobs</h2>
            <div className="space-y-4">
              {jobs.map((job) => (
                <div
                  key={job.title}
                  className="rounded-lg bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-bold text-ink">{job.title}</h3>
                    <span className="rounded bg-primary-100 px-2 py-0.5 text-xs font-semibold text-primary-600">
                      {job.type}
                    </span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-4 text-sm text-smoke">
                    <span className="flex items-center gap-1">
                      <Building2 className="h-4 w-4" />
                      {job.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      {job.salary}
                    </span>
                  </div>
                  <a
                    href="#"
                    className="mt-3 inline-block text-sm font-semibold text-primary-400 hover:text-primary-500"
                  >
                    Apply Job
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-80">
            <h2 className="mb-8 text-3xl font-extrabold text-ink">Top Recruitments</h2>
            <div className="space-y-4">
              {agencies.map((agency) => (
                <div
                  key={agency.name}
                  className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm"
                >
                  <img
                    src={`https://picsum.photos/seed/${agency.name.toLowerCase().replace(/\s+/g, '-')}/60/60`}
                    alt={agency.name}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-ink">{agency.name}</h4>
                    <p className="text-sm text-smoke">{agency.positions} open positions</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
