import { User, Mail, CreditCard, MapPin } from 'lucide-react'
import { FormField } from './FormField'

export interface BasicDetailsData {
  firstName: string
  lastName: string
  email: string
  userId: string
  country: string
  state: string
  city: string
}

export interface StepBasicDetailsProps {
  data: BasicDetailsData
  onChange: (data: BasicDetailsData) => void
  errors: Partial<Record<keyof BasicDetailsData, string>>
}

export function StepBasicDetails({ data, onChange, errors }: StepBasicDetailsProps) {
  const update = (key: keyof BasicDetailsData, value: string) => onChange({ ...data, [key]: value })

  return (
    <section aria-labelledby="step-basic-heading">
      <h3
        id="step-basic-heading"
        className="mb-7 text-center text-lg font-black uppercase tracking-widest text-surface-800"
      >
        Basic Details
      </h3>
      <div className="flex flex-col gap-5 md:flex-row md:gap-5">
        <FormField
          label="firstName"
          placeholder="First Name"
          icon={<User className="h-4 w-4" />}
          value={data.firstName}
          onChange={(v) => update('firstName', v)}
          error={errors.firstName}
          required
        />
        <FormField
          label="lastName"
          placeholder="Last Name"
          icon={<User className="h-4 w-4" />}
          value={data.lastName}
          onChange={(v) => update('lastName', v)}
          error={errors.lastName}
          required
        />
      </div>
      <div className="mt-5 flex flex-col gap-5 md:flex-row md:gap-5">
        <FormField
          label="email"
          placeholder="Email ID"
          icon={<Mail className="h-4 w-4" />}
          value={data.email}
          onChange={(v) => update('email', v)}
          error={errors.email}
          type="email"
          required
        />
        <FormField
          label="userId"
          placeholder="Your User ID"
          icon={<CreditCard className="h-4 w-4" />}
          value={data.userId}
          onChange={(v) => update('userId', v)}
          error={errors.userId}
          required
        />
      </div>
      <div className="mt-5 flex flex-col gap-5 md:flex-row md:gap-5">
        <FormField
          label="country"
          placeholder="Country"
          icon={<MapPin className="h-4 w-4" />}
          value={data.country}
          onChange={(v) => update('country', v)}
          error={errors.country}
          required
        />
        <FormField
          label="state"
          placeholder="State"
          icon={<MapPin className="h-4 w-4" />}
          value={data.state}
          onChange={(v) => update('state', v)}
          error={errors.state}
          required
        />
        <FormField
          label="city"
          placeholder="City"
          icon={<MapPin className="h-4 w-4" />}
          value={data.city}
          onChange={(v) => update('city', v)}
          error={errors.city}
          required
        />
      </div>
    </section>
  )
}
