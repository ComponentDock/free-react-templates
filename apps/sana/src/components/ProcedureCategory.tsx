const procedures = [
  {
    name: 'Emergency Treatment',
    description: 'Round-the-clock urgent care when every minute counts.',
    image: 'https://picsum.photos/seed/sana-proc-1/600/450',
  },
  {
    name: 'Cardiac Care',
    description: 'Advanced heart diagnostics and treatment by specialists.',
    image: 'https://picsum.photos/seed/sana-proc-2/600/450',
  },
  {
    name: 'Lab Tests',
    description: 'Fast, accurate laboratory analysis for every diagnosis.',
    image: 'https://picsum.photos/seed/sana-proc-3/600/450',
  },
] as const

/** Three photo cards that reveal an overlay label + divider + description. */
export function ProcedureCategory() {
  return (
    <section id="procedure" className="mx-auto max-w-7xl px-4 py-24 lg:px-8">
      <div className="mx-auto mb-14 max-w-xl text-center">
        <h2 className="text-3xl font-bold text-ink-900">Procedure Category</h2>
        <p className="mt-4 text-sm leading-6 text-mute-500">
          From emergency response to scheduled procedures, our specialists deliver compassionate
          care at every stage.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {procedures.map((procedure) => (
          <div key={procedure.name} className="group relative overflow-hidden">
            <img
              src={procedure.image}
              alt={`${procedure.name} at Sana`}
              className="h-72 w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-ink-900/80 p-6 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h3 className="text-lg font-medium tracking-widest text-white uppercase">
                {procedure.name}
              </h3>
              <span className="my-3 h-px w-10 bg-white" aria-hidden="true" />
              <p className="text-sm leading-6 font-light text-white/90">{procedure.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
