import { useState } from 'react'
import { StepIndicator } from './StepIndicator'
import { Step1ChooseDate } from './Step1ChooseDate'
import { Step2ChooseRoom } from './Step2ChooseRoom'
import { Step3Reservation } from './Step3Reservation'
import { Step4Confirmation } from './Step4Confirmation'
import { SuccessState } from './SuccessState'

export interface BookingData {
  checkIn: string
  checkOut: string
  duration: string
  rooms: string
  room1Adults: string
  room1Children: string
  room2Adults: string
  room2Children: string
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  country: string
  zip: string
  specialRequests: string
  terms: boolean
  confirmTerms: boolean
  confirmAvailability: boolean
  confirmPrivacy: boolean
  confirmCancellation: boolean
}

const defaultData: BookingData = {
  checkIn: '',
  checkOut: '',
  duration: '1',
  rooms: '1',
  room1Adults: '1',
  room1Children: '0',
  room2Adults: '1',
  room2Children: '0',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  country: '',
  zip: '',
  specialRequests: '',
  terms: false,
  confirmTerms: true,
  confirmAvailability: true,
  confirmPrivacy: true,
  confirmCancellation: true,
}

export function BookingWizard() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState<BookingData>(defaultData)
  const [submitted, setSubmitted] = useState(false)

  const updateData = (partial: Partial<BookingData>) => {
    setData((prev) => ({ ...prev, ...partial }))
  }

  if (submitted) {
    return <SuccessState />
  }

  return (
    <div className="flex w-full max-w-4xl flex-col items-start gap-8 lg:flex-row">
      <StepIndicator currentStep={step} />
      <div className="flex-1 w-full">
        {step === 1 && (
          <Step1ChooseDate data={data} onUpdate={updateData} onNext={() => setStep(2)} />
        )}
        {step === 2 && (
          <Step2ChooseRoom
            data={data}
            onUpdate={updateData}
            onBack={() => setStep(1)}
            onNext={() => setStep(3)}
          />
        )}
        {step === 3 && (
          <Step3Reservation
            data={data}
            onUpdate={updateData}
            onBack={() => setStep(2)}
            onNext={() => setStep(4)}
          />
        )}
        {step === 4 && (
          <Step4Confirmation
            data={data}
            onUpdate={updateData}
            onBack={() => setStep(3)}
            onSubmit={() => setSubmitted(true)}
          />
        )}
      </div>
    </div>
  )
}
