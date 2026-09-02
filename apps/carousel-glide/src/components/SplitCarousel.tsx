import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export interface SlideContent {
  id: string
  category: string
  title: string
  description: string
  imageSeed: string
}

const slides: SlideContent[] = [
  {
    id: 'first',
    category: 'TRAVEL',
    title: 'Take your mobile photography\nto the next level',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Repudiandae fugae optio dolorem, fugit voluptates sint ducimus praesentium minus.',
    imageSeed: 'carousel-glide-1',
  },
  {
    id: 'second',
    category: 'PHOTOGRAPHY',
    title: 'Capture moments like\na professional',
    description:
      'Discover advanced techniques and tips to elevate your photography skills. From composition to lighting, master the art of visual storytelling.',
    imageSeed: 'carousel-glide-2',
  },
  {
    id: 'third',
    category: 'CREATIVITY',
    title: 'Unleash your creative\npotential today',
    description:
      'Explore new perspectives and creative approaches to mobile photography. Transform ordinary scenes into extraordinary images.',
    imageSeed: 'carousel-glide-3',
  },
]

export interface SplitCarouselProps {
  className?: string
}

export function SplitCarousel({ className }: SplitCarouselProps) {
  const [activeSlide, setActiveSlide] = useState(0)

  const slide = slides[activeSlide]!

  return (
    <section className={cn('relative min-h-[600px] flex items-center', className)}>
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Image */}
          <div
            className={cn(
              'relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl',
              'bg-gradient-to-br from-purple-600/20 to-blue-500/20',
            )}
            data-testid="carousel-image"
          >
            <img
              src={`https://picsum.photos/seed/${slide.imageSeed}/800/600.jpg`}
              alt={slide.title}
              className="w-full h-full object-cover transition-opacity duration-500"
              loading="lazy"
            />
          </div>

          {/* Right side - Content with tabs */}
          <div className="space-y-6">
            {/* Tab Navigation */}
            <div
              className="flex justify-center gap-4 lg:justify-start"
              role="tablist"
              aria-label="Carousel slides"
              data-testid="tab-list"
            >
              {slides.map((s, index) => (
                <button
                  key={s.id}
                  role="tab"
                  aria-selected={index === activeSlide}
                  aria-controls={`panel-${s.id}`}
                  id={`tab-${s.id}`}
                  onClick={() => setActiveSlide(index)}
                  className={cn(
                    'px-4 py-2 text-sm font-medium transition-all duration-300',
                    'relative',
                    index === activeSlide
                      ? 'text-primary-600 border-b-2 border-primary-600'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                  data-testid={`tab-${s.id}`}
                >
                  {s.category} — {s.id.toUpperCase()} TAB
                </button>
              ))}
            </div>

            {/* Active Panel */}
            <div
              role="tabpanel"
              id={`panel-${slide.id}`}
              aria-labelledby={`tab-${slide.id}`}
              className="space-y-4 animate-fade-in"
            >
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                {slide.category} — {slide.id.toUpperCase()} TAB
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-dark leading-tight">
                {slide.title.replace(/\n/g, ' ')}
              </h1>
              <p className="text-base text-muted-foreground max-w-lg leading-relaxed">
                {slide.description}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={() => setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
            className={cn(
              'p-3 rounded-full bg-white/80 backdrop-blur-sm',
              'shadow-lg hover:shadow-xl transition-all duration-300',
              'text-dark hover:text-primary-600',
              'focus:outline-none focus:ring-2 focus:ring-primary-500',
            )}
            aria-label="Previous slide"
            data-testid="prev-button"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
            className={cn(
              'p-3 rounded-full bg-white/80 backdrop-blur-sm',
              'shadow-lg hover:shadow-xl transition-all duration-300',
              'text-dark hover:text-primary-600',
              'focus:outline-none focus:ring-2 focus:ring-primary-500',
            )}
            aria-label="Next slide"
            data-testid="next-button"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}
