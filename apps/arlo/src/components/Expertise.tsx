import { Code2, Palette, Server } from 'lucide-react'

const skills = [
  {
    title: 'Frontend',
    blurb:
      'React, TypeScript, and modern CSS — building fast, accessible interfaces with attention to every detail.',
    icon: Code2,
  },
  {
    title: 'Backend',
    blurb:
      'Node.js, databases, and APIs — designing robust services that scale gracefully under real traffic.',
    icon: Server,
  },
  {
    title: 'Design',
    blurb:
      'From wireframes to design systems — crafting visual identities that are both beautiful and usable.',
    icon: Palette,
  },
]

export function Expertise() {
  return (
    <section id="skills" className="bg-gray-50 py-20 dark:bg-gray-900 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            My Expertise
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            A versatile skill set spanning frontend development, backend engineering, and design.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {skills.map((skill) => {
            const Icon = skill.icon
            return (
              <div
                key={skill.title}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-800"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-400">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-gray-900 dark:text-white">
                  {skill.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {skill.blurb}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
