import { Maximize2 } from 'lucide-react'
import { portfolioImages } from '../data'

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-white py-20">
      <div className="mx-auto max-w-[1170px] px-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Row 1: 2-col + 1-col */}
          <div className="group relative overflow-hidden lg:col-span-2">
            <img
              src={`https://picsum.photos/seed/execly-p-${portfolioImages[0]}/800/500`}
              alt="Portfolio item"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-brand/0 transition-colors duration-300 group-hover:bg-brand/60">
              <Maximize2
                className="text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                size={32}
              />
            </div>
          </div>
          <div className="group relative overflow-hidden">
            <img
              src={`https://picsum.photos/seed/execly-p-${portfolioImages[1]}/400/500`}
              alt="Portfolio item"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-brand/0 transition-colors duration-300 group-hover:bg-brand/60">
              <Maximize2
                className="text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                size={32}
              />
            </div>
          </div>

          {/* Row 2: 1-col + 2-col */}
          <div className="group relative overflow-hidden">
            <img
              src={`https://picsum.photos/seed/execly-p-${portfolioImages[2]}/400/500`}
              alt="Portfolio item"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-brand/0 transition-colors duration-300 group-hover:bg-brand/60">
              <Maximize2
                className="text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                size={32}
              />
            </div>
          </div>
          <div className="group relative overflow-hidden lg:col-span-2">
            <img
              src={`https://picsum.photos/seed/execly-p-${portfolioImages[3]}/800/500`}
              alt="Portfolio item"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-brand/0 transition-colors duration-300 group-hover:bg-brand/60">
              <Maximize2
                className="text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                size={32}
              />
            </div>
          </div>

          {/* Row 3: 2-col + 1-col */}
          <div className="group relative overflow-hidden lg:col-span-2">
            <img
              src={`https://picsum.photos/seed/execly-p-${portfolioImages[4]}/800/500`}
              alt="Portfolio item"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-brand/0 transition-colors duration-300 group-hover:bg-brand/60">
              <Maximize2
                className="text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                size={32}
              />
            </div>
          </div>
          <div className="group relative overflow-hidden">
            <img
              src={`https://picsum.photos/seed/execly-p-${portfolioImages[5]}/400/500`}
              alt="Portfolio item"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-brand/0 transition-colors duration-300 group-hover:bg-brand/60">
              <Maximize2
                className="text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                size={32}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
