import { useEffect, useRef, useState } from 'react'
import { about, skills } from '../data'
import type { Skill } from '../data'

function SkillBar({ skill }: { skill: Skill }) {
  const [revealed, setRevealed] = useState(false)
  const trackRef = useRef<HTMLLIElement>(null)
  /* Without IntersectionObserver (jsdom included) nothing would ever fire the
     reveal, so the final width is derived during render instead of being
     written back from an effect. */
  const settled = typeof IntersectionObserver === 'undefined' || revealed

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      return
    }
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.disconnect()
        }
      }
    })
    observer.observe(trackRef.current!)
    return () => observer.disconnect()
  }, [])

  return (
    <li ref={trackRef}>
      <div className="mb-2 flex items-baseline justify-between text-[20px] text-ink uppercase">
        <span>{skill.label}</span>
        <span>{skill.value}%</span>
      </div>
      <div
        role="progressbar"
        aria-label={skill.label}
        aria-valuenow={skill.value}
        aria-valuemin={0}
        aria-valuemax={100}
        className="h-2 overflow-hidden rounded bg-neon/10"
      >
        <div
          className="h-2 rounded-[7px] bg-neon transition-[width] duration-1000 ease-out"
          style={{ width: settled ? `${skill.value}%` : '0%' }}
        />
      </div>
    </li>
  )
}

/** Photographic about band holding a white card with the statement and four skill bars. */
export function About() {
  return (
    <section
      id="about"
      aria-label="About"
      className="relative bg-cover bg-center py-[70px] lg:py-[120px]"
    >
      <img
        src={about.background}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-ink/20" />
      <div className="relative mx-auto max-w-[1076px] bg-white px-5 py-[50px] md:px-[50px] lg:px-[100px] lg:py-[100px]">
        <p className="text-center text-[16px] tracking-[1.6px] text-neon uppercase">
          {about.eyebrow}
        </p>
        <h2 className="mx-auto mt-4 mb-10 max-w-[820px] text-center text-[24px] leading-[1.3] text-ink md:text-[31px] lg:text-[40px]">
          {about.statement}
        </h2>
        <div className="text-center">
          <a
            href={about.cta.href}
            className="inline-block bg-neon px-[44px] py-[16px] text-[18px] text-ink uppercase transition-colors hover:border hover:border-ink hover:bg-transparent"
          >
            {about.cta.label}
          </a>
        </div>
        <ul className="mt-12 grid gap-x-10 gap-y-6 border-t border-neon/40 pt-10 sm:grid-cols-2">
          {skills.map((skill) => (
            <SkillBar key={skill.label} skill={skill} />
          ))}
        </ul>
        <p className="mt-10 text-center text-[18px] leading-[1.5] text-body">{about.note}</p>
      </div>
    </section>
  )
}
