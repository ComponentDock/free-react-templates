import { DropdownColumn } from './DropdownColumn'

const dropdownItems = ['Dropdown', 'Active', 'Something else here', '---', 'Separated link']
const standardItems = ['Action', 'Another action', 'Something else here', '---', 'Separated link']

const columns = [
  { title: 'Dropdown Variation', items: dropdownItems, direction: 'dropdown' as const },
  { title: 'Dropup Variation', items: standardItems, direction: 'dropup' as const },
  { title: 'Dropright Variation', items: standardItems, direction: 'dropright' as const },
  { title: 'Dropleft Variation', items: standardItems, direction: 'dropleft' as const },
]

export function DropdownShowcase() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-28">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-medium text-black">Dropdown</h1>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {columns.map((col) => (
          <DropdownColumn
            key={col.title}
            title={col.title}
            items={col.items}
            direction={col.direction}
          />
        ))}
      </div>
    </section>
  )
}
