import { useState, type FormEvent } from 'react'
import { z } from 'zod'
import { Search } from 'lucide-react'
import { Button, cn } from '@free-react-templates/ui'

const tabs = [
  { id: 'rent', label: 'Car Rental' },
  { id: 'buy', label: 'Buy Car' },
] as const

type TabId = (typeof tabs)[number]['id']

const searchSchema = z.object({
  year: z.string().min(1, 'Please select a year'),
  brand: z.string().min(1, 'Please select a brand'),
  model: z.string(),
  mileage: z.string(),
})

type SearchValues = z.infer<typeof searchSchema>

const initialValues: SearchValues = { year: '', brand: '', model: '', mileage: '' }

const years = ['2020', '2019', '2018', '2017', '2016', '2015'] as const
const brands = ['Acura', 'Audi', 'Bentley', 'BMW', 'Bugatti'] as const
const models = ['Q3', 'A4', 'Aventador', 'Cayenne Turbo S', 'M5', 'E-Tron'] as const
const mileages = ['Any', '5,000', '10,000', '20,000', '40,000', '60,000'] as const

const fields = [
  { key: 'year', label: 'Select Year', options: years },
  { key: 'brand', label: 'Select Brand', options: brands },
  { key: 'model', label: 'Select Model', options: models },
  { key: 'mileage', label: 'Select Mileage', options: mileages },
] as const

const headings: Record<TabId, string> = {
  rent: 'Find Your Dream Car',
  buy: 'Buy Your Dream Car',
}

export function CarSearch() {
  const [tab, setTab] = useState<TabId>('rent')
  const [values, setValues] = useState<SearchValues>(initialValues)
  const [errors, setErrors] = useState<Partial<Record<'year' | 'brand', string>>>({})
  const [confirmation, setConfirmation] = useState('')

  const handleChange = (field: keyof SearchValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
    if (field === 'year' || field === 'brand') {
      setErrors((current) => ({ ...current, [field]: undefined }))
    }
  }

  const handleTabChange = (next: TabId) => {
    setTab(next)
    setConfirmation('')
    setErrors({})
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = searchSchema.safeParse(values)
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors
      setErrors({
        year: fieldErrors.year?.[0],
        brand: fieldErrors.brand?.[0],
      })
      setConfirmation('')
      return
    }
    const mode = tab === 'rent' ? 'rental' : 'for-sale'
    setConfirmation(
      `Thanks! We'll show you ${result.data.brand} ${mode} cars from ${result.data.year}.`,
    )
    setValues(initialValues)
    setErrors({})
  }

  return (
    <div className="w-full rounded-xl bg-white shadow-2xl dark:bg-gray-900">
      <div className="flex">
        {tabs.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => handleTabChange(item.id)}
            aria-pressed={tab === item.id}
            className={cn(
              'flex-1 px-4 py-3.5 text-sm font-bold uppercase tracking-wide transition-colors',
              tab === item.id
                ? 'bg-brand text-white'
                : 'bg-paper text-ink hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700',
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} noValidate className="p-6 sm:p-8">
        <h2 className="font-display text-xl font-black text-ink dark:text-white">
          {headings[tab]}
        </h2>
        <p className="mt-1 text-sm text-mist">Search the widest selection of cars.</p>

        <div className="mt-6 space-y-4">
          {fields.map((field) => (
            <div key={field.key}>
              <label
                htmlFor={`search-${field.key}`}
                className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink dark:text-white"
              >
                {field.label}
              </label>
              <select
                id={`search-${field.key}`}
                value={values[field.key]}
                onChange={(event) => handleChange(field.key, event.target.value)}
                aria-invalid={Boolean(errors[field.key as 'year' | 'brand'])}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/30 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              >
                <option value="">{field.label}</option>
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors[field.key as 'year' | 'brand'] && (
                <p className="mt-1 text-xs font-semibold text-red-600">
                  {errors[field.key as 'year' | 'brand']}
                </p>
              )}
            </div>
          ))}
        </div>

        <Button type="submit" size="lg" className="mt-6 w-full uppercase">
          <Search className="h-4 w-4" aria-hidden="true" />
          Search
        </Button>

        {confirmation && (
          <p className="mt-4 rounded-lg bg-green-50 px-4 py-3 text-sm font-semibold text-green-700 dark:bg-green-950 dark:text-green-300">
            {confirmation}
          </p>
        )}
      </form>
    </div>
  )
}
