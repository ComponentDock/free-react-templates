const members = [
  { name: 'Maya Chen', role: 'Creative Director', seed: 'violet-team-1' },
  { name: 'Jonas Weber', role: 'Lead Developer', seed: 'violet-team-2' },
  { name: 'Ava Patel', role: 'Marketing Lead', seed: 'violet-team-3' },
] as const

export function Team() {
  return (
    <section id="team" aria-label="Team" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-ink dark:text-gray-100">
            We build a strong team of great people
          </h2>
          <p className="mt-4 text-smoke dark:text-gray-400">
            Aenean pellentesque elit vitae ex mauris, ornare eget pretium.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <div
              key={member.name}
              className="overflow-hidden rounded-2xl border border-primary-100 bg-gray-50 text-center transition-shadow hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
            >
              <img
                src={`https://picsum.photos/seed/${member.seed}/400/300`}
                alt={`${member.name} — ${member.role}`}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-ink dark:text-gray-100">
                  {member.name}
                </h3>
                <div className="mt-1 text-sm text-primary-400">{member.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
