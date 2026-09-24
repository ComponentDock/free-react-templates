import { CheckCircle } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const CHECKLIST_ITEMS = [
  'Compassionate and personalized care',
  'Board-certified specialist physicians',
  'State-of-the-art medical equipment',
]

export default function Welcome() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-brand-primary/5 rounded-2xl" />
            <img
              src="https://picsum.photos/seed/medflow-clinic/600/500"
              alt="Modern medical clinic interior"
              className="relative rounded-lg shadow-lg w-full object-cover aspect-[6/5]"
              loading="lazy"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-brand-heading mb-4">
              Welcome To
              <br />
              <span className="text-brand-primary">Modern Clinic.</span>
            </h2>
            <p className="text-brand-body mb-6 leading-relaxed">
              We provide comprehensive healthcare services with a focus on compassion and
              excellence. Our team of experienced professionals is dedicated to helping you achieve
              optimal health and wellness.
            </p>
            <ul className="space-y-3 mb-8">
              {CHECKLIST_ITEMS.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary shrink-0" />
                  <span className="text-brand-body text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <Button
              className="bg-gradient-to-r from-brand-primary to-brand-primary-light text-white px-8 py-3 rounded font-semibold text-sm hover:opacity-90 transition-opacity"
              onClick={() => {
                document.getElementById('departments')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
