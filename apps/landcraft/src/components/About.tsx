import { CheckCircle } from 'lucide-react'

const capabilities = [
  'Residential landscape design',
  'Commercial property maintenance',
  'Garden installation and renovation',
  'Irrigation system setup',
  'Seasonal cleanup services',
  'Hardscape and patio construction',
  'Tree and shrub care',
]

export default function About() {
  return (
    <section id="about" className="py-24" data-testid="about">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://picsum.photos/seed/landcraft-about/600/400"
              alt="Our landscaping work"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <p className="mb-4 text-body">
              With over a decade of experience in professional landscaping, Landcraft has
              transformed hundreds of outdoor spaces across the region. Our team of certified
              landscape architects and horticulturists brings creativity and expertise to every
              project.
            </p>
            <p className="mb-6 text-body">
              From initial consultation to final installation, we work closely with our clients to
              bring their vision to life while ensuring sustainable practices and lasting quality.
            </p>
            <ul className="space-y-2">
              {capabilities.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-body">
                  <CheckCircle size={16} className="text-brand shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
