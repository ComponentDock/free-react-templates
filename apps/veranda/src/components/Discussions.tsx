import { Check } from 'lucide-react'
import { DISCUSSIONS } from '../data'
import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'

/**
 * Five thread rows inside one bordered container. The vote column is decoration
 * (the count is repeated in the row's accessible name), and each row's title
 * link stretches over the whole row with `after:absolute after:inset-0`.
 */
export function Discussions() {
  return (
    <section id="discussions" className="scroll-mt-24 bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            align="left"
            tone="accent"
            eyebrow="Live now"
            title="What the community is working through today"
            lede="Public to read, every thread, no login. Five of the ones people are answering right now."
          />
          <a href="#pricing" className="btn btn-secondary mb-1">
            See all discussions
          </a>
        </div>

        <Reveal className="mt-10">
          <ul className="divide-y divide-gray-100 overflow-hidden rounded-2xl border border-gray-200 bg-white">
            {DISCUSSIONS.map((thread) => (
              <li key={thread.title} className="relative flex gap-4 p-5 sm:p-6">
                <div className="flex flex-col items-center gap-1 pt-1" aria-hidden="true">
                  <span className="h-0 w-0 border-x-[5px] border-b-[7px] border-x-transparent border-b-gray-400" />
                  <span className="text-sm font-semibold tabular-nums text-gray-700">
                    {thread.votes}
                  </span>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-md bg-primary-50 px-2 py-0.5 text-xs font-medium text-primary-700">
                      {thread.channel}
                    </span>
                    {thread.answered ? (
                      <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700">
                        <Check aria-hidden="true" className="h-3 w-3" />
                        Answered
                      </span>
                    ) : null}
                  </div>

                  <h3 className="mt-2 text-base leading-snug font-semibold text-gray-900">
                    <a
                      href="#discussions"
                      aria-label={`${thread.title} — ${thread.votes} votes, ${thread.replies}`}
                      className="after:absolute after:inset-0 hover:text-primary-600"
                    >
                      {thread.title}
                    </a>
                  </h3>

                  <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500">
                    <span className="inline-flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-[10px] font-semibold text-gray-700">
                        {thread.initials}
                      </span>
                      {thread.author}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{thread.replies}</span>
                    <span aria-hidden="true">·</span>
                    <time>{thread.when}</time>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
