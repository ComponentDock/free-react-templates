const speakers = [
  { name: 'Will Peters', role: 'Business Consultant at Google', seed: 'huddle-sp-1' },
  { name: 'Abigail McMillan', role: 'Product Lead at Meta', seed: 'huddle-sp-2' },
  { name: 'Jean Keenan', role: 'Strategy Director at Medium', seed: 'huddle-sp-3' },
  { name: 'Justin Clark', role: 'Engineering Manager at Slack', seed: 'huddle-sp-4' },
  { name: 'Bryan Forster', role: 'VP of Innovation at Automattic', seed: 'huddle-sp-5' },
  { name: 'Matt Nelson', role: 'Head of Product at Notion', seed: 'huddle-sp-6' },
]

export interface SpeakersProps {
  className?: string
}

export function Speakers({ className }: SpeakersProps) {
  return (
    <section id="speakers" className={`py-16 md:py-24 ${className ?? ''}`}>
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold uppercase tracking-wider text-gray-900 md:text-4xl">
          Speakers
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map((s) => (
            <div key={s.name} className="text-left">
              <img
                src={`https://picsum.photos/seed/${s.seed}/400/400`}
                alt={s.name}
                className="mb-4 h-64 w-full rounded-lg object-cover"
                loading="lazy"
              />
              <h3 className="text-lg font-bold text-gray-900">{s.name}</h3>
              <p className="text-sm text-body">{s.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
