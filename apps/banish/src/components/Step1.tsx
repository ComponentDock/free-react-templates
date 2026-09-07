import { Lock, Mail, Smartphone, MapPin, User } from 'lucide-react'

interface FieldProps {
  label: string
  placeholder: string
  type?: string
  icon: React.ReactNode
  half?: boolean
}

function Field({ label, placeholder, type = 'text', icon, half }: FieldProps) {
  return (
    <div className={half ? 'w-[calc(50%-12.5px)]' : 'w-full'}>
      <div className="relative mb-[26px]">
        <input
          type={type}
          placeholder={placeholder}
          aria-label={label}
          className="h-[30px] w-full border-0 border-b border-ink bg-transparent pr-6 text-[13px] font-semibold text-ink placeholder:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-ink"
        />
        <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[17px] text-ink">
          {icon}
        </span>
      </div>
    </div>
  )
}

export function Step1() {
  return (
    <div role="tabpanel" aria-label="Step 1 — Registration">
      {/* Avatar */}
      <div className="mb-[29px] flex justify-center">
        <img
          src="https://picsum.photos/seed/banish-avatar/128/126"
          alt="Profile avatar"
          className="h-[126px] w-[128px] rounded-full object-cover"
        />
      </div>

      {/* Name row */}
      <div className="mb-0 flex gap-[25px]">
        <Field
          label="First Name"
          placeholder="First Name"
          icon={<User className="h-[17px] w-[17px]" />}
          half
        />
        <Field
          label="Last Name"
          placeholder="Last Name"
          icon={<User className="h-[17px] w-[17px]" />}
          half
        />
      </div>

      {/* Full-width fields */}
      <Field
        label="Password"
        placeholder="Password"
        type="password"
        icon={<Lock className="h-[17px] w-[17px]" />}
      />
      <Field
        label="Email"
        placeholder="Email"
        type="email"
        icon={<Mail className="h-[17px] w-[17px]" />}
      />
      <Field
        label="Phone"
        placeholder="Phone"
        icon={<Smartphone className="h-[17px] w-[17px]" />}
      />
      <Field
        label="Address"
        placeholder="Address"
        icon={<MapPin className="h-[17px] w-[17px]" />}
      />
      <Field label="Nation" placeholder="Nation" icon={<User className="h-[17px] w-[17px]" />} />
    </div>
  )
}
