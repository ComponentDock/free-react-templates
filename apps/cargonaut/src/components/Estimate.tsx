import { useState, type ChangeEvent, type FormEvent } from 'react'
import { PhoneCall } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import {
  brand,
  cities,
  defaultDelivery,
  defaultDeparture,
  defaultProductSize,
  defaultProductType,
  productSizes,
  productTypes,
} from '../data'
import { Locations } from './Locations'

const estimateImage = 'https://picsum.photos/seed/cargonaut-estimate/1600/900'

const fieldClass =
  'w-full border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-brand focus:outline-none'

export function Estimate() {
  const [form, setForm] = useState({
    productType: defaultProductType,
    productSize: defaultProductSize,
    departure: defaultDeparture,
    delivery: defaultDelivery,
    name: '',
    phone: '',
  })
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target
    setForm((previous) => ({ ...previous, [name]: value }))
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const missing = form.name.trim() === '' || form.phone.trim() === ''
    setError(missing ? 'Add your name and a contact number so we can send the estimate.' : '')
    setSent(!missing)
  }

  return (
    <section id="estimate" className="relative isolate overflow-hidden">
      <img
        src={estimateImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 -z-10 bg-navy/95" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-4 py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-normal text-white">Get free Estimate</h2>
            <p className="mt-4 text-white/70">
              Esteem spirit temper too say adieus who direct esteem. It look estee luckily or
              picture placing.
            </p>
            <ButtonLink
              href={`tel:${brand.quotePhone.replace(/\s/g, '')}`}
              className="mt-6 rounded-none bg-brand px-8 py-3 text-base font-medium text-white hover:bg-white hover:text-brand"
            >
              <PhoneCall className="h-5 w-5" aria-hidden="true" />
              {brand.quotePhone}
            </ButtonLink>
          </div>

          <div className="md:col-span-8">
            <form onSubmit={onSubmit} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm text-white/80">
                  Product type
                  <select
                    name="productType"
                    aria-label="Product type"
                    className={`${fieldClass} mt-2`}
                    value={form.productType}
                    onChange={onChange}
                  >
                    {productTypes.map((type) => (
                      <option key={type} value={type} className="text-navy">
                        {type}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block text-sm text-white/80">
                  Product size
                  <select
                    name="productSize"
                    aria-label="Product size"
                    className={`${fieldClass} mt-2`}
                    value={form.productSize}
                    onChange={onChange}
                  >
                    {productSizes.map((size) => (
                      <option key={size} value={size} className="text-navy">
                        {size}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block text-sm text-white/80">
                  City of departure
                  <select
                    name="departure"
                    aria-label="City of departure"
                    className={`${fieldClass} mt-2`}
                    value={form.departure}
                    onChange={onChange}
                  >
                    {cities.map((city) => (
                      <option key={city} value={city} className="text-navy">
                        {city}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block text-sm text-white/80">
                  City of delivery
                  <select
                    name="delivery"
                    aria-label="City of delivery"
                    className={`${fieldClass} mt-2`}
                    value={form.delivery}
                    onChange={onChange}
                  >
                    {cities.map((city) => (
                      <option key={city} value={city} className="text-navy">
                        {city}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block text-sm text-white/80">
                  Name
                  <input
                    name="name"
                    aria-label="Name"
                    className={`${fieldClass} mt-2`}
                    placeholder="Your name"
                    value={form.name}
                    onChange={onChange}
                  />
                </label>

                <label className="block text-sm text-white/80">
                  Contact number
                  <input
                    name="phone"
                    aria-label="Contact number"
                    className={`${fieldClass} mt-2`}
                    placeholder="Your phone"
                    value={form.phone}
                    onChange={onChange}
                  />
                </label>
              </div>

              <button
                type="submit"
                className="mt-8 border border-brand px-10 py-3 text-sm uppercase tracking-[3px] text-brand transition-colors hover:bg-brand hover:text-white"
              >
                Send Estimate
              </button>

              {error !== '' && (
                <p role="alert" className="mt-4 text-sm text-brand-300">
                  {error}
                </p>
              )}
              {sent && (
                <p role="status" className="mt-4 text-sm text-white">
                  Thanks {form.name} — your estimate is on its way to {form.phone}.
                </p>
              )}
            </form>
          </div>
        </div>

        <Locations />
      </div>
    </section>
  )
}
