import { useState } from 'react'

export function CTA() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section
      className="relative overflow-hidden bg-bg-light px-6 py-28 transition-colors duration-500 md:px-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Red background fill animation */}
      <div
        className={`absolute inset-0 bg-brand transition-transform duration-500 ease-in-out ${
          isHovered ? 'translate-y-0' : 'translate-y-full'
        }`}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h2
          className={`text-4xl font-bold transition-colors duration-500 md:text-6xl ${
            isHovered ? 'text-white' : 'text-ink'
          }`}
        >
          {isHovered ? "Let's chat we are good people." : 'Start a Project.'}
        </h2>
      </div>
    </section>
  )
}
