import { Building2, Car, Smile } from 'lucide-react'

const FACTS = [
  { value: 550, label: 'Happy Clients', icon: Smile },
  { value: 250, label: 'Cars in Stock', icon: Car },
  { value: 50, label: 'Office in Cities', icon: Building2 },
]

export function FunFacts() {
  return (
    <section className="relative overflow-hidden py-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/seed/autodock-funfact/1920/600')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-carbon/80" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-5xl gap-10 px-4 text-center sm:grid-cols-3">
        {FACTS.map((fact) => (
          <div key={fact.label}>
            <fact.icon className="mx-auto h-10 w-10 text-brand" aria-hidden="true" />
            <p className="mt-3 text-4xl font-extrabold text-brand">{fact.value}+</p>
            <h3 className="mt-1 text-sm font-bold uppercase tracking-widest text-white">
              {fact.label}
            </h3>
          </div>
        ))}
      </div>
    </section>
  )
}
