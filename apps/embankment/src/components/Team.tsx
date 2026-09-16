import { FacebookIcon, TwitterIcon, LinkedinIcon } from './BrandIcons'

const members = [
  { seed: 'embankment-t1', name: 'Ethel Davis', role: 'Managing Director (Sales)' },
  { seed: 'embankment-t2', name: 'Morgan Freeman', role: 'Senior Architect' },
  { seed: 'embankment-t3', name: 'Angela Simpson', role: 'Project Manager' },
  { seed: 'embankment-t4', name: 'David Cooper', role: 'Lead Engineer' },
]

export function Team() {
  return (
    <section className="py-[120px]">
      <div className="mx-auto max-w-[1170px] px-4">
        <div className="mb-12 text-center">
          <h2 className="font-oswald text-[32px] font-medium text-dark">Meet Our Expert Members</h2>
          <p className="mt-3 text-[15px] text-muted">
            Who are in extremely love with eco friendly system.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <div key={member.seed} className="group text-center">
              <div className="relative overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${member.seed}/400/500`}
                  alt={member.name}
                  className="block h-auto w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-accent/85 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <a
                    href="#"
                    aria-label={`${member.name} on Facebook`}
                    className="mx-2 text-white transition-colors hover:text-dark"
                  >
                    <FacebookIcon size={18} />
                  </a>
                  <a
                    href="#"
                    aria-label={`${member.name} on Twitter`}
                    className="mx-2 text-white transition-colors hover:text-dark"
                  >
                    <TwitterIcon size={18} />
                  </a>
                  <a
                    href="#"
                    aria-label={`${member.name} on LinkedIn`}
                    className="mx-2 text-white transition-colors hover:text-dark"
                  >
                    <LinkedinIcon size={18} />
                  </a>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-oswald text-lg font-medium text-dark">{member.name}</h4>
                <p className="text-sm text-muted">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
