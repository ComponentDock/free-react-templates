const team = [
  {
    name: 'Robert Williams',
    role: 'Lead Designer',
    bio: 'Eiusmod tempor incididunt ut dolore magna labore eiusmod. Lorem ipsum dolor sit amet consectetur.',
    seed: 'vertex-t1',
  },
  {
    name: 'John Doe',
    role: 'SEO Master',
    bio: 'Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    seed: 'vertex-t2',
  },
  {
    name: 'Ann Peterson',
    role: 'PSD Guru',
    bio: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
    seed: 'vertex-t3',
  },
]

export function Crafters() {
  return (
    <section id="crafters" className="bg-white py-20">
      <div className="mx-auto max-w-[1170px] px-6">
        <div className="mb-12 flex items-end gap-4">
          <span className="font-display text-6xl font-bold text-[#32DB8A] opacity-40">03</span>
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-ink">
            Crafters
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <div key={m.name} className="text-center">
              <img
                src={`https://picsum.photos/seed/${m.seed}/300/300`}
                alt={m.name}
                className="mx-auto mb-4 h-40 w-40 rounded-full object-cover"
                loading="lazy"
              />
              <h3 className="font-display text-lg font-bold text-ink">{m.name}</h3>
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#32DB8A]">
                {m.role}
              </p>
              <p className="mx-auto max-w-xs text-sm leading-relaxed text-mist">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
