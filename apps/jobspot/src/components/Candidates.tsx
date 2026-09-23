const candidates = [
  {
    name: 'James Wilson',
    location: 'New York, USA',
    bio: 'Full-stack developer with 5 years of experience in React and Node.js.',
    photo: 'https://picsum.photos/seed/jobspot-cand-1/200/200',
  },
  {
    name: 'Sarah Johnson',
    location: 'London, UK',
    bio: 'UI/UX designer passionate about creating intuitive digital experiences.',
    photo: 'https://picsum.photos/seed/jobspot-cand-2/200/200',
  },
  {
    name: 'Mike Chen',
    location: 'San Francisco, USA',
    bio: 'Data scientist with expertise in machine learning and AI applications.',
    photo: 'https://picsum.photos/seed/jobspot-cand-3/200/200',
  },
]

export function Candidates() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-semibold uppercase tracking-widest text-brand">
            Candidates
          </span>
          <h2 className="text-3xl font-bold text-gray-900">Latest Candidates</h2>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
          {candidates.map((c) => (
            <div
              key={c.name}
              className="min-w-[250px] flex-shrink-0 snap-center rounded-lg border bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <img
                src={c.photo}
                alt={c.name}
                className="mx-auto mb-4 h-20 w-20 rounded-full object-cover"
              />
              <h3 className="text-lg font-bold text-gray-900">{c.name}</h3>
              <p className="mb-2 text-xs text-gray-400">{c.location}</p>
              <p className="text-sm text-gray-500">{c.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
