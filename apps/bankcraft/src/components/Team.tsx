const members = [
  { name: 'James Wilson', role: 'CEO & Founder', seed: 'bankcraft-team-1' },
  { name: 'Sarah Johnson', role: 'CFO', seed: 'bankcraft-team-2' },
  { name: 'Michael Chen', role: 'Head of Operations', seed: 'bankcraft-team-3' },
  { name: 'Emily Davis', role: 'Marketing Director', seed: 'bankcraft-team-4' },
  { name: 'Robert Brown', role: 'Lead Consultant', seed: 'bankcraft-team-5' },
  { name: 'Lisa Anderson', role: 'Risk Manager', seed: 'bankcraft-team-6' },
  { name: 'David Martinez', role: 'IT Director', seed: 'bankcraft-team-7' },
  { name: 'Jennifer Taylor', role: 'Client Relations', seed: 'bankcraft-team-8' },
]

export function Team() {
  return (
    <section className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-ink">Meet Team</h2>
          <p className="mx-auto max-w-xl text-gray-500">
            Our experienced team of professionals is dedicated to helping you achieve financial
            success.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((m) => (
            <div key={m.name} className="group text-center">
              <div className="mb-4 overflow-hidden rounded-xl">
                <img
                  src={`https://picsum.photos/seed/${m.seed}/300/300`}
                  alt={m.name}
                  className="h-64 w-full object-cover transition group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-bold text-ink">{m.name}</h3>
              <p className="text-sm text-brand">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
