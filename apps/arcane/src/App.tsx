import { useState, useCallback } from 'react'
import { StepIndicator } from './components/StepIndicator'
import { PersonalInfoStep } from './components/PersonalInfoStep'
import { BookingDetailsStep } from './components/BookingDetailsStep'
import { ConfirmationStep } from './components/ConfirmationStep'
import { SuccessScreen } from './components/SuccessScreen'
import { Footer } from './components/Footer'
import type { PersonalInfo, BookingDetails, StepErrors } from './types'

const INITIAL_PERSONAL: PersonalInfo = { fullName: '', email: '', phone: '' }
const INITIAL_BOOKING: BookingDetails = { date: '', timeSlot: '', serviceType: '', notes: '' }
const TOTAL_STEPS = 3

function validatePersonalInfo(data: PersonalInfo): StepErrors {
  const errors: StepErrors = {}
  if (!data.fullName.trim()) errors.fullName = 'Full name is required'
  if (!data.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email'
  }
  if (!data.phone.trim()) errors.phone = 'Phone number is required'
  return errors
}

function validateBookingDetails(data: BookingDetails): StepErrors {
  const errors: StepErrors = {}
  if (!data.date) errors.date = 'Date is required'
  if (!data.timeSlot) errors.timeSlot = 'Time slot is required'
  if (!data.serviceType) errors.serviceType = 'Service type is required'
  return errors
}

export function App() {
  const [currentStep, setCurrentStep] = useState(1)
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>(INITIAL_PERSONAL)
  const [bookingDetails, setBookingDetails] = useState<BookingDetails>(INITIAL_BOOKING)
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [errors, setErrors] = useState<StepErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const handleNext = useCallback(() => {
    switch (currentStep) {
      case 1: {
        const stepErrors = validatePersonalInfo(personalInfo)
        if (Object.keys(stepErrors).length > 0) {
          setErrors(stepErrors)
          return
        }
        setErrors({})
        setCurrentStep(2)
        return
      }
      case 2: {
        const stepErrors = validateBookingDetails(bookingDetails)
        if (Object.keys(stepErrors).length > 0) {
          setErrors(stepErrors)
          return
        }
        setErrors({})
        setCurrentStep(3)
        return
      }
      case 3: {
        if (!termsAccepted) {
          setErrors({ terms: 'You must accept the terms' })
          return
        }
        setSubmitted(true)
        return
      }
    }
  }, [currentStep, personalInfo, bookingDetails, termsAccepted])

  const handlePrevious = useCallback(() => {
    setErrors({})
    setCurrentStep((prev) => Math.max(1, prev - 1))
  }, [])

  const handleStartOver = useCallback(() => {
    setCurrentStep(1)
    setPersonalInfo(INITIAL_PERSONAL)
    setBookingDetails(INITIAL_BOOKING)
    setTermsAccepted(false)
    setErrors({})
    setSubmitted(false)
  }, [])

  if (submitted) {
    return (
      <div className="flex min-h-screen flex-col">
        <main className="flex flex-1 items-center justify-center bg-gray-50 px-4">
          <div className="w-full max-w-lg rounded-xl bg-white p-8 shadow-lg">
            <SuccessScreen onStartOver={handleStartOver} />
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-1">
        {/* Left visual panel */}
        <div
          className="hidden w-1/2 bg-cover bg-center lg:block"
          style={{ backgroundImage: "url('https://picsum.photos/seed/arcane-booking/1200/900')" }}
          aria-hidden="true"
        />

        {/* Right form panel */}
        <div className="flex w-full items-center justify-center bg-white px-4 py-12 sm:px-8 lg:w-1/2">
          <div className="w-full max-w-md">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-brand-text">Book an Appointment</h1>
              <p className="mt-2 text-gray-500">Fill in the details to schedule your visit</p>
            </div>

            <StepIndicator currentStep={currentStep} totalSteps={TOTAL_STEPS} />

            <div className="mb-8">
              {currentStep === 1 && (
                <PersonalInfoStep data={personalInfo} errors={errors} onChange={setPersonalInfo} />
              )}
              {currentStep === 2 && (
                <BookingDetailsStep
                  data={bookingDetails}
                  errors={errors}
                  onChange={setBookingDetails}
                />
              )}
              {currentStep === 3 && (
                <ConfirmationStep
                  data={{ ...personalInfo, ...bookingDetails }}
                  termsAccepted={termsAccepted}
                  errors={errors}
                  onTermsChange={setTermsAccepted}
                />
              )}
            </div>

            <div className="flex justify-between">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50"
                >
                  Back
                </button>
              ) : (
                <div />
              )}
              <button
                type="button"
                onClick={handleNext}
                className="rounded-lg bg-brand-primary px-8 py-3 font-medium text-white transition-colors hover:bg-brand-primary-hover"
              >
                {currentStep === 3 ? 'Submit' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
