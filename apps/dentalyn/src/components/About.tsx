import { useState, useEffect } from 'react'

const skills = [
  { label: 'Experience Dentist', percent: 80 },
  { label: 'Modern Equipment', percent: 65 },
  { label: 'Friendly Staff', percent: 85 },
] as const

export function About() {
  return (
    <section id="about" className="py-16 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <img
              src="https://picsum.photos/seed/dentalyn-about/600/450"
              alt="About our dental clinic"
              className="w-full rounded-lg object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="mb-2 text-2xl font-bold dark:text-white">About Us</h2>
            <div className="mb-6 h-1 w-12 bg-primary-400" />
            <p className="mb-8 text-sm leading-relaxed text-smoke dark:text-gray-400">
              Vestibulum condimentum, risus sedones honcus rutrum, salah lacus mollis zurna, nec
              finibusmi velit advertisis. Proin vitae odin quis magna aliquet laciniae. Etiam
              auctor, nisi vel. Pellentesque ultrices nisl quam iaculis, nec pulvinar augue.
            </p>
            <div className="space-y-5">
              {skills.map((skill) => (
                <SkillBar key={skill.label} label={skill.label} percent={skill.percent} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillBar({ label, percent }: { label: string; percent: number }) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setTimeout(() => setWidth(percent), 100)
  }, [percent])

  return (
    <div>
      <h6 className="mb-2 text-sm font-semibold dark:text-white">{label}</h6>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">
        <div
          className="h-full rounded-full bg-ink transition-[width] duration-1000 dark:bg-gray-300"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}
