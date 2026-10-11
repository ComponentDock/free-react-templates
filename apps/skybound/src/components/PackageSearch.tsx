import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'
import { SEARCH } from '../data/content'
import { fieldErrors, packageSearchSchema, type PackageSearchValues } from '../lib/forms'

type FieldName = keyof PackageSearchValues

const EMPTY_FORM: PackageSearchValues = {
  destination: '',
  checkIn: '',
  checkOut: '',
  adults: '',
  children: '',
}

export function PackageSearch() {
  const [values, setValues] = useState<PackageSearchValues>(EMPTY_FORM)
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({})
  const [sent, setSent] = useState(false)

  function setField(field: FieldName, value: string) {
    setValues((current) => ({ ...current, [field]: value }))
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const parsed = packageSearchSchema.safeParse(values)
    if (!parsed.success) {
      setErrors(fieldErrors<FieldName>(parsed.error))
      setSent(false)
      return
    }
    setErrors({})
    setSent(true)
  }

  return (
    <section id="search" className="section-gap bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        <div>
          <h1 className="section-title">
            {SEARCH.titleFirst}
            <br />
            {SEARCH.titleSecond}
          </h1>
          {SEARCH.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mb-6 max-w-lg">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="search-panel">
          <h4 className="mb-6 text-2xl text-white">{SEARCH.panelTitle}</h4>
          <form onSubmit={onSubmit} noValidate className="text-left">
            <div className="mb-4">
              <label htmlFor="destination" className="sr-only">
                {SEARCH.destinationPlaceholder}
              </label>
              <input
                id="destination"
                name="destination"
                type="text"
                placeholder={SEARCH.destinationPlaceholder}
                value={values.destination}
                onChange={(event) => setField('destination', event.target.value)}
                className="search-field"
              />
              {errors.destination ? (
                <p role="alert" className="mt-1 text-sm text-gold">
                  {errors.destination}
                </p>
              ) : null}
            </div>

            <div className="mb-4">
              <label htmlFor="check-in" className="sr-only">
                {SEARCH.checkInPlaceholder}
              </label>
              <input
                id="check-in"
                name="checkIn"
                type="date"
                placeholder={SEARCH.checkInPlaceholder}
                value={values.checkIn}
                onChange={(event) => setField('checkIn', event.target.value)}
                className="search-field"
              />
              {errors.checkIn ? (
                <p role="alert" className="mt-1 text-sm text-gold">
                  {errors.checkIn}
                </p>
              ) : null}
            </div>

            <div className="mb-4">
              <label htmlFor="check-out" className="sr-only">
                {SEARCH.checkOutPlaceholder}
              </label>
              <input
                id="check-out"
                name="checkOut"
                type="date"
                placeholder={SEARCH.checkOutPlaceholder}
                value={values.checkOut}
                onChange={(event) => setField('checkOut', event.target.value)}
                className="search-field"
              />
              {errors.checkOut ? (
                <p role="alert" className="mt-1 text-sm text-gold">
                  {errors.checkOut}
                </p>
              ) : null}
            </div>

            <div className="mb-4">
              <label htmlFor="adults" className="sr-only">
                Adults
              </label>
              <select
                id="adults"
                name="adults"
                value={values.adults}
                onChange={(event) => setField('adults', event.target.value)}
                className="search-field"
              >
                <option value="">Adults</option>
                {SEARCH.travellers.map((traveller) => (
                  <option key={traveller.value} value={traveller.value}>
                    {traveller.label}
                  </option>
                ))}
              </select>
              {errors.adults ? (
                <p role="alert" className="mt-1 text-sm text-gold">
                  {errors.adults}
                </p>
              ) : null}
            </div>

            <div className="mb-8">
              <label htmlFor="children" className="sr-only">
                Children
              </label>
              <select
                id="children"
                name="children"
                value={values.children}
                onChange={(event) => setField('children', event.target.value)}
                className="search-field"
              >
                <option value="">Children</option>
                {SEARCH.travellers.map((traveller) => (
                  <option key={traveller.value} value={traveller.value}>
                    {traveller.label}
                  </option>
                ))}
              </select>
              {errors.children ? (
                <p role="alert" className="mt-1 text-sm text-gold">
                  {errors.children}
                </p>
              ) : null}
            </div>

            <div className="text-center">
              <Button type="submit" className="main-btn main-btn-azure">
                {SEARCH.submit}
              </Button>
            </div>

            {sent ? (
              <p role="status" className="mt-6 text-center text-sm text-white">
                Thanks! We will send the matching packages to your inbox.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  )
}
