import { Check } from 'lucide-react'
import { help } from '../data'

export function Help() {
  return (
    <section className="bg-ink py-[102px]" id="help">
      <div className="mx-auto max-w-[1176px] px-4">
        <h2 className="mb-14 text-center text-4xl font-bold text-white">{help.heading}</h2>
        <div className="mx-auto mb-10 grid max-w-4xl gap-8 md:grid-cols-2">
          {help.intro.map((paragraph) => (
            <p key={paragraph} className="text-sm leading-8 text-muted">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {help.columns.map((column, columnIndex) => (
            <ul key={columnIndex} className="pt-14">
              {column.map((item) => (
                <li key={item} className="mb-6 flex items-start gap-4">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                  <span className="text-lg font-semibold text-white">{item}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}
