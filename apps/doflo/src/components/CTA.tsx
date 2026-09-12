import { ArrowRight } from 'lucide-react'

const links = [
  { label: 'Discuss project', href: '#contact' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export function CTA() {
  return (
    <section className="bg-brand-400 py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Let&apos;s create something awesome together
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="inline-flex items-center gap-2 rounded-full border border-white bg-white px-6 py-3 font-medium text-brand-400 transition-colors hover:bg-brand-50"
            >
              {link.label} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
