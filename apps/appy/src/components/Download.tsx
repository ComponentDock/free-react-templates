import { StoreButtons } from './StoreButtons'

export function Download() {
  return (
    <section id="download" className="bg-night py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Download The App</h2>
        <p className="mt-4 leading-relaxed text-white/75">
          Get Appy on your favorite store and start building today.
        </p>
        <div className="mt-10 flex justify-center">
          <StoreButtons />
        </div>
      </div>
    </section>
  )
}
