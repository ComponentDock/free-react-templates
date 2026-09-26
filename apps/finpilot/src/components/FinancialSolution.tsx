import { cn } from '@free-react-templates/ui'

export default function FinancialSolution() {
  return (
    <section id="pages" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            <h2 className="mb-4 text-3xl font-bold text-ink leading-snug">
              Gives you the best Financial solution for business
            </h2>
            <div className="mb-6 h-1 w-16 rounded bg-brand" />
            <p className="mb-6 text-mist leading-relaxed">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
              quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
            </p>
            <a
              href="#"
              className={cn(
                'inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark',
              )}
            >
              Learn More
            </a>
          </div>

          {/* Image */}
          <div className="relative overflow-hidden rounded-xl">
            <img
              src="https://picsum.photos/seed/finpilot-finance/600/400"
              alt="Financial solutions"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
