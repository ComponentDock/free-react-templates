import { useState } from 'react'
import { StepIndicator } from './StepIndicator'
import { StepUserProfile, type UserProfileData } from './StepUserProfile'
import { StepAddress, type AddressData } from './StepAddress'
import { StepCategory, type CategoryData } from './StepCategory'

const TOTAL_STEPS = 3

const emptyProfile: UserProfileData = {
  fullName: '',
  education: '',
  email: '',
  phone: '',
  specialization: '',
  dateOfBirth: '',
}

const emptyAddress: AddressData = {
  country: 'United States',
  streetAddress: '',
  apartment: '',
  townCity: '',
  county: '',
  postcodeZip: '',
}

const emptyCategory: CategoryData = {
  selected: 'programming',
}

function validateProfile(d: UserProfileData): Partial<Record<keyof UserProfileData, string>> {
  const e: Partial<Record<keyof UserProfileData, string>> = {}
  if (!d.fullName.trim()) e.fullName = 'Required'
  if (!d.education.trim()) e.education = 'Required'
  if (!d.email.trim()) e.email = 'Required'
  if (!d.phone.trim()) e.phone = 'Required'
  if (!d.specialization.trim()) e.specialization = 'Required'
  if (!d.dateOfBirth.trim()) e.dateOfBirth = 'Required'
  return e
}

function validateAddress(d: AddressData): Partial<Record<keyof AddressData, string>> {
  const e: Partial<Record<keyof AddressData, string>> = {}
  if (!d.streetAddress.trim()) e.streetAddress = 'Required'
  if (!d.apartment.trim()) e.apartment = 'Required'
  if (!d.townCity.trim()) e.townCity = 'Required'
  if (!d.county.trim()) e.county = 'Required'
  if (!d.postcodeZip.trim()) e.postcodeZip = 'Required'
  return e
}

export function WizardForm() {
  const [step, setStep] = useState(0)
  const [profile, setProfile] = useState<UserProfileData>(emptyProfile)
  const [address, setAddress] = useState<AddressData>(emptyAddress)
  const [category, setCategory] = useState<CategoryData>(emptyCategory)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = (): boolean => {
    if (step === 0) {
      const e = validateProfile(profile)
      setErrors(e)
      return Object.keys(e).length === 0
    }
    if (step === 1) {
      const e = validateAddress(address)
      setErrors(e)
      return Object.keys(e).length === 0
    }
    return true
  }

  const handleNext = () => {
    if (!validate()) return
    if (step < TOTAL_STEPS - 1) setStep(step + 1)
    else setSubmitted(true)
  }

  const handleBack = () => {
    setErrors({})
    setStep(step - 1)
  }

  if (submitted) {
    return (
      <div className="text-center">
        <h3
          className="mb-4 text-[35px] font-semibold uppercase tracking-[3px] text-brand-400"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Submitted!
        </h3>
        <p className="text-sm text-surface-500" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Your profile has been saved successfully.
        </p>
      </div>
    )
  }

  const hasErrors = Object.keys(errors).length > 0

  return (
    <div
      className="relative bg-white px-[58px] pt-16 pb-0"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      <StepIndicator currentStep={step} totalSteps={TOTAL_STEPS} />

      <div className="min-h-[320px]">
        {step === 0 && <StepUserProfile data={profile} onChange={setProfile} />}
        {step === 1 && <StepAddress data={address} onChange={setAddress} />}
        {step === 2 && <StepCategory data={category} onChange={setCategory} />}
      </div>

      <div className="mt-10 flex items-center justify-between">
        {step > 0 ? (
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex h-[42px] w-[112px] items-center justify-center border border-brand-400 bg-transparent text-[13px] font-medium uppercase tracking-wide text-brand-400 transition-colors hover:border-transparent hover:bg-brand-400 hover:text-white"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Back
          </button>
        ) : (
          <span />
        )}
        {hasErrors ? (
          <span
            className="text-xs text-surface-500 italic"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Your must fill all fields, to be able to continue
          </span>
        ) : (
          <button
            type="button"
            onClick={handleNext}
            className="inline-flex h-[42px] w-[112px] items-center justify-center bg-brand-400 text-[13px] font-medium uppercase tracking-wide text-white transition-colors hover:bg-brand-500"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {step === TOTAL_STEPS - 1 ? 'Finish' : 'Next'}
          </button>
        )}
      </div>
    </div>
  )
}
