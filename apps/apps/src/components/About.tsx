import { ButtonLink } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" className="bg-white py-24 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold leading-tight text-night dark:text-white sm:text-4xl">
            We Believe that Interior beautifies the Total Architecture
          </h2>
          <p className="mt-6 leading-relaxed text-muted dark:text-gray-400">
            Inappropriate behavior is often laughed off as &ldquo;boys will be boys&rdquo; — women
            face higher conduct standards, especially in the workplace. That is why we craft
            interfaces that are as considerate as they are beautiful.
          </p>
          <ButtonLink
            href="#features"
            variant="outline"
            className="mt-8 h-[42px] rounded-full border-night px-10 text-night hover:border-transparent hover:bg-gradient-to-r hover:from-primary-500 hover:to-azure hover:text-white dark:border-gray-300 dark:text-gray-200"
          >
            see details
          </ButtonLink>
        </div>
        <img
          src="https://picsum.photos/seed/apps-about/640/560"
          alt="Apps app illustration"
          className="mx-auto w-full max-w-lg rounded-2xl shadow-2xl"
        />
      </div>
    </section>
  )
}
