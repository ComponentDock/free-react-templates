import { MEMBERS } from '../data'
import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'

/** Three figures: gradient initial disc, quote, answer count and role badge. */
export function Members() {
  return (
    <section id="members" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHead
          eyebrow="Member spotlight"
          title="The people who make it worth showing up"
          lede="Contribution here is measured in answered questions, not in follower counts."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {MEMBERS.map((member, index) => (
            <Reveal key={member.name} delay={index * 80}>
              <figure className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-accent-500 text-sm font-semibold text-white"
                  >
                    {member.initials}
                  </span>
                  <figcaption>
                    <div className="text-base font-semibold text-gray-900">{member.name}</div>
                    <div className="text-sm text-gray-500">{member.role}</div>
                  </figcaption>
                </div>

                <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-gray-600">
                  {member.quote}
                </blockquote>

                <div className="mt-5 flex items-center justify-between gap-3 border-t border-gray-100 pt-4 text-sm">
                  <span className="text-gray-600">
                    <span className="font-semibold tabular-nums text-gray-900">
                      {member.answers}
                    </span>{' '}
                    helpful answers
                  </span>
                  {member.badge ? (
                    <span className="rounded-full bg-accent-50 px-2.5 py-1 text-xs font-medium text-accent-700">
                      {member.badge}
                    </span>
                  ) : null}
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
