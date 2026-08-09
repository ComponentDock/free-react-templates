import { ButtonLink } from '@free-react-templates/ui'

const specs = [
  { label: 'Doors', value: '4' },
  { label: 'Seats', value: '6' },
  { label: 'Luggage', value: '2 Suitcase/2 Bags' },
  { label: 'Transmission', value: 'Automatic' },
  { label: 'Minimum age', value: '21' },
] as const

export function Hero() {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/drively-hero/1920/900')" }}
    >
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="w-full max-w-md overflow-hidden rounded-xl bg-white shadow-2xl">
          <div className="h-2 bg-brand" aria-hidden="true" />
          <div className="p-6 sm:p-8">
            <h2 className="font-display text-2xl font-black text-ink sm:text-3xl">
              Range Rover S7
            </h2>
            <ul className="mt-5 space-y-3">
              {specs.map((spec) => (
                <li key={spec.label} className="flex items-center justify-between gap-4 text-sm">
                  <span className="text-mist">{spec.label}</span>
                  <span className="font-bold text-ink">{spec.value}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center justify-between gap-4 rounded-lg bg-paper p-3">
              <span className="text-lg font-black text-ink">
                $150<span className="text-sm font-semibold text-mist">/day</span>
              </span>
              <ButtonLink href="#cars">Rent Now</ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
