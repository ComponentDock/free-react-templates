import { Search } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const models = ['Model 1', 'Model 2', 'Model 3', 'Model 4', 'Model 5']
const brands = ['Audi', 'Mercedes', 'BMW', 'Ford', 'Toyota']
const years = ['2019', '2018', '2017', '2016', '2015', '2014']
const prices = ['$50', '$100', '$150', '$200', '$250']

interface FilterSelectProps {
  id: string
  label: string
  options: readonly string[]
}

function FilterSelect({ id, label, options }: FilterSelectProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-mist"
      >
        {label}
      </label>
      <select
        id={id}
        defaultValue=""
        className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-brand"
      >
        <option value="">{label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export function SearchBar() {
  return (
    <section aria-label="Vehicle search filters" className="bg-paper py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="font-display text-2xl font-extrabold text-ink">Choose A Perfect Car</h2>
          <form className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5" noValidate>
            <FilterSelect id="select-model" label="Select Model" options={models} />
            <FilterSelect id="select-brand" label="Select Brand" options={brands} />
            <FilterSelect id="year-model" label="Year Model" options={years} />
            <FilterSelect id="price-limit" label="Price Limit" options={prices} />
            <div className="flex items-end">
              <Button type="submit" size="lg" className="w-full">
                <Search className="h-4 w-4" aria-hidden="true" />
                Search
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
