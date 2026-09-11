import { useEffect, useRef, useState } from 'react'

const roles = ['Coach', 'Speaker', 'Mentor', 'Consultant']

export function Hero() {
  const [currentRole, setCurrentRole] = useState(roles[0])
  const indexRef = useRef(0)

  useEffect(() => {
    const interval = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % roles.length
      const role = roles[indexRef.current] as string
      setCurrentRole(role)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home-section"
      className="relative overflow-hidden bg-primary py-20 text-white md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
            I&apos;m Professional <span className="text-warning">{currentRole}</span>
          </h1>
          <p className="mb-8 text-lg text-white/80">
            Empowering individuals to reach their full potential through personalized coaching and
            mentorship programs.
          </p>
          <a
            href="#contact-section"
            className="inline-block rounded bg-warning px-10 py-3 text-base font-semibold text-white transition-colors hover:bg-yellow-500"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}
