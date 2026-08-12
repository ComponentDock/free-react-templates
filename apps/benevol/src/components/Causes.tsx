import { CAUSES } from '../data'

/**
 * Causes — three-column grid of six cause cards (one column on mobile),
 * each with a grey icon, an orange uppercase heading, and a paragraph.
 */
export function Causes() {
  return (
    <section aria-label="Causes we support" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {CAUSES.map((cause) => {
            const Icon = cause.icon
            return (
              <div key={cause.title} className="text-center">
                <Icon className="mx-auto mb-3 h-12 w-12 text-secondary" aria-hidden="true" />
                <h3 className="font-display text-xl uppercase tracking-[0.1rem] text-primary-600">
                  {cause.title}
                </h3>
                <p className="mt-3 text-gray-500">{cause.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
