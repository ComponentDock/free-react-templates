import { cn } from '@free-react-templates/ui'

const logos = ['ClientCo', 'TechHub', 'InnoLab', 'GrowthX', 'DataPrime', 'CloudBase']

interface ClientsProps {
  className?: string
}

export function Clients({ className }: ClientsProps) {
  return (
    <section className={cn('border-t border-gray-100 bg-white py-16', className)}>
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <p className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-gray-400">
          Trusted by leading companies
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12">
          {logos.map((name) => (
            <div
              key={name}
              className="text-xl font-bold text-gray-300 transition-colors hover:text-brand"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
