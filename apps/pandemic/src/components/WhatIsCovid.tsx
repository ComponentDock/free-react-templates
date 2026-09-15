import { ShieldAlert, ShieldCheck, Stethoscope, Thermometer } from 'lucide-react'

const tips = [
  {
    icon: ShieldAlert,
    title: 'Protection',
    description: 'Learn how to protect yourself and your family from the spread of infection.',
  },
  {
    icon: ShieldCheck,
    title: 'Prevention',
    description: 'Follow recommended prevention guidelines to keep yourself safe and healthy.',
  },
  {
    icon: Stethoscope,
    title: 'Treatments',
    description: 'Stay informed about available treatments and medical advancements.',
  },
  {
    icon: Thermometer,
    title: 'Symptoms',
    description: 'Recognize the early symptoms so you can seek help promptly.',
  },
]

export function WhatIsCovid() {
  return (
    <section className="bg-paper py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-center text-3xl font-black text-brand">What is Coronavirus?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-mist">
          Coronavirus (COVID-19) is an infectious disease caused by a newly discovered coronavirus.
          Most people infected will experience mild to moderate respiratory illness.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {tips.map((tip) => (
            <div
              key={tip.title}
              className="rounded-xl bg-white p-6 text-center shadow-md transition-shadow hover:shadow-lg"
            >
              <tip.icon className="mx-auto mb-4 h-12 w-12 text-brand" />
              <h3 className="text-lg font-bold text-ink">{tip.title}</h3>
              <p className="mt-2 text-sm text-mist">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
