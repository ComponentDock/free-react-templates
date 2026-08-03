import { SocialLinks } from './SocialLinks'

export function ErrorSection() {
  return (
    <section className="relative flex min-h-[65vh] items-center justify-center overflow-hidden">
      <div
        role="img"
        aria-label="Photographic background"
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/scarlet-404/1600/900)',
        }}
      >
        <div className="h-full w-full bg-brand/70" aria-hidden="true" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <h1 className="font-display text-[9rem] font-black uppercase leading-none tracking-[0.08em] text-white sm:text-[11rem] lg:text-[13.75rem]">
          404
        </h1>
        <h2 className="font-display mt-5 text-lg font-bold uppercase tracking-wide text-white sm:text-2xl">
          We are sorry, but the page you requested was not found
        </h2>

        <div className="mt-8 flex flex-col items-center justify-center gap-2 sm:flex-row">
          <a
            href="/"
            className="inline-block rounded-full bg-white px-7 py-3.5 text-base font-bold uppercase tracking-wide text-brand transition-opacity hover:opacity-90"
          >
            Go Home
          </a>
          <a
            href="mailto:hello@example.com"
            className="inline-block rounded-full border-2 border-white/90 px-7 py-3.5 text-base font-bold uppercase tracking-wide text-white/90 transition-opacity hover:opacity-90"
          >
            Contact us
          </a>
        </div>

        <div className="mt-8 flex justify-center">
          <SocialLinks />
        </div>
      </div>
    </section>
  )
}
