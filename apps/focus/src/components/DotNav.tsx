import { useEffect, useState } from 'react'
import type { MouseEvent } from 'react'
import { cn } from '@free-react-templates/ui'
import { NAV_ITEMS } from '../data'

const SECTION_IDS = ['home', 'about', 'services', 'work', 'testimonial', 'contact'] as const

/* Fixed right-edge dot navigation with scroll-spy: a vertical rail of
   labelled dots that tracks the section in view (active dot fills the
   brand color with a 15px ring). */
export function DotNav() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )
    for (const id of SECTION_IDS) observer.observe(document.getElementById(id)!)
    return () => observer.disconnect()
  }, [])

  const handleClick = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    document.getElementById(href.slice(1))!.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      aria-label="Section navigation"
      className="fixed top-1/2 right-12 z-[999] -translate-y-1/2 max-md:right-5"
    >
      <ul className="m-0 list-none p-0">
        {NAV_ITEMS.map((item) => {
          const sectionId = item.href.slice(1)
          const isActive = active === sectionId
          return (
            <li key={item.href} className="relative min-w-[200px] text-right">
              <a
                href={item.href}
                onClick={handleClick(item.href)}
                aria-current={isActive ? 'true' : undefined}
                className={cn(
                  'relative block py-1.5 pr-7 text-white no-underline',
                  isActive && 'text-brand',
                )}
              >
                <span className="text-sm font-semibold tracking-wide uppercase">{item.label}</span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute top-1/2 right-0 h-1.5 w-1.5 -translate-y-1/2 rounded-full border border-white/50',
                    isActive && 'border-brand bg-brand',
                  )}
                />
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute top-1/2 right-[-5px] h-[15px] w-[15px] -translate-y-1/2 scale-0 rounded-full border-2 border-brand transition-transform duration-300',
                    isActive && 'scale-100',
                  )}
                />
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
