import { useEffect, useState } from 'react'
import { BrandIcon } from './BrandIcon'

export const photos = Array.from({ length: 21 }, (_, index) => ({
  id: index + 1,
  src: `https://picsum.photos/seed/photofolio-${index + 1}/640/480`,
  alt: `Portfolio photograph ${index + 1}`,
}))

/** Tiles per viewport, mirroring the original carousel breakpoints. */
export function tilesPerView(width: number): number {
  if (width <= 480) return 1
  if (width <= 768) return 2
  if (width <= 991) return 3
  if (width <= 1200) return 4
  if (width <= 1400) return 5
  return 7
}

const SLIDE_MS = 3000

export function HeroWall() {
  const [start, setStart] = useState(0)
  const [count, setCount] = useState(() => tilesPerView(window.innerWidth))

  useEffect(() => {
    const onResize = () => setCount(tilesPerView(window.innerWidth))
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setStart((value) => (value + 1) % photos.length)
    }, SLIDE_MS)
    return () => window.clearInterval(timer)
  }, [])

  const visible = Array.from({ length: count }, (_, offset) => {
    const photo = photos[(start + offset) % photos.length]!
    return { ...photo, offset }
  })

  return (
    <section id="home" className="relative bg-white">
      <div
        className="grid w-full gap-0"
        style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }}
      >
        {visible.map((photo) => (
          <a
            key={`${photo.id}-${photo.offset}`}
            href="#portfolio"
            aria-label={`View ${photo.alt}`}
            className="group relative block h-[278px] overflow-hidden"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-overlay/0 p-4 transition-colors duration-300 group-hover:bg-overlay/90">
              <span className="translate-y-12 text-center text-xl leading-relaxed text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                Take a look at my Portfolio
              </span>
            </span>
          </a>
        ))}
      </div>
      <SocialSidebar />
    </section>
  )
}

const socialLinks = [
  { label: 'Pinterest', name: 'pinterest' },
  { label: 'Facebook', name: 'facebook' },
  { label: 'Twitter', name: 'twitter' },
  { label: 'Dribbble', name: 'dribbble' },
  { label: 'Behance', name: 'behance' },
] as const

function SocialSidebar() {
  return (
    <>
      {/* Vertical sidebar pinned to the hero's right edge (desktop). */}
      <div
        aria-label="Social links"
        className="absolute right-0 bottom-0 hidden w-[110px] flex-col items-center bg-white py-10 sm:flex"
      >
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href="#home"
            aria-label={social.label}
            className="px-4 py-4 text-social transition-opacity hover:opacity-60"
          >
            <BrandIcon name={social.name} className="h-4 w-4" />
          </a>
        ))}
      </div>
      {/* Full-width horizontal bar under the hero on narrow viewports. */}
      <div
        aria-label="Social links"
        className="flex items-center justify-center gap-6 border-t border-hairline bg-white py-[30px] sm:hidden"
      >
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href="#home"
            aria-label={social.label}
            className="text-social transition-opacity hover:opacity-60"
          >
            <BrandIcon name={social.name} className="h-4 w-4" />
          </a>
        ))}
      </div>
    </>
  )
}
