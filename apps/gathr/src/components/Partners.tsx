import { cn } from '@free-react-templates/ui'

const partners = ['Partner 1', 'Partner 2', 'Partner 3', 'Partner 4', 'Partner 5']

export function Partners() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#18181c] md:text-4xl">
          Our Partners
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {partners.map((partner) => (
            <div
              key={partner}
              className={cn(
                'flex h-24 w-40 items-center justify-center',
                'rounded-lg bg-white text-lg font-semibold text-[#838383]',
                'shadow-sm transition hover:shadow-md',
              )}
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
