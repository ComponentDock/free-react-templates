import { BrandIcon } from './BrandIcon'

const members = [
  { name: 'Alex Morgan', role: 'CEO & Founder', seed: 'bytecraft-team-1' },
  { name: 'Sarah Chen', role: 'Lead Designer', seed: 'bytecraft-team-2' },
  { name: 'Marcus Reid', role: 'Developer', seed: 'bytecraft-team-3' },
  { name: 'Elena Voss', role: 'Marketing Head', seed: 'bytecraft-team-4' },
]

export function Team() {
  return (
    <section id="team" className="bg-gray-bg py-20">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="mb-12 text-3xl font-bold text-dark">Creative People</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((m) => (
            <div key={m.name} className="text-center">
              <img
                src={`https://picsum.photos/seed/${m.seed}/200/200`}
                alt={m.name}
                className="mx-auto mb-4 h-28 w-28 rounded-full object-cover"
                loading="lazy"
              />
              <h3 className="text-sm font-bold uppercase tracking-wide text-dark">{m.name}</h3>
              <p className="mb-3 text-xs text-text-muted">{m.role}</p>
              <div className="flex justify-center gap-3">
                <a
                  href="#"
                  aria-label={`${m.name} on Facebook`}
                  className="text-gray-400 transition hover:text-brand"
                >
                  <BrandIcon name="facebook" />
                </a>
                <a
                  href="#"
                  aria-label={`${m.name} on Twitter`}
                  className="text-gray-400 transition hover:text-brand"
                >
                  <BrandIcon name="twitter" />
                </a>
                <a
                  href="#"
                  aria-label={`${m.name} on LinkedIn`}
                  className="text-gray-400 transition hover:text-brand"
                >
                  <BrandIcon name="linkedin" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
