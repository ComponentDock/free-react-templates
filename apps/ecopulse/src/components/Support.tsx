import { Button } from '@free-react-templates/ui'

export function Support() {
  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
        {/* Image column */}
        <div className="relative">
          <img
            src="https://picsum.photos/seed/ecopulse-support/800/600"
            alt="Supporting environmental causes"
            className="h-full w-full rounded-lg object-cover"
          />
          {/* Floating counter badges */}
          <div className="absolute -bottom-6 -right-6 rounded-full bg-brand p-6 text-center text-white shadow-lg">
            <div className="text-2xl font-bold">950+</div>
            <div className="text-xs">
              Poaching cases
              <br />
              prevented
            </div>
          </div>
          <div className="absolute -left-6 -top-6 rounded-full bg-white p-6 text-center shadow-lg">
            <div className="text-2xl font-bold text-brand">230+</div>
            <div className="text-xs text-body">
              Volunteers
              <br />
              worldwide
            </div>
          </div>
        </div>

        {/* Text column */}
        <div>
          <span className="mb-3 text-sm font-semibold uppercase tracking-wider text-subtitle-green">
            Why Join Us
          </span>
          <h2 className="mb-6 text-3xl font-bold text-ink lg:text-4xl">Why You Should Join Us</h2>
          <p className="mb-8 leading-relaxed text-body">
            Joining our cause means becoming part of a global movement dedicated to environmental
            protection. Together, we can make a real difference in the fight against climate change
            and habitat destruction.
          </p>
          <Button
            variant="outline"
            className="rounded-full border-brand px-8 py-3 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
          >
            Join Us Now
          </Button>
        </div>
      </div>
    </section>
  )
}
