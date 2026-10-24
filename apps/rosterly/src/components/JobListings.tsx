import { MapPin, Calendar } from 'lucide-react'
import { Badge } from '@free-react-templates/ui'

interface Job {
  id: number
  title: string
  company: string
  location: string
  tags: string[]
  date: string
  logo: string
}

const jobs: Job[] = [
  {
    id: 1,
    title: 'Product Designer',
    company: 'Spotify',
    location: 'New York, NY',
    tags: ['Design', 'Remote'],
    date: '3 hours ago',
    logo: 'https://picsum.photos/seed/job-logo-1/60/60',
  },
  {
    id: 2,
    title: 'Digital Marketing Director',
    company: 'Google',
    location: 'London, UK',
    tags: ['Marketing', 'Full Time'],
    date: '5 hours ago',
    logo: 'https://picsum.photos/seed/job-logo-2/60/60',
  },
  {
    id: 3,
    title: 'Back-end Engineer (Python)',
    company: 'Stripe',
    location: 'San Francisco, CA',
    tags: ['Engineering', 'Full Time'],
    date: '1 day ago',
    logo: 'https://picsum.photos/seed/job-logo-3/60/60',
  },
  {
    id: 4,
    title: 'Senior Art Director',
    company: 'Adobe',
    location: 'Tokyo, Japan',
    tags: ['Design', 'Senior'],
    date: '1 day ago',
    logo: 'https://picsum.photos/seed/job-logo-4/60/60',
  },
  {
    id: 5,
    title: 'Frontend Developer',
    company: 'Meta',
    location: 'Remote',
    tags: ['Engineering', 'Remote'],
    date: '2 days ago',
    logo: 'https://picsum.photos/seed/job-logo-5/60/60',
  },
  {
    id: 6,
    title: 'UX Researcher',
    company: 'Apple',
    location: 'Cupertino, CA',
    tags: ['Design', 'Full Time'],
    date: '3 days ago',
    logo: 'https://picsum.photos/seed/job-logo-6/60/60',
  },
]

function JobCard({ job }: { job: Job }) {
  return (
    <div className="flex items-center gap-4 p-5 border border-gray-100 rounded-lg hover:shadow-lg hover:border-lime-400 transition-all duration-200 group">
      <img
        src={job.logo}
        alt={`${job.company} logo`}
        className="w-14 h-14 rounded object-cover shrink-0"
      />
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-gray-900 group-hover:text-lime-400 transition-colors">
          {job.title}
        </h3>
        <p className="text-sm text-gray-500 mt-0.5">{job.company}</p>
      </div>
      <div className="hidden sm:flex items-center gap-2 text-sm text-gray-500 shrink-0">
        <MapPin size={14} />
        <span>{job.location}</span>
      </div>
      <div className="hidden md:flex items-center gap-2 shrink-0">
        {job.tags.map((tag) => (
          <Badge
            key={tag}
            variant="default"
            className="border border-lime-400 text-lime-500 text-xs bg-transparent"
          >
            {tag}
          </Badge>
        ))}
      </div>
      <div className="hidden lg:flex items-center gap-1 text-xs text-gray-400 shrink-0">
        <Calendar size={12} />
        <span>{job.date}</span>
      </div>
    </div>
  )
}

export function JobListings() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          43,167 <span className="text-lime-400">Job</span> Listed
        </h2>
        <div className="flex flex-col gap-4">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-block bg-lime-400 text-white px-8 py-3 rounded font-semibold hover:bg-lime-500 transition-colors"
          >
            View More Jobs
          </a>
        </div>
      </div>
    </section>
  )
}
