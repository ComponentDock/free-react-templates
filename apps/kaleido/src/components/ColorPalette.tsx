import { cn } from '@free-react-templates/ui'

interface SwatchProps {
  name: string
  color: string
  className?: string
}

function Swatch({ name, color, className }: SwatchProps) {
  return (
    <div className={cn('flex flex-col', className)}>
      <div
        className="flex h-20 items-center justify-center rounded-lg text-sm font-semibold text-white sm:h-24"
        style={{ backgroundColor: color }}
      >
        {name}
      </div>
    </div>
  )
}

const swatches: Array<{ name: string; color: string }> = [
  { name: 'Primary', color: '#0ea5e9' },
  { name: 'Secondary', color: '#6c757d' },
  { name: 'Success', color: '#28a745' },
  { name: 'Info', color: '#17a2b8' },
  { name: 'Warning', color: '#ffc107' },
  { name: 'Danger', color: '#dc3545' },
  { name: 'Indigo', color: '#6f42c1' },
  { name: 'Dark', color: '#343a40' },
  { name: 'Teal', color: '#20c997' },
]

export function ColorPalette() {
  return (
    <section id="colors" className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="mb-10 text-center font-display text-3xl font-bold text-gray-900 dark:text-white">
          Color Scheme
        </h2>
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {swatches.map((s) => (
            <Swatch key={s.name} name={s.name} color={s.color} />
          ))}
        </div>
      </div>
    </section>
  )
}
