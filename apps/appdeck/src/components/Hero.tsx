import { LinkIcon, ShoppingCart } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-neutral-900">
      <div
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage:
            'linear-gradient(rgba(53, 53, 53, 0.9), rgba(53, 53, 53, 0.9)), url(https://picsum.photos/seed/appdeck-hero/1600/900)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto flex min-h-[80vh] max-w-4xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
        <h1 className="font-display text-5xl font-extrabold uppercase leading-tight tracking-widest text-white sm:text-6xl">
          Appdeck
        </h1>
        <p className="mt-4 text-xl uppercase tracking-wider text-gray-100 sm:text-2xl">
          Apps Landing Html Template
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink
            href="#contact"
            className="rounded-full bg-accent-500 px-9 py-3.5 text-white hover:bg-accent-600"
          >
            <ShoppingCart className="mr-2 h-4 w-4" aria-hidden="true" />
            Purchase Now
          </ButtonLink>
          <ButtonLink
            href="#showcase"
            className="rounded-full border-2 border-accent-500 px-9 py-3.5 text-accent-500 hover:bg-accent-500 hover:text-white"
          >
            <LinkIcon className="mr-2 h-4 w-4" aria-hidden="true" />
            View Demo
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
