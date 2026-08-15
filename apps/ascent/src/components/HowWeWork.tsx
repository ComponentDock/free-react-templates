import { Play } from 'lucide-react'

export function HowWeWork() {
  return (
    <section id="how" aria-label="How we work" className="bg-[#f9f9ff] py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="max-w-xl">
          <span className="text-sm font-medium uppercase tracking-wide text-brand">Process</span>
          <h2 className="mt-3 font-display text-4xl font-normal text-ink">How we work</h2>
          <p className="mt-6 text-ink">
            &ldquo;Function information without cross action media value.&rdquo;
          </p>
          <p className="mt-4 text-muted">
            Efficiently unleash cross-media tour function information without cross action media
            value. Quickly maximize timely deliverables for real-time schemas.
          </p>
          <div className="mt-10 flex items-center gap-5">
            <a
              href="#how"
              aria-label="Watch Video"
              className="flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand-dark"
            >
              <Play className="ml-1 h-7 w-7" aria-hidden="true" />
            </a>
            <span className="text-base text-ink">Watch Video</span>
          </div>
        </div>
      </div>
    </section>
  )
}
