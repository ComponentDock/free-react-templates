import { ExternalLink } from 'lucide-react'

const entries = [
  { title: 'User Experience Designer', date: 'Jan 18 — Feb 20', company: 'DesignCo', url: '#' },
  { title: 'Product Designer', date: 'Mar 20 — Dec 22', company: 'InnoLab', url: '#' },
  { title: 'Senior UX Designer', date: 'Jan 23 — Present', company: 'CraftStudio', url: '#' },
]

export function Experience() {
  return (
    <section data-testid="experience" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-10 text-3xl font-bold text-maroon">Experience</h2>
        <div className="space-y-6">
          {entries.map((entry) => (
            <div
              key={entry.title}
              className="flex flex-col gap-1 border-b border-gray-100 pb-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="font-semibold text-black">{entry.title}</p>
                <p className="text-sm text-secondary">{entry.date}</p>
              </div>
              <a
                href={entry.url}
                className="flex items-center gap-1 text-sm font-medium text-maroon hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                {entry.company} <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
