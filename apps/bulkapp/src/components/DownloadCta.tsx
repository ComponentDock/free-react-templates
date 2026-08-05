import { Download, Play } from 'lucide-react'

const stores = [
  { name: 'Available on App Store', icon: Download },
  { name: 'Available on Google Play', icon: Play },
] as const

export function DownloadCta() {
  return (
    <section className="bg-gradient-to-r from-brand-start to-brand-end py-20">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
          Download This App Today!
        </h2>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-white/90">
          It won&rsquo;t be a bigger problem to find one video game lover in your neighbor. Since
          the introduction of Virtual Game, it has been achieving great heights so far as its
          popularity and technological advancement are concerned.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {stores.map((store) => {
            const Icon = store.icon
            return (
              <a
                key={store.name}
                href="#home"
                className="flex items-center gap-3 rounded-md bg-white px-8 py-3 font-semibold text-primary-600 transition-colors hover:bg-white/90"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
                {store.name}
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
