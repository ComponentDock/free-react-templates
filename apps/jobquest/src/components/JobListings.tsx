import { Badge } from '@free-react-templates/ui'
import { MapPin, DollarSign, ChevronLeft, ChevronRight } from 'lucide-react'

interface Job {
  id: number
  type: string
  title: string
  publisher: string
  category: string
  location: string
  country: string
  image: string
}

const jobs: Job[] = [
  {
    id: 1,
    type: 'Freelancer',
    title: 'Dropbox Product Designer',
    publisher: 'John Stewart',
    category: 'Design',
    location: 'Melbourne',
    country: 'Australia',
    image: 'https://picsum.photos/seed/job1/80/80',
  },
  {
    id: 2,
    type: 'Full-time',
    title: 'Creative Director in Intercom',
    publisher: 'John Stewart',
    category: 'Design',
    location: 'London',
    country: 'United Kingdom',
    image: 'https://picsum.photos/seed/job2/80/80',
  },
  {
    id: 3,
    type: 'Part-time',
    title: 'FullStack Developer in Shopify',
    publisher: 'John Stewart',
    category: 'Design',
    location: 'London',
    country: 'United Kingdom',
    image: 'https://picsum.photos/seed/job3/80/80',
  },
  {
    id: 4,
    type: 'Full-time',
    title: 'Product Manager in Stripe',
    publisher: 'Jane Doe',
    category: 'Marketing',
    location: 'San Francisco',
    country: 'United States',
    image: 'https://picsum.photos/seed/job4/80/80',
  },
  {
    id: 5,
    type: 'Freelancer',
    title: 'UX Researcher in Google',
    publisher: 'Jane Doe',
    category: 'Design',
    location: 'Mountain View',
    country: 'United States',
    image: 'https://picsum.photos/seed/job5/80/80',
  },
  {
    id: 6,
    type: 'Part-time',
    title: 'Data Scientist in Netflix',
    publisher: 'John Stewart',
    category: 'Technology',
    location: 'Los Angeles',
    country: 'United States',
    image: 'https://picsum.photos/seed/job6/80/80',
  },
]

const badgeVariant: Record<string, 'default' | 'success' | 'warning'> = {
  Freelancer: 'warning',
  'Full-time': 'success',
  'Part-time': 'default',
}

function JobCard({ job }: { job: Job }) {
  const variant = badgeVariant[job.type]
  return (
    <div className="flex items-center gap-4 border-b border-border py-4">
      <img
        src={job.image}
        alt={job.title}
        className="h-16 w-16 rounded-full object-cover"
        loading="lazy"
      />
      <div className="flex-1">
        <div className="mb-1 flex items-center gap-2">
          <Badge variant={variant}>{job.type}</Badge>
        </div>
        <h3 className="text-base font-bold text-text-primary">{job.title}</h3>
        <p className="text-sm text-text-muted">
          Publisher: {job.publisher} &middot; In: {job.category}
        </p>
      </div>
      <div className="hidden text-right text-sm text-text-muted md:block">
        <div className="flex items-center gap-1 justify-end">
          <MapPin size={14} />
          <span>{job.location}</span>
        </div>
        <div>{job.country}</div>
      </div>
      <div className="hidden items-center gap-1 text-sm font-semibold text-text-primary md:flex">
        <DollarSign size={14} />
        <span>45k-65k</span>
      </div>
    </div>
  )
}

export function JobListings() {
  return (
    <section id="job-listings" className="py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="mb-8 text-2xl font-bold text-text-primary">109,234 Job Listed</h2>

        <div>
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex items-center justify-end gap-2">
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded border border-border text-text-muted hover:bg-bg-light"
            aria-label="Previous page"
          >
            <ChevronLeft size={16} />
          </button>
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              type="button"
              className={`flex h-9 w-9 items-center justify-center rounded border text-sm font-semibold ${
                page === 1
                  ? 'border-brand bg-brand text-white'
                  : 'border-border text-text-secondary hover:bg-bg-light'
              }`}
            >
              {page}
            </button>
          ))}
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded border border-border text-text-muted hover:bg-bg-light"
            aria-label="Next page"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  )
}
