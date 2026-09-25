import { Download, Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const colorVariants = [
  { name: 'Primary', bg: 'bg-brand', border: 'border-brand', text: 'text-white' },
  { name: 'Success', bg: 'bg-success', border: 'border-success', text: 'text-white' },
  { name: 'Danger', bg: 'bg-danger', border: 'border-danger', text: 'text-white' },
  { name: 'Warning', bg: 'bg-warning', border: 'border-warning', text: 'text-white' },
  { name: 'Info', bg: 'bg-info', border: 'border-info', text: 'text-white' },
  { name: 'Light', bg: 'bg-light', border: 'border-light', text: 'text-dark' },
  { name: 'Dark', bg: 'bg-dark', border: 'border-dark', text: 'text-white' },
] as const

export function BasicElements() {
  return (
    <section
      id="components"
      className="bg-[#1a1f3c] py-20"
      aria-labelledby="basic-elements-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="basic-elements-heading" className="font-heading text-3xl font-bold text-white">
          Basic Elements
        </h2>
        <p className="mt-2 text-gray-400">Buttons</p>

        {/* Pick your style */}
        <div className="mt-12">
          <h3 className="font-heading text-lg font-semibold text-white">Pick your style</h3>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <button
              type="button"
              className="rounded bg-brand px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Default
            </button>
            <button
              type="button"
              className="rounded-full bg-brand px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Round
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              <Star className="h-4 w-4" aria-hidden="true" />
              With Icon
            </button>
            <button
              type="button"
              aria-label="Icon only button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand-dark"
            >
              <Star className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="rounded border border-brand px-6 py-2 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
            >
              Simple
            </button>
          </div>
        </div>

        {/* Pick your size */}
        <div className="mt-12">
          <h3 className="font-heading text-lg font-semibold text-white">Pick your size</h3>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <button
              type="button"
              className="rounded-full bg-brand px-4 py-1 text-xs font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Small
            </button>
            <button
              type="button"
              className="rounded-full bg-brand px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Regular
            </button>
            <button
              type="button"
              className="rounded-full bg-brand px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Large
            </button>
            <button
              type="button"
              className="rounded-full border border-brand px-4 py-1 text-xs font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
            >
              Small
            </button>
            <button
              type="button"
              className="rounded-full border border-brand px-6 py-2 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
            >
              Regular
            </button>
            <button
              type="button"
              className="rounded-full border border-brand px-8 py-3 text-base font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
            >
              Large
            </button>
          </div>
        </div>

        {/* Pick your color */}
        <div className="mt-12">
          <h3 className="font-heading text-lg font-semibold text-white">Pick your color</h3>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            {colorVariants.map((variant) => (
              <button
                key={variant.name}
                type="button"
                className={cn(
                  'rounded-full px-6 py-2 text-sm font-semibold transition-colors',
                  variant.bg,
                  variant.text,
                )}
              >
                {variant.name}
              </button>
            ))}
            {colorVariants.map((variant) => (
              <button
                key={`${variant.name}-outlined`}
                type="button"
                className={cn(
                  'rounded-full border px-6 py-2 text-sm font-semibold transition-colors',
                  variant.border,
                  variant.name === 'Light'
                    ? 'text-light'
                    : variant.name === 'Dark'
                      ? 'text-dark'
                      : variant.text,
                  'hover:text-white',
                  variant.name !== 'Light' && variant.name !== 'Dark' && `hover:${variant.bg}`,
                )}
              >
                {variant.name}
              </button>
            ))}
          </div>
        </div>

        {/* Download CTA */}
        <div className="mt-16 text-center" id="download">
          <a
            href="#"
            className={cn(
              'inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-semibold text-white',
              'transition-colors hover:bg-brand-dark',
            )}
          >
            <Download className="h-5 w-5" aria-hidden="true" />
            Download Tools
          </a>
        </div>
      </div>
    </section>
  )
}
