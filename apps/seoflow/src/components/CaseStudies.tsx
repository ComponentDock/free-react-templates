import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const caseStudies = [
  {
    title: 'Product Design',
    tags: 'UI/UX, Design',
    image: 'https://picsum.photos/seed/seoflow-cs1/400/300',
  },
  {
    title: 'Custom Website',
    tags: 'UI/UX, Design',
    image: 'https://picsum.photos/seed/seoflow-cs2/400/300',
  },
  {
    title: 'Digital Marketing',
    tags: 'UI/UX, Design',
    image: 'https://picsum.photos/seed/seoflow-cs3/400/300',
  },
]

export function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prev = () => setCurrentIndex((i) => (i === 0 ? caseStudies.length - 1 : i - 1))
  const next = () => setCurrentIndex((i) => (i === caseStudies.length - 1 ? 0 : i + 1))

  return (
    <section id="case-studies" className="py-20 bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Selected Case Study</h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Esteem spirit temper too say adieus who direct esteem. It esteems luckily or picture
            placing drawing.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {caseStudies.map((study, idx) => (
                <div
                  key={study.title}
                  className="w-full flex-shrink-0 px-4"
                  role="group"
                  aria-label={`Case study ${idx + 1} of ${caseStudies.length}`}
                >
                  <div className="text-center">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full max-w-md mx-auto rounded-lg mb-4"
                      loading="lazy"
                    />
                    <h3 className="text-xl font-semibold">{study.title}</h3>
                    <p className="text-gray-400 text-sm">{study.tags}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
            aria-label="Previous case study"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
            aria-label="Next case study"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {caseStudies.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${idx === currentIndex ? 'bg-brand-pink' : 'bg-white/30'}`}
              aria-label={`Go to case study ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
