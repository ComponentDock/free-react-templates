import { useState } from 'react'
import { Briefcase, MapPin, User } from 'lucide-react'

const jobCategories = ['Full Time', 'Part Time', 'Freelance', 'Internship', 'Temporary']
const keywords = [
  'Designer',
  'Web Developer',
  'Digital Marketing',
  'PHP Developer',
  'Business',
  'Creative',
]

export function JobSearchBar() {
  const [tab, setTab] = useState<'job' | 'candidate'>('job')

  return (
    <section className="bg-brand-gray py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <div className="mb-6 flex justify-center gap-2">
            <button
              onClick={() => setTab('job')}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
                tab === 'job'
                  ? 'bg-brand text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              aria-selected={tab === 'job'}
              role="tab"
            >
              Find a Job
            </button>
            <button
              onClick={() => setTab('candidate')}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
                tab === 'candidate'
                  ? 'bg-brand text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              aria-selected={tab === 'candidate'}
              role="tab"
            >
              Find a Candidate
            </button>
          </div>

          <div role="tabpanel">
            {tab === 'job' ? (
              <div className="flex flex-col gap-4 md:flex-row">
                <div className="flex flex-1 items-center gap-2 rounded border bg-gray-50 px-4 py-3">
                  <Briefcase size={18} className="text-gray-400" />
                  <input
                    type="text"
                    placeholder="eg. Graphic, Web Developer"
                    className="w-full bg-transparent text-sm outline-none"
                  />
                </div>
                <div className="flex flex-1 items-center gap-2 rounded border bg-gray-50 px-4 py-3">
                  <select className="w-full bg-transparent text-sm text-gray-600 outline-none">
                    <option>Category</option>
                    {jobCategories.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-1 items-center gap-2 rounded border bg-gray-50 px-4 py-3">
                  <MapPin size={18} className="text-gray-400" />
                  <input
                    type="text"
                    placeholder="Location"
                    className="w-full bg-transparent text-sm outline-none"
                  />
                </div>
                <button className="rounded bg-brand px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-600">
                  Search
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-4 md:flex-row">
                <div className="flex flex-1 items-center gap-2 rounded border bg-gray-50 px-4 py-3">
                  <User size={18} className="text-gray-400" />
                  <input
                    type="text"
                    placeholder="eg. Adam Scott"
                    className="w-full bg-transparent text-sm outline-none"
                  />
                </div>
                <div className="flex flex-1 items-center gap-2 rounded border bg-gray-50 px-4 py-3">
                  <select className="w-full bg-transparent text-sm text-gray-600 outline-none">
                    <option>Category</option>
                    {jobCategories.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-1 items-center gap-2 rounded border bg-gray-50 px-4 py-3">
                  <MapPin size={18} className="text-gray-400" />
                  <input
                    type="text"
                    placeholder="Location"
                    className="w-full bg-transparent text-sm outline-none"
                  />
                </div>
                <button className="rounded bg-brand px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-600">
                  Search
                </button>
              </div>
            )}
          </div>

          <div className="mt-4 text-center text-sm text-gray-500">
            <span className="mr-2 font-semibold">Browse Top Keywords:</span>
            {keywords.map((kw) => (
              <a key={kw} href="#" className="mr-2 text-brand transition-colors hover:underline">
                {kw}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
