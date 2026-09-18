import { cn } from '@free-react-templates/ui'
import { Check } from 'lucide-react'

const highlights = [
  'Professional and experienced team',
  'Creative and innovative solutions',
  'Dedicated project management',
  '24/7 customer support',
  'Results-driven approach',
] as const

export function About() {
  return (
    <section id="about" aria-label="About" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="flex justify-center lg:justify-start">
          <img
            src="https://picsum.photos/seed/mortar-about/560/420"
            alt="Team collaborating on a project"
            className="h-auto w-full max-w-md rounded shadow-xl"
            loading="lazy"
          />
        </div>

        <div>
          <h2 className="text-3xl font-medium leading-snug text-ink dark:text-gray-100">
            Creative Agency <span className="block text-primary-400">That Delivers</span>
          </h2>
          <p className="mt-6 leading-relaxed text-smoke dark:text-gray-400">
            We are a passionate team of designers, developers, and strategists dedicated to crafting
            exceptional digital experiences. With years of industry expertise, we transform ideas
            into impactful realities that drive business growth.
          </p>
          <ul className="mt-8 space-y-3">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm text-smoke dark:text-gray-300"
              >
                <span
                  className={cn(
                    'flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-400 dark:bg-primary-900/40',
                  )}
                >
                  <Check className="h-3 w-3" aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
