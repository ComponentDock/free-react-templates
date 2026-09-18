import { Check, X } from 'lucide-react'

const regularFeatures = [
  'Dedicated workspace required',
  'Benefits & insurance costs',
  'Limited skill set',
  'Fixed working hours',
  'Training & onboarding time',
]
const valetFeatures = [
  'Work from anywhere',
  'No overhead costs',
  'Multi-skilled talent',
  'Flexible scheduling',
  'Ready to start immediately',
]

export function Comparison() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Get Your Own Highly Skilled Virtual Assistant.
        </h2>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded border p-8">
            <h3 className="mb-6 text-center text-lg font-bold">Regular Office Employee</h3>
            <ul className="space-y-3">
              {regularFeatures.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <X className="h-5 w-5 flex-shrink-0 text-red-500" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded border-2 border-blue-600 p-8">
            <h3 className="mb-6 text-center text-lg font-bold">Virtual Assistant Employee</h3>
            <ul className="space-y-3">
              {valetFeatures.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
