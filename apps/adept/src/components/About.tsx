const stats = [
  { number: '120+', label: 'Projects Done' },
  { number: '95%', label: 'Happy Clients' },
  { number: '10+', label: 'Years Experience' },
] as const

export function About() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 max-w-3xl text-center">
          <h2 className="mb-4 font-display text-3xl font-bold uppercase md:text-4xl">
            Love Our Works
          </h2>
          <p className="text-mist">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex.
            Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam
            temporibus culpa dolore molestias blanditiis consequuntur sunt nisi. Aperiam neque id,
            illum laudantium.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label}>
              <span className="block font-display text-4xl font-bold text-brand md:text-5xl">
                {s.number}
              </span>
              <span className="mt-2 block text-sm uppercase tracking-wide text-mist">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
