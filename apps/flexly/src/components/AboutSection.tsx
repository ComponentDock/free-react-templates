import { useEffect, useRef, useState } from 'react'

const TARGET_YEARS = 20

/* About / counter — split section: photo left, "A Few Words About Us" +
   "We're Functioning for Almost 20 Years" headline (number in brand
   salmon, count-up on scroll into view) + two paragraphs right. */
export function AboutSection() {
  const [years, setYears] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // The effect only runs after mount, so the section ref is always set.
    const section = sectionRef.current!
    let started = false
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry?.isIntersecting && !started) {
          started = true
          const timer = window.setInterval(() => {
            setYears((current) => {
              if (current >= TARGET_YEARS) {
                window.clearInterval(timer)
                return TARGET_YEARS
              }
              return current + 1
            })
          }, 60)
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="about-section" aria-label="About us" className="bg-light py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2">
        <img
          src="https://picsum.photos/seed/flexly-about/800/700"
          alt=""
          className="h-full max-h-[480px] w-full object-cover"
        />
        <div>
          <span className="text-[13px] font-bold uppercase tracking-[3px] text-brand">
            A Few Words About Us
          </span>
          <h2 className="mt-2 text-4xl font-bold capitalize text-black">
            We&apos;re Functioning for Almost <span className="text-brand">{years}</span> Years
          </h2>
          <p className="mt-5 leading-relaxed text-black/70">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean.
          </p>
          <p className="mt-4 leading-relaxed text-black/70">
            A small river named Duden flows by their place and supplies it with the necessary
            regelialia. It is a paradisematic country, in which roasted parts of sentences fly into
            your mouth.
          </p>
        </div>
      </div>
    </section>
  )
}
