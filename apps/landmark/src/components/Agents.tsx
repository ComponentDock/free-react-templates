import { useState } from 'react'
import { ArrowLeft, ArrowRight, Globe } from 'lucide-react'
import { AGENTS } from '../data'
import { FacebookIcon, TwitterIcon } from './BrandIcons'

const VISIBLE = 3

export function Agents() {
  const [offset, setOffset] = useState(0)
  const maxOffset = Math.max(0, AGENTS.length - VISIBLE)

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-4xl font-medium text-ink">Our Agents</h2>
          <p className="mt-3 text-lg font-light text-muted">
            Meet the people who will guide you through every step.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${offset * (100 / VISIBLE)}%)` }}
            >
              {AGENTS.map((agent) => (
                <article key={agent.name} className="w-1/3 shrink-0 px-3 text-center">
                  <div className="group relative overflow-hidden">
                    <img
                      src={agent.image}
                      alt=""
                      loading="lazy"
                      className="h-64 w-full object-cover"
                    />
                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 opacity-100 transition-opacity">
                      <a
                        href="#"
                        aria-label={`${agent.name} on Facebook`}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink transition-colors hover:bg-brand hover:text-white"
                      >
                        <FacebookIcon className="h-4 w-4" />
                      </a>
                      <a
                        href="#"
                        aria-label={`${agent.name} on Twitter`}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink transition-colors hover:bg-brand hover:text-white"
                      >
                        <TwitterIcon className="h-4 w-4" />
                      </a>
                      <a
                        href="#"
                        aria-label={`${agent.name} website`}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink transition-colors hover:bg-brand hover:text-white"
                      >
                        <Globe className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                  <h3 className="mt-5 text-2xl font-medium text-ink">{agent.name}</h3>
                  <p className="mt-1 text-base font-light text-muted">{agent.role}</p>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label="Previous agents"
            disabled={offset === 0}
            onClick={() => setOffset((current) => Math.max(0, current - 1))}
            className="absolute -left-5 top-1/2 z-10 -translate-y-1/2 rounded-full border border-line bg-white p-3 text-ink transition-colors hover:bg-brand hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next agents"
            disabled={offset >= maxOffset}
            onClick={() => setOffset((current) => Math.min(maxOffset, current + 1))}
            className="absolute -right-5 top-1/2 z-10 -translate-y-1/2 rounded-full border border-line bg-white p-3 text-ink transition-colors hover:bg-brand hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
