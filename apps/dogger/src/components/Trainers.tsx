const trainers = [
  { name: 'Jessica White', seed: 'dogger-trainer-1' },
  { name: 'Valerie Elash', seed: 'dogger-trainer-2' },
  { name: 'Alicia Jones', seed: 'dogger-trainer-3' },
] as const

export function Trainers() {
  return (
    <section id="trainers" className="bg-brand py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold text-brand-strong">Our Trainers</h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-sm font-light leading-relaxed text-brand-muted">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
        </p>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {trainers.map((trainer) => (
            <article key={trainer.name} className="text-center">
              <img
                src={`https://picsum.photos/seed/${trainer.seed}/480/480`}
                alt=""
                loading="lazy"
                className="mx-auto aspect-square w-full max-w-xs rounded-full object-cover"
              />
              <h3 className="mt-6 text-xl font-bold text-brand-strong">{trainer.name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
