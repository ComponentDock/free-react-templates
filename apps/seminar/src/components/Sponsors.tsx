import { ButtonLink } from '@free-react-templates/ui'

const SPONSORS = ['Acme Corp', 'DesignHub', 'CodeBase', 'PixelForge', 'TechWave', 'StartupLab']

export function Sponsors() {
  return (
    <section id="sponsors" className="py-20 bg-ink">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">Sponsors</h2>
          <div className="mx-auto h-1 w-16 rounded bg-gradient-to-r from-primary-700 to-primary-400" />
          <p className="mt-6 max-w-xl mx-auto text-text text-sm leading-relaxed">
            Supported by industry leaders who believe in advancing web design.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
          {SPONSORS.map((name) => (
            <div
              key={name}
              className="flex h-24 items-center justify-center rounded border border-border bg-surface text-sm font-semibold text-text/60"
            >
              {name}
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <ButtonLink
            href="#sponsor"
            className="bg-gradient-to-r from-primary-700 to-primary-400 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white hover:opacity-90 transition-opacity"
          >
            Be a Sponsor
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
