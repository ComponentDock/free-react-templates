import { ButtonLink } from '@free-react-templates/ui'
import { events } from '../data'

export function Events() {
  return (
    <section id="events" className="bg-section py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
        <div
          className="flex min-h-[400px] items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: "url('https://picsum.photos/seed/sanctum-events/800/600')",
          }}
        >
          <div className="text-right">
            <h2 className="text-3xl font-bold text-white">Our latest events</h2>
            <p className="mt-4 max-w-md text-white/80">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
            <ButtonLink
              href="#events"
              className="mt-6 inline-block rounded-[2px] bg-brand px-8 py-3.5 text-xs font-bold uppercase tracking-[1px] text-white transition-colors hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              View Events
            </ButtonLink>
          </div>
        </div>
        <div className="space-y-6">
          {events.map((e) => (
            <div key={e.title} className="flex gap-6">
              <div className="flex-shrink-0 text-center">
                <span className="block text-3xl font-bold text-brand">{e.day}</span>
                <span className="text-sm text-body">
                  {e.month} {e.year}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-ink">{e.title}</h3>
                <p className="mt-1 text-sm text-body">{e.time}</p>
                <img src={e.image} alt={e.title} className="mt-3 h-24 w-32 rounded object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
