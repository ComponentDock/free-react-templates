import { ButtonLink } from './button-link'

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            Hi, I&apos;m Alex Morgan
            <span className="text-primary-600 dark:text-primary-400">.</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg text-gray-600 dark:text-gray-400">
            I design and build fast, accessible web experiences for startups and small businesses.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#services">View my work</ButtonLink>
            <ButtonLink href="#contact" variant="outline">
              Get in touch
            </ButtonLink>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="/portrait.svg"
            alt="Portrait of Alex Morgan"
            className="h-64 w-64 rounded-full object-cover shadow-lg ring-4 ring-primary-100 sm:h-80 sm:w-80 dark:ring-primary-900/50"
          />
        </div>
      </div>
    </section>
  )
}
