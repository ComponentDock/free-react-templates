import { TEAM_MEMBERS } from '../data'

/* Team (source: div.container.section#section-team — centered "Leadership"
   heading and a 3-column carousel of members, each with photo, name, role
   and a quote). */
export function Team() {
  return (
    <section id="team" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center font-display text-4xl font-bold text-ink">Leadership</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {TEAM_MEMBERS.map((member) => (
            <article key={member.name} className="text-center">
              <img
                src={member.image}
                alt={`Portrait of ${member.name}`}
                className="mx-auto h-40 w-40 rounded-full object-cover"
              />
              <h3 className="mt-5 font-display text-xl font-bold text-ink">{member.name}</h3>
              <p className="mt-1 text-sm font-medium uppercase tracking-[0.15em] text-brand">
                {member.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-smoke">{member.quote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
