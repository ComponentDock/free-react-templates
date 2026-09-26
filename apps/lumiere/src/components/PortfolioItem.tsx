import { Expand } from 'lucide-react'

export interface PortfolioItemProps {
  category: string
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  reversed?: boolean
}

export function PortfolioItem({
  category,
  title,
  description,
  imageSrc,
  imageAlt,
  reversed = false,
}: PortfolioItemProps) {
  return (
    <div className="flex flex-col items-stretch border-b border-gray-100 lg:flex-row">
      {/* Image */}
      <a
        href={imageSrc}
        className={`group relative flex h-72 items-center justify-center overflow-hidden bg-gray-100 lg:h-[500px] lg:w-1/2 ${
          reversed ? 'order-2 lg:order-1' : ''
        }`}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/30">
          <Expand className="h-8 w-8 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </span>
      </a>

      {/* Text */}
      <div
        className={`flex w-full items-center px-6 py-10 lg:w-1/2 lg:px-16 ${
          reversed ? 'order-1 justify-end text-right lg:order-2' : ''
        }`}
      >
        <div className="max-w-md">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted">
            {category}
          </span>
          <h2 className="mb-4 font-display text-2xl font-normal text-heading lg:text-3xl">
            {title}
          </h2>
          <div
            className={`relative mb-6 border-l-2 border-brand-500 pl-4 ${
              reversed ? 'border-l-0 border-r-2 pr-4 pl-0 text-right' : ''
            }`}
          >
            <p className="text-sm leading-relaxed text-muted">{description}</p>
          </div>
          <a
            href="#portfolio"
            className="inline-block border border-heading px-6 py-2 text-xs font-semibold uppercase tracking-widest text-heading transition-colors hover:bg-heading hover:text-white"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </div>
  )
}
