import { ButtonLink } from '@free-react-templates/ui'

const stats = [
  { value: '250', label: 'Finished Projects' },
  { value: '1,200', label: 'Happy Customers' },
  { value: '9,500', label: 'Working Hours' },
  { value: '750', label: 'Cups of Coffee' },
] as const

export function CounterBand() {
  return (
    <section id="about" className="relative overflow-hidden bg-charcoal">
      <img
        src="https://picsum.photos/seed/bastion-5/1920/600"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl font-extrabold text-brand lg:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-gray-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <ButtonLink
            href="#portfolio"
            variant="outline"
            className="border-white/40 text-white hover:bg-white/10 hover:text-white"
          >
            Explore Further
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
