import { useState } from 'react'
import { CustomSelect } from './CustomSelect'

function TwitterIcon() {
  return (
    <svg className="h-[17px] w-[17px]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg className="h-[17px] w-[17px]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg className="h-[17px] w-[17px]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function GoogleIcon() {
  return (
    <svg className="h-[17px] w-[17px]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
    </svg>
  )
}

export interface SocialFieldProps {
  label: string
  placeholder: string
  icon: React.ReactNode
  half?: boolean
}

export function SocialField({ label, placeholder, icon, half }: SocialFieldProps) {
  return (
    <div className={half ? 'w-[calc(50%-12.5px)]' : 'w-full'}>
      <div className="relative mb-[26px]">
        <input
          type="text"
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

export function Step2() {
  const [gender, setGender] = useState('')
  const [language, setLanguage] = useState('')

  return (
    <div role="tabpanel" aria-label="Step 2 — Personal & Social">
      {/* Avatar */}
      <div className="mb-[29px] flex justify-center">
        <img
          src="https://picsum.photos/seed/banish-avatar/128/126"
          alt="Profile avatar"
          className="h-[126px] w-[128px] rounded-full object-cover"
        />
      </div>

      <CustomSelect
        label="Gender"
        options={['Male', 'Female', 'Other']}
        value={gender}
        onChange={setGender}
      />
      <CustomSelect
        label="Language"
        options={['English', 'France', 'Vietnamese']}
        value={language}
        onChange={setLanguage}
      />

      {/* Date of Birth */}
      <div className="mb-[26px]">
        <input
          type="text"
          placeholder="Date of Birth"
          aria-label="Date of Birth"
          className="h-[30px] w-full border-0 border-b border-ink bg-transparent text-[13px] font-semibold text-ink placeholder:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-ink"
        />
        <span className="mt-1 block text-[11px] text-ink/50">dd - mm - yyyy</span>
      </div>

      {/* Slogan */}
      <div className="mb-[26px]">
        <input
          type="text"
          placeholder="Slogan"
          aria-label="Slogan"
          className="h-[30px] w-full border-0 border-b border-ink bg-transparent text-[13px] font-semibold text-ink placeholder:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-ink"
        />
      </div>

      {/* Social row 1 */}
      <div className="flex gap-[25px]">
        <SocialField label="Twitter" placeholder="Twitter" icon={<TwitterIcon />} half />
        <SocialField label="Linked In" placeholder="Linked In" icon={<LinkedinIcon />} half />
      </div>

      {/* Social row 2 */}
      <div className="flex gap-[25px]">
        <SocialField label="Facebook" placeholder="Facebook" icon={<FacebookIcon />} half />
        <SocialField label="Google" placeholder="Google" icon={<GoogleIcon />} half />
      </div>
    </div>
  )
}
