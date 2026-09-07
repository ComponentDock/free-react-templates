import { useRef, useState, type ChangeEvent } from 'react'
import { User } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface AboutStepProps {
  firstName: string
  lastName: string
  email: string
  errors: Record<string, string | undefined>
  onFieldChange: (field: string, value: string) => void
  onBlur: (field: string) => void
  onAvatarChange: (url: string) => void
}

export function AboutStep({
  firstName,
  lastName,
  email,
  errors,
  onFieldChange,
  onBlur,
  onAvatarChange,
}: AboutStepProps) {
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setAvatarPreview(url)
      onAvatarChange(url)
    }
  }

  const errorId = (field: string) => `error-${field}`

  return (
    <div
      id="step-panel-0"
      role="tabpanel"
      aria-labelledby="tab-0"
      className="flex items-start gap-8 pt-[85px] max-[768px]:flex-col max-[768px]:items-center max-[768px]:gap-5"
    >
      {/* Avatar uploader */}
      <div className="flex shrink-0 flex-col items-center">
        <label htmlFor="avatar-input" className="flex cursor-pointer flex-col items-center">
          <div className="flex h-[154px] w-[154px] items-center justify-center overflow-hidden rounded-full border border-line bg-white">
            {avatarPreview ? (
              <img
                src={avatarPreview}
                alt="Uploaded avatar"
                className="h-full w-full object-cover"
              />
            ) : (
              <User className="h-20 w-20 text-muted" aria-hidden="true" />
            )}
          </div>
          <span className="mt-1.5 text-xs font-bold uppercase tracking-wide text-ink">
            choose picture
          </span>
        </label>
        <input
          ref={fileInputRef}
          id="avatar-input"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="sr-only"
          aria-label="Upload avatar picture"
        />
      </div>

      {/* Name and email fields */}
      <div className="flex flex-1 flex-col gap-5">
        <div className="flex flex-col gap-1">
          <label htmlFor="first_name" className="sr-only text-sm font-medium text-ink">
            First Name
          </label>
          <input
            id="first_name"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => onFieldChange('firstName', e.target.value)}
            onBlur={() => onBlur('firstName')}
            aria-required="true"
            aria-invalid={!!errors.firstName}
            aria-describedby={errors.firstName ? errorId('firstName') : undefined}
            className={cn(
              'rounded-[5px] border bg-transparent px-[25px] py-[15px] text-[14px] text-ink placeholder:text-muted focus:border-accent focus:outline-none focus:ring-0',
              errors.firstName ? 'border-error' : 'border-line',
            )}
          />
          {errors.firstName && (
            <span id={errorId('firstName')} role="alert" className="text-[12px] text-error">
              {errors.firstName}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="last_name" className="sr-only text-sm font-medium text-ink">
            Last Name
          </label>
          <input
            id="last_name"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => onFieldChange('lastName', e.target.value)}
            onBlur={() => onBlur('lastName')}
            aria-required="true"
            aria-invalid={!!errors.lastName}
            aria-describedby={errors.lastName ? errorId('lastName') : undefined}
            className={cn(
              'rounded-[5px] border bg-transparent px-[25px] py-[15px] text-[14px] text-ink placeholder:text-muted focus:border-accent focus:outline-none focus:ring-0',
              errors.lastName ? 'border-error' : 'border-line',
            )}
          />
          {errors.lastName && (
            <span id={errorId('lastName')} role="alert" className="text-[12px] text-error">
              {errors.lastName}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="sr-only text-sm font-medium text-ink">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => onFieldChange('email', e.target.value)}
            onBlur={() => onBlur('email')}
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? errorId('email') : undefined}
            className={cn(
              'rounded-[5px] border bg-transparent px-[25px] py-[15px] text-[14px] text-ink placeholder:text-muted focus:border-accent focus:outline-none focus:ring-0',
              errors.email ? 'border-error' : 'border-line',
            )}
          />
          {errors.email && (
            <span id={errorId('email')} role="alert" className="text-[12px] text-error">
              {errors.email}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
