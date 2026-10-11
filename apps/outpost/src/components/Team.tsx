import { SectionTitle } from './SectionTitle'

const TEAM = [
  { seed: 'outpost-team-1', name: 'Randy Weaver', role: 'Senior Barrister at law' },
  { seed: 'outpost-team-2', name: 'Ethel Davis', role: 'Lead Mountain Guide' },
  { seed: 'outpost-team-3', name: 'Marvin McKinney', role: 'Desert Expedition Planner' },
  { seed: 'outpost-team-4', name: 'Jane Cooper', role: 'Coastal Route Specialist' },
] as const

/* Four trip leaders; the white name card waits just below the photo and
   slides up into view on hover. */
export function Team() {
  return (
    <section id="team" className="pt-[120px]">
      <div className="mx-auto max-w-[1140px] px-4">
        <SectionTitle
          eyebrow="We're Offering these Trip Packages"
          title="Intelligent Team Members"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member) => (
            <article
              key={member.seed}
              data-testid={`team-${member.seed}`}
              className="group relative overflow-hidden border border-hairline"
            >
              <img
                src={`https://picsum.photos/seed/${member.seed}/400/430`}
                alt={`${member.name} — ${member.role}`}
                loading="lazy"
                className="w-full object-cover"
              />
              <div className="absolute inset-x-[5%] bottom-[-120px] bg-white p-[20px] text-center transition-all duration-300 group-hover:bottom-0">
                <h4 className="font-display text-[18px] font-bold text-ink">{member.name}</h4>
                <p className="text-[13px]">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
