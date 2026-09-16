import { Button } from '@free-react-templates/ui'

export function GetQuote() {
  return (
    <section className="bg-brand py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
        <h2 className="font-section text-2xl font-bold text-ink">
          Looking for a quality constructor?
        </h2>
        <Button className="rounded bg-ink px-8 py-3 font-heading text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-ink/90">
          Get a Quote
        </Button>
      </div>
    </section>
  )
}
