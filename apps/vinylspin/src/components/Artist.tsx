import { Play } from 'lucide-react'

export function Artist() {
  return (
    <section className="bg-void py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[300px_1fr]">
          {/* Artist image */}
          <div className="overflow-hidden rounded">
            <img
              src="https://picsum.photos/seed/vinylspin-artist/400/500"
              alt="Artist portrait"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Artist content */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-accent-400">
                Events
              </p>
              <h2 className="text-4xl font-bold text-ink">The Artist</h2>
            </div>

            <div className="flex flex-col gap-4 text-subtle">
              <p>
                In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum
                eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero
                pretium interdum. Nullam volutpat dui sem, ac congue purus luctus nec. Curabitur
                luctus luctus erat, sit amet facilisis quam congue quis.
              </p>
              <p>
                Integer sed facilisis eros. In iaculis rhoncus velit in malesuada. In hac habitasse
                platea dictumst. Fusce erat ex, consectetur sit amet ornare suscipit, porta et erat.
                Donec nec nisi in nibh commodo laoreet.
              </p>
            </div>

            {/* Signature placeholder */}
            <p className="font-script text-3xl text-primary-400 italic">Maria Smith</p>

            {/* Single player */}
            <div className="flex flex-col gap-3 rounded bg-surface/50 p-4">
              <div className="flex items-center gap-3">
                <button
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-400 text-ink transition-colors hover:bg-primary-500"
                  aria-label="Play"
                >
                  <Play size={18} fill="currentColor" />
                </button>
                <div className="flex-1">
                  <div className="h-1 rounded-full bg-muted/30">
                    <div className="h-1 w-1/4 rounded-full bg-primary-400" />
                  </div>
                </div>
                <span className="text-xs text-muted">0:45 / 3:20</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
