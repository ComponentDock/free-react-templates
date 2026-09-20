import { GraduationCap, Building2 } from 'lucide-react'

const features = [
  '22,931 Yearly Graduates',
  '150 Universities Worldwide',
  'Top Professionals in The World',
  'Expand Your Knowledge',
  'Best Online Teaching Assistant Courses',
  'Best Teachers',
]

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-gray-900">Why Choose Us</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 bg-white rounded-lg p-8 shadow-md">
            <div className="space-y-5">
              {features.map((feat, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-500 flex-shrink-0">
                    {i % 2 === 0 ? <GraduationCap size={20} /> : <Building2 size={20} />}
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm">{feat}</h4>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://picsum.photos/seed/classroom-wcu/600/500"
              alt="Why Choose Us"
              className="w-full rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
