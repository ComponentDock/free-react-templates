import { Check } from 'lucide-react'

const checklist = [
  'Certified and experienced staff',
  '24/7 medical assistance available',
  'Comfortable and safe environment',
]

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left: text + checklist */}
          <div className="lg:col-span-7">
            <h2 className="mb-6 font-display text-3xl font-bold text-gray-900 md:text-4xl">
              Senior Care Center is for Your Family
            </h2>
            <p className="mb-8 leading-relaxed text-gray-600">
              We provide exceptional elderly care services with compassion and professionalism. Our
              experienced team is dedicated to ensuring every resident enjoys a fulfilling and
              comfortable life in a safe, nurturing environment.
            </p>
            <div className="flex items-start gap-8">
              <img
                src="https://picsum.photos/seed/silverleaf-about/600/400"
                alt="Senior care facility"
                className="w-1/2 rounded object-cover"
                loading="lazy"
              />
              <ul className="flex flex-col gap-3">
                {checklist.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check size={18} className="shrink-0 text-brand" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: media card */}
          <div className="relative overflow-hidden lg:col-span-5">
            <div
              className="aspect-[4/3] bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://picsum.photos/seed/silverleaf-media1/600/450)',
              }}
            />
            <div className="absolute bottom-0 left-0 w-full bg-brand px-6 py-4">
              <p className="font-display text-lg font-bold text-white">
                You can live here with love
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
