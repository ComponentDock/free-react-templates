import { User, Edit3, Mail, Smartphone, SpellCheck, Calendar } from 'lucide-react'

export interface UserProfileData {
  fullName: string
  education: string
  email: string
  phone: string
  specialization: string
  dateOfBirth: string
}

interface StepUserProfileProps {
  data: UserProfileData
  onChange: (data: UserProfileData) => void
}

const fields = [
  { key: 'fullName' as const, label: 'Full Name', Icon: User, placeholder: 'Full Name' },
  {
    key: 'education' as const,
    label: 'Education Level',
    Icon: Edit3,
    placeholder: 'Education Level',
  },
  { key: 'email' as const, label: 'Email ID', Icon: Mail, placeholder: 'Email ID' },
  { key: 'phone' as const, label: 'Phone Number', Icon: Smartphone, placeholder: 'Phone Number' },
  {
    key: 'specialization' as const,
    label: 'Specialization',
    Icon: SpellCheck,
    placeholder: 'Specialization',
  },
  {
    key: 'dateOfBirth' as const,
    label: 'Date of Birth',
    Icon: Calendar,
    placeholder: 'Date of Birth',
  },
]

export function StepUserProfile({ data, onChange }: StepUserProfileProps) {
  const handleChange = (key: keyof UserProfileData, value: string) => {
    onChange({ ...data, [key]: value })
  }

  return (
    <div>
      <h3
        className="mb-8 text-center text-[35px] font-semibold uppercase leading-tight tracking-[3px] text-brand-400"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        User Profile
      </h3>
      <div className="flex flex-col gap-6 sm:flex-row sm:gap-10">
        {fields.map((field) => (
          <div key={field.key} className="w-full sm:w-1/2">
            <label
              className="mb-1.5 block text-sm text-surface-800"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {field.label}
            </label>
            <div className="relative">
              <field.Icon
                className="absolute left-4 top-1/2 -translate-y-1/2 text-surface-400"
                size={18}
              />
              <input
                type="text"
                value={data[field.key]}
                onChange={(e) => handleChange(field.key, e.target.value)}
                placeholder={field.placeholder}
                className="h-[42px] w-full border border-surface-400 bg-transparent pl-[46px] text-sm font-medium text-surface-600 outline-none transition-colors placeholder:text-surface-400 focus:border-brand-400"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
