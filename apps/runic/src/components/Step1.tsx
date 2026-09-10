import { useRef } from 'react'
import { Camera } from 'lucide-react'
import { PillInput } from './PillInput'

interface Step1Props {
  activeField: string | null
  onFocusField: (field: string) => void
  firstName: string
  lastName: string
  teamName: string
  email: string
  password: string
  onFirstNameChange: (v: string) => void
  onLastNameChange: (v: string) => void
  onTeamNameChange: (v: string) => void
  onEmailChange: (v: string) => void
  onPasswordChange: (v: string) => void
}

export function Step1({
  activeField,
  onFocusField,
  firstName,
  lastName,
  teamName,
  email,
  password,
  onFirstNameChange,
  onLastNameChange,
  onTeamNameChange,
  onEmailChange,
  onPasswordChange,
}: Step1Props) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  return (
    <div>
      {/* Profile picture + identity fields */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        {/* Avatar area */}
        <div className="flex w-full flex-col items-center sm:w-1/3">
          <div className="h-24 w-24 rounded-full border-2 border-avatar-border bg-input-bg" />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-extrabold uppercase text-text-primary transition-colors hover:text-text-secondary"
          >
            <Camera size={14} />
            Choose Picture
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            aria-label="Upload profile picture"
          />
        </div>

        {/* Identity fields */}
        <div className="w-full sm:w-2/3">
          <PillInput
            placeholder="First Name"
            value={firstName}
            onChange={(e) => onFirstNameChange(e.target.value)}
            onFocus={() => onFocusField('firstName')}
            active={activeField === 'firstName'}
          />
          <PillInput
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => onLastNameChange(e.target.value)}
            onFocus={() => onFocusField('lastName')}
            active={activeField === 'lastName'}
          />
          <PillInput
            placeholder="Team Name"
            value={teamName}
            onChange={(e) => onTeamNameChange(e.target.value)}
            onFocus={() => onFocusField('teamName')}
            active={activeField === 'teamName'}
          />
        </div>
      </div>

      {/* Email + Password (full width) */}
      <PillInput
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => onEmailChange(e.target.value)}
        onFocus={() => onFocusField('email')}
        active={activeField === 'email'}
      />
      <PillInput
        placeholder="Create a Password"
        type="password"
        value={password}
        onChange={(e) => onPasswordChange(e.target.value)}
        onFocus={() => onFocusField('password')}
        active={activeField === 'password'}
      />
    </div>
  )
}
