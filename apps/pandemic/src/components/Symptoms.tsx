import { Thermometer, Wind, Stethoscope, Headphones } from 'lucide-react'

const symptoms = [
  {
    icon: Thermometer,
    title: 'High Fever',
    description: 'A sustained fever above 37.8°C (100°F) is one of the most common early symptoms.',
  },
  {
    icon: Wind,
    title: 'Cough',
    description: 'A persistent dry cough that can develop into a more serious condition over time.',
  },
  {
    icon: Stethoscope,
    title: 'Sore Throat',
    description: 'Pain or irritation in the throat that often worsens when swallowing or speaking.',
  },
  {
    icon: Headphones,
    title: 'Headache',
    description:
      'Recurring headaches, especially when combined with fever, may indicate infection.',
  },
]

export function Symptoms() {
  return (
    <section id="symptoms" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-center text-3xl font-black text-brand">Symptoms</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-mist">
          Common symptoms to watch for. Seek medical attention if you experience multiple symptoms
          simultaneously.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {symptoms.map((s) => (
            <div
              key={s.title}
              className="rounded-xl bg-paper p-6 text-center transition-shadow hover:shadow-md"
            >
              <s.icon className="mx-auto mb-4 h-12 w-12 text-danger" />
              <h3 className="text-lg font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm text-mist">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
