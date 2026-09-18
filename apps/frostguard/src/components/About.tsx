import { CheckCircle } from 'lucide-react'

const checklist = [
  'Professional installation warranty',
  'Annual maintenance service included',
  '24/7 emergency support available',
]

export function About() {
  return (
    <section className="py-16 bg-[#F3F8FC]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: images */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://picsum.photos/seed/frostguard-about-1/600/600"
                alt="HVAC technician at work"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-lg overflow-hidden shadow-lg border-4 border-white">
              <img
                src="https://picsum.photos/seed/frostguard-about-2/300/300"
                alt="HVAC equipment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Right: text */}
          <div>
            <h2 className="font-['Saira_Condensed'] text-3xl md:text-4xl font-bold text-[#142336] mb-4">
              Quality Heating & Cooling
            </h2>
            <p className="font-['Mulish'] text-[#444444] mb-6 leading-relaxed">
              We provide comprehensive heating and cooling solutions with professional installation
              warranty and reliable service warranty. Our experienced team ensures your home stays
              comfortable throughout every season.
            </p>
            <ul className="space-y-3 mb-8">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="text-[#4586D5] flex-shrink-0" size={20} />
                  <span className="font-['Mulish'] text-[#444444]">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-block border-2 border-[#4586D5] text-[#4586D5] font-['Saira_Condensed'] font-bold px-6 py-2 rounded-[60px] hover:bg-[#4586D5] hover:text-white transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
