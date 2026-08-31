import { useState } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'

interface CarouselItem {
  id: number
  title: string
  subtitle: string
  image: string
  category: string
}

const items: CarouselItem[] = [
  {
    id: 1,
    title: 'Modern Architecture Showcase',
    subtitle: 'Exploring minimalist structures and sustainable urban design principles.',
    image: 'https://picsum.photos/seed/merry-1/800/600',
    category: 'Architecture',
  },
  {
    id: 2,
    title: 'Digital Art & Motion',
    subtitle: 'Immersive visual experiences created with cutting-edge WebGL tools.',
    image: 'https://picsum.photos/seed/merry-2/800/600',
    category: 'Digital Art',
  },
  {
    id: 3,
    title: 'Sustainable Living Spaces',
    subtitle: 'Integrating nature into modern residential and workspace interiors.',
    image: 'https://picsum.photos/seed/merry-3/800/600',
    category: 'Interior',
  },
  {
    id: 4,
    title: 'Future Tech & Robotics',
    subtitle: 'Human-centric automation and intelligent ambient computing.',
    image: 'https://picsum.photos/seed/merry-4/800/600',
    category: 'Technology',
  },
]

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1))
  }

  const current = items[currentIndex]!

  return (
    <section id="showcase" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">
              Featured Carousel
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Curated Masterpieces
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="p-3 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-brand hover:text-white hover:border-brand transition-all"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="p-3 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-brand hover:text-white hover:border-brand transition-all"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white dark:bg-gray-950 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800">
          <div className="lg:col-span-7 relative h-80 sm:h-96 lg:h-[450px]">
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute top-4 left-4 bg-brand text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              {current.category}
            </div>
          </div>
          <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-center">
            <span className="text-sm font-medium text-brand mb-2">
              0{current.id} / 0{items.length}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {current.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {current.subtitle}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-brand font-semibold hover:text-brand-dark transition-colors group"
            >
              Read full story
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {items.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${item.id}`}
              className={`h-2.5 rounded-full transition-all ${
                idx === currentIndex ? 'w-8 bg-brand' : 'w-2.5 bg-gray-300 dark:bg-gray-700'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
