import { useState } from 'react'
import { z } from 'zod'
import { Button, cn } from '@free-react-templates/ui'

const donationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Enter a valid email address'),
  amount: z.coerce.number().positive('Enter an amount greater than zero'),
})

type DonationValues = { name: string; email: string; amount: string }
type DonationErrors = Partial<Record<keyof DonationValues, string>>

const initialValues: DonationValues = { name: '', email: '', amount: '' }

export function DonateForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState<DonationErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field: keyof DonationValues, value: string) => {
    setValues((v) => ({ ...v, [field]: value }))
    setErrors((e) => ({ ...e, [field]: undefined }))
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const result = donationSchema.safeParse(values)
    if (!result.success) {
      setErrors(result.error.flatten().fieldErrors as DonationErrors)
      setSubmitted(false)
      return
    }
    setErrors({})
    setSubmitted(true)
  }

  return (
    <section
      id="donate"
      aria-label="Donate now"
      className="site-section bg-cover bg-center py-10 md:py-20"
      style={{
        backgroundImage: "url('https://picsum.photos/seed/benefact-donate/1600/900')",
      }}
    >
      <div className="bg-primary/80">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-10 md:grid-cols-2 md:py-20">
          <img
            src="https://picsum.photos/seed/benefact-donate-photo/600/500"
            alt=""
            className="w-full rounded shadow-lg"
          />
          <div className="h-full bg-white p-6 shadow-lg">
            <h3 className="font-script text-3xl text-ink">Donate Now</h3>
            <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
              <div>
                <label htmlFor="donate-name" className="mb-1 block text-sm font-light text-ink">
                  Name
                </label>
                <input
                  id="donate-name"
                  type="text"
                  value={values.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className={cn(
                    'w-full rounded border border-gray-300 px-3 py-2 font-light text-ink focus:border-primary focus:outline-none',
                    errors.name && 'border-danger',
                  )}
                />
                {errors.name && <p className="mt-1 text-sm text-danger">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="donate-email" className="mb-1 block text-sm font-light text-ink">
                  Email
                </label>
                <input
                  id="donate-email"
                  type="email"
                  value={values.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className={cn(
                    'w-full rounded border border-gray-300 px-3 py-2 font-light text-ink focus:border-primary focus:outline-none',
                    errors.email && 'border-danger',
                  )}
                />
                {errors.email && <p className="mt-1 text-sm text-danger">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="donate-amount" className="mb-1 block text-sm font-light text-ink">
                  Amount in dollar
                </label>
                <input
                  id="donate-amount"
                  type="number"
                  min="1"
                  value={values.amount}
                  onChange={(e) => handleChange('amount', e.target.value)}
                  className={cn(
                    'w-full rounded border border-gray-300 px-3 py-2 font-light text-ink focus:border-primary focus:outline-none',
                    errors.amount && 'border-danger',
                  )}
                />
                {errors.amount && <p className="mt-1 text-sm text-danger">{errors.amount}</p>}
              </div>
              {submitted && (
                <p className="rounded bg-mist p-3 text-sm text-ink">
                  Thank you! Your donation makes a difference.
                </p>
              )}
              <Button
                type="submit"
                className="rounded-none bg-primary text-white hover:bg-primary-700"
              >
                Donate Now
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
