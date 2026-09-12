interface StatProps {
  value: number
  label: string
}

function Stat({ value, label }: StatProps) {
  return (
    <div className="text-center">
      <span className="block text-3xl font-bold text-primary-500">{value.toLocaleString()}</span>
      <span className="text-sm text-muted">{label}</span>
    </div>
  )
}

export function AboutCounter() {
  return (
    <section id="about" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-10 lg:flex-row">
          <div className="flex-1">
            <div
              className="h-[400px] rounded-lg bg-cover bg-center"
              style={{ backgroundImage: 'url(https://picsum.photos/seed/squadly-about/800/600)' }}
            />
          </div>
          <div className="flex-1 py-4 lg:pl-10">
            <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-primary-500">
              Welcome to Squadly
            </span>
            <h2 className="mb-4 text-3xl font-bold text-ink">
              Welcome to Squadly A Rental Heavy Equipment
            </h2>
            <p className="mb-8 text-muted">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean.
            </p>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              <Stat value={50} label="Years of Experience" />
              <Stat value={4500} label="Customers Served" />
              <Stat value={300} label="Number of Equipment" />
              <Stat value={300} label="Number of Staff" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
