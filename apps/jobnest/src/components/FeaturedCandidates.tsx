const candidates = [
  { name: 'Alice Johnson', role: 'UX Designer', initials: 'AJ' },
  { name: 'Bob Smith', role: 'Frontend Developer', initials: 'BS' },
  { name: 'Clara Davis', role: 'Marketing Manager', initials: 'CD' },
  { name: 'David Wilson', role: 'Data Scientist', initials: 'DW' },
  { name: 'Emma Brown', role: 'Project Manager', initials: 'EB' },
  { name: 'Frank Miller', role: 'Backend Developer', initials: 'FM' },
]

export function FeaturedCandidates() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-10 text-center text-3xl font-bold text-text-primary">
          Featured Candidates
        </h2>
        <div className="flex gap-6 overflow-x-auto pb-4">
          {candidates.map((c) => (
            <div
              key={c.name}
              className="flex min-w-[180px] flex-col items-center gap-3 rounded bg-white p-6 text-center shadow-[0_5px_15px_rgba(0,0,0,0.08)]"
            >
              <div className="flex h-[120px] w-[120px] items-center justify-center rounded-full bg-gray-200 text-3xl font-bold text-gray-500">
                {c.initials}
              </div>
              <h3 className="font-semibold text-text-primary">{c.name}</h3>
              <p className="text-sm text-text-muted">{c.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
