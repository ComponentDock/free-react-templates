import { trainers } from '../data'

export function Trainers() {
  return (
    <section id="trainer-section" className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-black text-primary">Trainers</h2>
          <p className="mt-4 text-gray-400">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {trainers.map((trainer, i) => (
            <div key={trainer.name} className={i === 1 ? 'mt-5 lg:mt-0' : undefined}>
              <img
                src={trainer.image}
                alt={`${trainer.name}, ${trainer.role}`}
                className="mb-5 w-full object-cover shadow-[10px_10px_0_0_#48d494]"
              />
              <h3 className="text-2xl font-bold text-white">{trainer.name}</h3>
              <p className="mb-4 mt-1 text-white/70">{trainer.role}</p>
              <p className="text-gray-400">{trainer.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
