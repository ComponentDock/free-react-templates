import { useState } from 'react'
import { MapPin, Briefcase, Clock } from 'lucide-react'

type JobType = 'Recent' | 'Full Time' | 'Part Time' | 'Intern'

export type Job = { title: string; location: string; field: string; deadline: string; type: string }

const tabs: JobType[] = ['Recent', 'Full Time', 'Part Time', 'Intern']

const badgeColors: Record<string, string> = {
  'Full Time': 'bg-blue text-white',
  'Part Time': 'bg-teal text-white',
  Intern: 'bg-green text-white',
  Recent: 'bg-brand text-white',
}

const defaultJobs: Record<JobType, Job> = {
  Recent: {
    title: 'Senior UX Designer',
    location: 'New York, NY',
    field: 'Design & Creative',
    deadline: 'Dec 31, 2026',
    type: 'Full Time',
  },
  'Full Time': {
    title: 'Frontend Developer',
    location: 'San Francisco, CA',
    field: 'Engineering',
    deadline: 'Jan 15, 2027',
    type: 'Full Time',
  },
  'Part Time': {
    title: 'Content Writer',
    location: 'Austin, TX',
    field: 'Marketing & Sales',
    deadline: 'Feb 1, 2027',
    type: 'Part Time',
  },
  Intern: {
    title: 'Marketing Intern',
    location: 'Chicago, IL',
    field: 'Marketing & Sales',
    deadline: 'Mar 1, 2027',
    type: 'Intern',
  },
}

interface JobsProps {
  initialJobs?: Record<JobType, Job>
}

export function Jobs({ initialJobs }: JobsProps) {
  const [activeTab, setActiveTab] = useState<JobType>('Recent')
  const jobs = initialJobs ?? defaultJobs
  const job = jobs[activeTab]

  return (
    <section id="jobs" className="bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            Browse Recent Jobs
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-mist">
            Explore the latest job openings and find the right opportunity for your career growth.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex justify-center gap-4" role="tablist" aria-label="Job type">
          {tabs.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-[3px] px-6 py-2 text-sm font-semibold uppercase transition-colors ${
                activeTab === tab ? 'bg-brand text-white' : 'bg-white text-mist hover:text-ink'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Job card */}
        <div
          role="tabpanel"
          className="mt-8 flex flex-col gap-6 overflow-hidden rounded-[3px] bg-white shadow-sm sm:flex-row"
        >
          <div className="w-full sm:w-1/3">
            <img
              src={`https://picsum.photos/seed/civicore-job-${activeTab.toLowerCase().replace(' ', '-')}/400/300`}
              alt={`${job.title} job listing`}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col justify-center p-6">
            <span
              className={`mb-3 inline-block w-fit self-start rounded px-3 py-1 text-xs font-semibold uppercase ${
                badgeColors[job.type] ?? 'bg-brand text-white'
              }`}
            >
              {job.type}
            </span>
            <h3 className="font-display text-xl font-bold text-ink">{job.title}</h3>
            <div className="mt-4 flex flex-col gap-2 text-sm text-mist">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> {job.location}
              </span>
              <span className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" /> {job.field}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" /> Deadline: {job.deadline}
              </span>
            </div>
            <button
              type="button"
              className="mt-6 w-fit rounded-[3px] bg-brand px-8 py-3 text-sm font-semibold uppercase text-white transition-colors hover:bg-brand-dark"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
