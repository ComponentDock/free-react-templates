import { Calendar, MapPin } from 'lucide-react'

export function EventBanner() {
  return (
    <section className="bg-paper py-8">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-6 rounded bg-white shadow-sm lg:flex-row">
          <div className="flex shrink-0 flex-col items-center justify-center bg-brand px-6 py-4 text-white">
            <span className="text-3xl font-bold leading-none">18</span>
            <span className="mt-1 text-sm uppercase">mar</span>
          </div>
          <div className="flex-1 px-4 py-4">
            <p className="font-nav text-sm text-mist">
              UPCOMING EVENT:{' '}
              <a href="#" className="font-semibold text-brand hover:text-brand-dark">
                Exploring the Christian Faith
              </a>
            </p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-body sm:flex-row sm:gap-6">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-brand" aria-hidden="true" />
                08:00 AM - 11:00 AM
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand" aria-hidden="true" />
                1195 Lobortis Rd, New Orleans, New Hampshire
              </span>
            </div>
          </div>
          <div className="flex gap-4 px-6 py-4">
            {[
              { value: '00', label: 'day' },
              { value: '00', label: 'hrs' },
              { value: '00', label: 'min' },
              { value: '00', label: 'sec' },
            ].map((unit) => (
              <div key={unit.label} className="text-center">
                <div className="text-2xl font-bold text-brand">{unit.value}</div>
                <div className="text-xs text-mist">{unit.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
