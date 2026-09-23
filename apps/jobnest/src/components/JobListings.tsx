import { MapPin, Clock, Heart } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { Button } from '@free-react-templates/ui'

const jobs = [
  {
    id: 1,
    title: 'Senior UX Designer',
    company: 'Google',
    initial: 'G',
    color: 'bg-blue-100 text-blue-600',
    location: 'San Francisco, CA',
    type: 'Full Time',
    deadline: 'Dec 15, 2026',
  },
  {
    id: 2,
    title: 'Marketing Manager',
    company: 'Apple',
    initial: 'A',
    color: 'bg-gray-100 text-gray-600',
    location: 'Cupertino, CA',
    type: 'Full Time',
    deadline: 'Dec 20, 2026',
  },
  {
    id: 3,
    title: 'Frontend Developer',
    company: 'Meta',
    initial: 'M',
    color: 'bg-indigo-100 text-indigo-600',
    location: 'Remote',
    type: 'Full Time',
    deadline: 'Dec 18, 2026',
  },
  {
    id: 4,
    title: 'Data Analyst',
    company: 'Amazon',
    initial: 'A',
    color: 'bg-orange-100 text-orange-600',
    location: 'Seattle, WA',
    type: 'Part Time',
    deadline: 'Dec 22, 2026',
  },
  {
    id: 5,
    title: 'Project Manager',
    company: 'Microsoft',
    initial: 'M',
    color: 'bg-green-100 text-green-600',
    location: 'Redmond, WA',
    type: 'Contract',
    deadline: 'Dec 25, 2026',
  },
]

export function JobListings() {
  return (
    <section className="bg-bg-light py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-text-primary">Job Listing</h2>
          <Button
            variant="outline"
            size="sm"
            className="border-brand text-brand hover:bg-brand hover:text-white"
          >
            Browse More Job
          </Button>
        </div>

        <div className="space-y-4">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="flex flex-col gap-4 rounded bg-white p-6 shadow-[0_5px_15px_rgba(0,0,0,0.08)] sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-4">
                {/* Company Icon */}
                <div
                  className={cn(
                    'flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold',
                    job.color,
                  )}
                >
                  {job.initial}
                </div>

                {/* Job Info */}
                <div>
                  <h3 className="font-semibold text-text-primary">{job.title}</h3>
                  <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-text-muted">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {job.type}
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-text-muted">Deadline: {job.deadline}</span>
                <button
                  aria-label={`Save ${job.title}`}
                  className="text-text-muted hover:text-red-500"
                >
                  <Heart className="h-5 w-5" />
                </button>
                <Button
                  variant="primary"
                  size="sm"
                  className="bg-brand text-white hover:bg-brand-hover"
                >
                  Apply Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
