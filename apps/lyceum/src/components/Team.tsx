import { teamHeading, teamLabel, teamMembers, teamParagraph, teamSocials } from '../data'
import { BrandIcons } from './BrandIcons'

export function Team() {
  return (
    <section aria-label={teamLabel} className="bg-light py-[120px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mx-auto mb-[75px] max-w-[680px] text-center">
          <h2 className="mb-3 font-heading text-4xl text-ink">{teamHeading}</h2>
          <p className="text-sm leading-6 text-muted">{teamParagraph}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div key={member.name} className="group text-center">
              <div className="relative overflow-hidden rounded-full">
                <img
                  src={`https://picsum.photos/seed/${member.seed}/400/400`}
                  alt={member.name}
                  className="aspect-square w-full rounded-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center gap-5 rounded-full bg-white/65 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <BrandIcons
                    names={teamSocials}
                    className="text-muted hover:text-brand"
                    iconClassName="h-[14px] w-[14px]"
                  />
                </div>
              </div>
              <h3 className="mt-[30px] mb-[5px] font-heading text-lg font-bold text-ink transition-colors group-hover:text-brand">
                {member.name}
              </h3>
              <p className="text-sm text-muted">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
