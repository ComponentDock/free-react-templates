const entries = [
  { title: 'BSc Computer Science', date: '2012 — 2016', institution: 'State University' },
  { title: 'MSc Interaction Design', date: '2016 — 2018', institution: 'Tech Institute' },
]

export function Education() {
  return (
    <section data-testid="education" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-10 text-3xl font-bold text-maroon">Education</h2>
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
              <p className="text-sm font-medium text-maroon">{entry.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
