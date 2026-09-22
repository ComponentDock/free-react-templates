import { trainers, trainersTitle, trainersSubtitle } from '../data'

export function Trainers() {
  return (
    <section id="trainers-section" aria-label="Trainers" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-ink">{trainersTitle}</h2>
          <p className="mt-4 text-body">{trainersSubtitle}</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {trainers.map((trainer) => (
            <div key={trainer.name} className="group text-center">
              <div className="mx-auto h-64 w-64 overflow-hidden rounded-lg">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-lg font-bold text-ink">{trainer.name}</h3>
              <span className="text-sm text-muted">{trainer.specialty}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
