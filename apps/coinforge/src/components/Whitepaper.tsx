import { Download } from 'lucide-react'

const languages = ['English', 'Spanish', 'Russian', 'Arabic', 'Portuguese']

export function Whitepaper() {
  return (
    <section id="whitepaper" className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="mb-2 text-sm uppercase tracking-wider text-coral">Whitepaper</p>
        <h2 className="mb-12 text-3xl font-bold text-white md:text-4xl">Download Documentation</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {languages.map((lang) => (
            <button
              key={lang}
              type="button"
              className="group flex flex-col items-center gap-3 rounded-xl bg-brand/40 px-8 py-6 transition-colors hover:bg-brand/60"
            >
              <Download
                className="h-8 w-8 text-light/60 group-hover:text-white"
                aria-hidden="true"
              />
              <span className="text-sm font-medium text-light">{lang}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
