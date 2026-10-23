import { StoreButtons } from './StoreButtons'

export function Cta() {
  return (
    <section className="bg-gradient-to-b from-primary-500 to-azure py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Download This App Today!
        </h2>
        <p className="mt-6 leading-relaxed text-white/85">
          It won&rsquo;t be a bigger problem to find one video game lover in your neighbor. Since
          the introduction of Virtual Game, it has been achieving great heights so far as its
          popularity and technological advancement are concerned.
        </p>
        <div className="mt-10">
          <StoreButtons />
        </div>
      </div>
    </section>
  )
}
