import { ButtonLink } from '@free-react-templates/ui'

export function AppSplit() {
  return (
    <section id="about" className="bg-paper py-20 dark:bg-gray-900">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute -inset-4 rounded-2xl bg-brand/10" aria-hidden="true" />
          <img
            src="https://picsum.photos/seed/wordpressapp-split/1200/900"
            alt="WordpressApp on a laptop and phone"
            className="relative w-full rounded-xl object-cover shadow-xl"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-ink dark:text-white">Built for every device</h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-mist dark:text-gray-400">
            One seamless experience across your phone, tablet, and desktop. Sync your data
            everywhere and pick up right where you left off.
          </p>
          <ButtonLink
            href="#contact"
            className="mt-8 inline-block rounded bg-brand px-7 py-3 text-sm font-semibold text-white transition-colors hover:brightness-95"
          >
            Get started
          </ButtonLink>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-2xl bg-brand/10" aria-hidden="true" />
          <img
            src="https://picsum.photos/seed/wordpressapp-split/1200/900"
            alt="WordpressApp on a laptop and phone"
            className="relative w-full rounded-xl object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}
