import { useState } from 'react'
import { Search, ChevronUp } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

const slides = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  src: `https://picsum.photos/seed/shuttervibe-${i + 1}/1920/1080`,
  title: `Image Title Here ${i + 1}`,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, ipsam, illo dolorum laboriosam voluptatum laudantium.',
}))

export function Gallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <div className="h-[calc(100vh-70px)] w-full bg-black">
      {/* Main gallery */}
      <Swiper
        modules={[Navigation, Thumbs]}
        navigation
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : undefined }}
        className="h-[80%] w-full"
        data-testid="gallery-main"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.src})` }}
            >
              {/* Zoom button */}
              <a
                href={slide.src}
                target="_blank"
                rel="noreferrer"
                className="absolute right-4 bottom-4 z-10 flex h-[60px] w-[60px] items-center justify-center bg-white transition-colors hover:bg-gray-100"
                aria-label={`Zoom ${slide.title}`}
              >
                <Search className="h-5 w-5 text-gray-400" />
              </a>

              {/* Info panel */}
              <div className="absolute bottom-0 left-0 z-10 bg-white">
                <button
                  onClick={() => setExpandedId(expandedId === slide.id ? null : slide.id)}
                  className="flex h-[60px] w-[60px] items-center justify-center"
                  aria-label={expandedId === slide.id ? 'Collapse info' : 'Expand info'}
                  aria-expanded={expandedId === slide.id}
                >
                  <ChevronUp
                    className={`h-5 w-5 text-black transition-transform duration-300 ${
                      expandedId === slide.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedId === slide.id
                      ? 'max-w-[400px] opacity-100 visible px-7 pb-7'
                      : 'max-w-0 opacity-0 invisible p-0'
                  }`}
                >
                  <h2 className="mb-4 text-lg font-bold text-black">{slide.title}</h2>
                  <p className="text-sm leading-relaxed text-gray-600">{slide.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail strip */}
      <Swiper
        onSwiper={setThumbsSwiper}
        modules={[Thumbs]}
        spaceBetween={10}
        slidesPerView={10}
        watchSlidesProgress
        className="h-[20%] w-full px-2 pt-2"
        data-testid="gallery-thumbs"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="h-[80px] w-full cursor-pointer bg-cover bg-center opacity-40 transition-opacity hover:opacity-100"
              style={{ backgroundImage: `url(${slide.src})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
