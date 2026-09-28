import { cn } from '@free-react-templates/ui'

const skills = [
  { label: 'UI Design', percent: 60 },
  { label: 'UX Research', percent: 89 },
  { label: 'Illustration', percent: 95 },
] as const

export function AboutMe() {
  return (
    <section data-testid="about-me" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="space-y-5">
          <p className="text-sm font-medium uppercase tracking-widest text-brand-500 dark:text-brand-400">
            About Me
          </p>
          <h2 className="font-heading text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            Passionate About Creating Digital Experiences
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            I&apos;m a product designer with over 8 years of experience working with startups and
            established brands. I believe that great design is invisible — it just works. My
            approach combines deep user research with a keen eye for aesthetics to create products
            people love.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            When I&apos;m not designing, you can find me sketching in coffee shops, exploring new
            hiking trails, or mentoring aspiring designers in the community.
          </p>
        </div>

        <div className="space-y-6">
          {skills.map((skill) => (
            <div key={skill.label}>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  {skill.label}
                </span>
                <span className="text-sm font-bold text-brand-500 dark:text-brand-400">
                  {skill.percent}%
                </span>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                <div
                  className={cn('h-full rounded-full bg-brand-400 transition-all duration-700')}
                  style={{ width: `${skill.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
