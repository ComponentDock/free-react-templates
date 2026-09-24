import { doctorsTitle, doctors } from '../data'

export function Doctors() {
  return (
    <section id="doctors" className="bg-section-bg py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <h2 className="text-center font-heading text-3xl font-bold text-heading sm:text-4xl">
          {doctorsTitle}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[15px] text-muted">
          Meet our team of experienced and compassionate medical professionals.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doc) => (
            <div
              key={doc.name}
              className="overflow-hidden rounded-lg border border-card-border bg-white transition-shadow hover:shadow-lg"
            >
              <img
                src={`https://picsum.photos/seed/${doc.imageSeed}/300/300`}
                alt={`Photo of ${doc.name}`}
                loading="lazy"
                className="h-64 w-full object-cover"
              />
              <div className="p-5 text-center">
                <h3 className="font-heading text-lg font-semibold text-heading">{doc.name}</h3>
                <p className="mt-1 text-sm text-accent">{doc.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
