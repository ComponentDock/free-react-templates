import { useEffect, useRef, useState } from 'react'
import { IMAGES, SKILLS } from '../data'

/* Skills — "We Serve All Industries": a side photo and four gradient
   progress bars (90/95/85/90) that animate to their percentage once the
   section scrolls into view (IntersectionObserver, falling back to visible
   immediately when the API is unavailable), plus a "Work with us" button. */
export function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = sectionRef.current
    if (!node || typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} aria-label="Skills" className="relative overflow-hidden py-[200px]">
      <img
        src={IMAGES.skills}
        alt="Designer sketching a brand concept"
        loading="lazy"
        className="absolute left-0 top-1/2 hidden h-auto w-[calc(50%-15px)] -translate-y-1/2 rounded-[5px] object-cover lg:block"
      />
      <div className="mx-auto max-w-[1170px] px-6">
        <div className="lg:ml-auto lg:max-w-[470px]">
          <h2 className="text-[30px] font-bold leading-[1.3] text-heading lg:text-[38px]">
            {SKILLS.heading}
          </h2>
          <p className="mt-6 text-sm leading-[1.8] text-body">{SKILLS.subtext}</p>
          <div className="mt-[60px]">
            {SKILLS.bars.map((bar, index) => (
              <div
                key={bar.label}
                className={index === SKILLS.bars.length - 1 ? 'pb-[60px]' : 'mb-[35px]'}
              >
                <div className="mb-[10px] flex items-center justify-between">
                  <h3 className="text-sm font-medium text-heading">{bar.label}</h3>
                  <span className="text-sm font-medium text-muted">{bar.percentage}%</span>
                </div>
                <div className="h-2 w-full bg-line">
                  <div
                    className="h-full bg-gradient-to-r from-brand-purple to-brand-green transition-[width] duration-700"
                    style={{ width: visible ? `${bar.percentage}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>
          <a href="#contact" className="fancy-btn fancy-btn-dark">
            {SKILLS.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
