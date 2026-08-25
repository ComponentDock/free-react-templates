import { ArrowRight } from 'lucide-react'

const areas = [
  'Asset Searches',
  'Background Investigations',
  'Business Due Diligence',
  'Civil Investigations',
  'Criminal Defense Investigations',
  'Asset Searches',
  'Background Investigations',
  'Business Due Diligence',
  'Civil Investigations',
  'Criminal Defense Investigations',
  'Background Investigations',
  'Business Due Diligence',
]

export function PracticeArea() {
  return (
    <section id="practice-area" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h3 className="mb-12 text-3xl font-bold text-charcoal">Practice Area</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, i) => (
            <a
              key={`${area}-${i}`}
              href="#contact"
              className="group flex items-center gap-4 rounded-lg border border-gray-100 p-5 transition-all hover:border-brand hover:shadow-md"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-sm font-medium text-charcoal">{area}</span>
              <ArrowRight
                size={16}
                className="ml-auto text-gray-300 transition-colors group-hover:text-brand"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
