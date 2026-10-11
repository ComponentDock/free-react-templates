import { useState, type ChangeEvent, type FormEvent } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@free-react-templates/ui'
import { ADVENTURE_TYPES, IMAGES, PRICE_OPTIONS } from '../data/content'

interface SelectFieldProps {
  id: string
  label: string
  placeholder: string
  options: string[]
  value: string
  className: string
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

function SelectField({
  id,
  label,
  placeholder,
  options,
  value,
  className,
  onChange,
}: SelectFieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-3 block text-xs text-white">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          className="field-dark select-dark cursor-pointer"
          value={value}
          onChange={onChange}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white"
        />
      </div>
    </div>
  )
}

export function AdventureSearch() {
  const [destination, setDestination] = useState('')
  const [adventure, setAdventure] = useState('')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="offers" className="relative isolate overflow-hidden">
      <img
        src={IMAGES.find}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[#0b1030]/85" />

      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="text-center text-2xl font-light text-white sm:text-3xl">
          Find the Adventure of a lifetime
        </h2>

        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-5"
        >
          <div className="lg:w-[31%]">
            <label htmlFor="destination" className="mb-3 block text-xs text-white">
              Destination:
            </label>
            <input
              id="destination"
              className="field-dark"
              placeholder="Keyword here"
              value={destination}
              onChange={(event) => setDestination(event.target.value)}
            />
          </div>

          <SelectField
            id="adventure"
            label="Adventure type:"
            placeholder="Categories"
            options={ADVENTURE_TYPES}
            value={adventure}
            className="lg:w-[31%]"
            onChange={(event) => setAdventure(event.target.value)}
          />
          <SelectField
            id="min-price"
            label="Min price"
            placeholder="Price"
            options={PRICE_OPTIONS}
            value={minPrice}
            className="lg:w-[10%]"
            onChange={(event) => setMinPrice(event.target.value)}
          />
          <SelectField
            id="max-price"
            label="Max price"
            placeholder="Price"
            options={PRICE_OPTIONS}
            value={maxPrice}
            className="lg:w-[10%]"
            onChange={(event) => setMaxPrice(event.target.value)}
          />

          <Button
            type="submit"
            className="h-14 shrink-0 rounded-none bg-brand px-8 text-base font-medium text-white hover:bg-brand-dark lg:w-[14%]"
          >
            Find
          </Button>
        </form>

        {submitted ? (
          <p role="status" className="mt-8 text-center text-sm text-white">
            Searching trips in {destination || 'any destination'} — {adventure || 'any type'} ·{' '}
            {minPrice || '$0'}–{maxPrice || 'any price'}
          </p>
        ) : null}
      </div>
    </section>
  )
}
