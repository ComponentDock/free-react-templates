import { ButtonLink } from '@free-react-templates/ui'

const stats = [
  { value: '90%', label: 'Energy' },
  { value: '75%', label: 'Power' },
  { value: '97%', label: 'Resource' },
]

export function Stats() {
  return (
    <section
      className="relative flex flex-col items-start bg-cover bg-center bg-no-repeat py-16 lg:flex-row"
      style={{
        backgroundImage:
          "linear-gradient(rgba(2,28,60,0.92), rgba(2,28,60,0.92)), url('https://picsum.photos/seed/credix-stats/1600/900')",
      }}
    >
      {/* Left: decorative circle */}
      <div className="hidden w-1/3 lg:block" />

      {/* Right: content */}
      <div className="w-full px-4 lg:w-2/3 lg:px-12">
        <div className="mb-4 h-1.5 w-6 rounded bg-gold-400" />
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-gray-400">
          Bold design and beyond
        </p>
        <h2 className="font-heading text-3xl font-bold text-white">
          Helping small businesses like yours
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-300">
          Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci,
          lobortis egestas sem. Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque
          sit amet sodales.
        </p>

        {/* Skill circles */}
        <div className="mt-10 flex flex-wrap gap-10">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-4 border-gold-400">
                <span className="font-heading text-xl font-bold text-white">{s.value}</span>
              </div>
              <span className="mt-2 text-sm text-gray-300">{s.label}</span>
            </div>
          ))}
        </div>

        <ButtonLink
          href="#services"
          className="mt-10 inline-block rounded bg-gold-400 px-8 py-3 text-sm font-bold text-navy-700 shadow-lg transition hover:bg-gold-500"
        >
          Read More
        </ButtonLink>
      </div>
    </section>
  )
}
