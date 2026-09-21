import { TEAM_MEMBERS, SOCIAL_LINKS, SOCIAL_PATHS } from '../data'

export function TeamGrid() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">Sweet Baker</h2>
          <a
            href="#team"
            className="mt-4 inline-block rounded-full border-2 border-border px-8 py-2 text-sm font-medium text-ink hover:border-brand hover:text-brand transition-colors"
          >
            Join Us
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM_MEMBERS.map((member, i) => (
            <div key={`${member.seed}-${i}`} className="group relative overflow-hidden rounded-lg">
              <img
                src={`https://picsum.photos/seed/${member.seed}/400/500`}
                alt={member.name}
                loading="lazy"
                className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="flex gap-3">
                  {SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white hover:bg-brand transition-colors"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path d={SOCIAL_PATHS[social.label as keyof typeof SOCIAL_PATHS]} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
              {/* Name/role */}
              <div className="absolute bottom-0 left-0 right-0 bg-white p-4 text-center">
                <h3 className="font-display text-lg font-semibold text-ink">{member.name}</h3>
                <p className="text-sm text-muted">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
