import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { teamMembers } from '../data'
import { socialIcons } from './SocialIcons'

const PER_VIEW = 4

/** Team carousel: member cards (photo with hover social overlay, name, role)
 *  and owl-style prev/next arrows. */
export function Team() {
  const [page, setPage] = useState(0)
  const pages = Math.max(1, teamMembers.length - PER_VIEW + 1)

  const prev = () => setPage((p) => Math.max(0, p - 1))
  const next = () => setPage((p) => Math.min(pages - 1, p + 1))

  return (
    <section id="team" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <div className="mb-14 flex items-end justify-between">
          <h2 className="font-display text-4xl font-semibold uppercase text-ink">
            <span className="text-brand">/ </span>Our Team
          </h2>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous team members"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-muted text-body transition-colors hover:border-brand hover:text-brand"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next team members"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-muted text-body transition-colors hover:border-brand hover:text-brand"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.slice(page, page + PER_VIEW).map((member) => (
            <article key={member.name} className="group text-center">
              <div className="relative mb-5 overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/stalwart-team-${member.name.split(' ')[0]?.toLowerCase()}/400/440`}
                  alt={member.name}
                  className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-5 flex translate-y-6 justify-center gap-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {socialIcons.map(({ label, Icon }) => (
                    <a
                      key={label}
                      href="#team"
                      aria-label={`${member.name} on ${label}`}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white transition-transform hover:rotate-180"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
              <h3 className="font-display text-xl font-medium text-team-name transition-colors group-hover:text-brand">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-body">{member.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
