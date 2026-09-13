import { CheckCircle } from 'lucide-react'

const features = [
  'Officia quaerat eaque neque',
  'Possimus aut consequuntur incidunt',
  'Lorem ipsum dolor sit amet',
  'Consectetur adipisicing elit',
] as const

export function About() {
  return (
    <section id="about" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">For the next great business</h2>
            <p className="mb-6 text-smoke">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tempora cumque eligendi
              in nostrum labore omnis quaerat.
            </p>
          </div>
          <div>
            <ul className="space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary-500" />
                  <span className="text-ink">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
