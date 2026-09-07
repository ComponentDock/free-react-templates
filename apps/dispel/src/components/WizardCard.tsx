import { useState, useCallback, useMemo } from 'react'
import { StepTiles } from './StepTiles'
import { FormInput } from './FormInput'
import { DateGroup } from './DateGroup'
import { CustomDropdown } from './CustomDropdown'
import { ActionButton } from './ActionButton'
import { SuccessPanel } from './SuccessPanel'

const STEP_HEADINGS = [
  'Personal Information:',
  'Contact Information:',
  'Official Information:',
  'Payment Information:',
] as const

interface FormData {
  // Step 1 — Personal
  firstName: string
  lastName: string
  birthDay: string
  birthMonth: string
  birthYear: string
  gender: string
  userName: string
  password: string
  // Step 2 — Contact
  email: string
  phone: string
  address: string
  country: string
  // Step 3 — Official
  employeeId: string
  designation: string
  department: string
  workHours: string
  // Step 4 — Payment
  bankName: string
  holderName: string
  expiryDay: string
  expiryMonth: string
  expiryYear: string
  paymentType: string
  cardNumber: string
  cvc: string
}

const INITIAL: FormData = {
  firstName: '',
  lastName: '',
  birthDay: '',
  birthMonth: '',
  birthYear: '',
  gender: '',
  userName: '',
  password: '',
  email: '',
  phone: '',
  address: '',
  country: '',
  employeeId: '',
  designation: '',
  department: '',
  workHours: '',
  bankName: '',
  holderName: '',
  expiryDay: '',
  expiryMonth: '',
  expiryYear: '',
  paymentType: '',
  cardNumber: '',
  cvc: '',
}

type StepKey = keyof FormData

const REQUIRED_FIELDS: Record<number, StepKey[]> = {
  0: ['firstName', 'lastName', 'userName', 'password'],
  1: ['email', 'phone', 'address'],
  2: ['employeeId', 'designation', 'department', 'workHours'],
  3: ['bankName', 'holderName', 'cardNumber', 'cvc'],
}

export function validatestep(step: number, data: FormData): Set<string> {
  const errors = new Set<string>()
  const fields = REQUIRED_FIELDS[step] ?? []
  for (const f of fields) {
    if (!data[f]?.trim()) {
      errors.add(f)
    }
  }
  return errors
}

export function WizardCard() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState<FormData>(INITIAL)
  const [errors, setErrors] = useState<Set<string>>(new Set())
  const [visitedSteps, setVisitedSteps] = useState<Set<number>>(new Set([0]))
  const [submitted, setSubmitted] = useState(false)

  const setField = useCallback((key: StepKey, value: string) => {
    setData((prev) => ({ ...prev, [key]: value }))
    // Clear error on change
    setErrors((prev) => {
      const next = new Set(prev)
      next.delete(key)
      return next
    })
  }, [])

  const handleBlur = useCallback(
    (key: StepKey) => {
      setErrors((prev) => {
        const next = new Set(prev)
        if (!data[key]?.trim()) {
          next.add(key)
        } else {
          next.delete(key)
        }
        return next
      })
    },
    [data],
  )

  const goTo = useCallback((n: number) => {
    setStep(n)
    setVisitedSteps((prev) => new Set(prev).add(n))
    setErrors(new Set())
  }, [])

  const next = useCallback(() => {
    const errs = validatestep(step, data)
    if (errs.size > 0) {
      setErrors(errs)
      return
    }
    goTo(step + 1)
  }, [step, data, goTo])

  const prev = useCallback(() => goTo(step - 1), [step, goTo])

  const submit = useCallback(() => {
    const errs = validatestep(step, data)
    if (errs.size > 0) {
      setErrors(errs)
      return
    }
    setSubmitted(true)
  }, [step, data])

  const hasError = useCallback((key: StepKey) => errors.has(key), [errors])

  const canGoBack = step > 0
  const isLastStep = step === 3

  const legendRight = useMemo(() => `Step ${step + 1} / 4`, [step])

  if (submitted) {
    return (
      <div className="w-full max-w-[630px] rounded-[10px] bg-card px-[90px] py-[32px] shadow-card max-sm:px-[30px]">
        <SuccessPanel />
      </div>
    )
  }

  return (
    <div className="w-full max-w-[630px] rounded-[10px] bg-card shadow-card">
      <h2 className="pt-[35px] text-center text-[20px] font-bold uppercase">
        Sign Up Office Employee Account
      </h2>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="px-[90px] pb-[40px] pt-[32px] max-sm:px-[30px]"
        noValidate
      >
        {/* Step tiles */}
        <StepTiles currentStep={step} visitedSteps={visitedSteps} onTileClick={goTo} />

        {/* Legend */}
        <div className="mb-5 flex items-center justify-between text-[17px]">
          <span className="font-bold text-brand">{STEP_HEADINGS[step]}</span>
          <span>{legendRight}</span>
        </div>

        {/* Step 1 — Personal */}
        {step === 0 && (
          <div>
            <FormInput
              label="First name"
              id="firstName"
              required
              value={data.firstName}
              onChange={(v) => setField('firstName', v)}
              onBlur={() => handleBlur('firstName')}
              error={hasError('firstName')}
            />
            <FormInput
              label="Last name"
              id="lastName"
              required
              value={data.lastName}
              onChange={(v) => setField('lastName', v)}
              onBlur={() => handleBlur('lastName')}
              error={hasError('lastName')}
            />
            <div className="mb-[15px] flex gap-4 max-sm:flex-col">
              <DateGroup
                day={data.birthDay}
                month={data.birthMonth}
                year={data.birthYear}
                onDayChange={(v) => setField('birthDay', v)}
                onMonthChange={(v) => setField('birthMonth', v)}
                onYearChange={(v) => setField('birthYear', v)}
                className="w-[266px] shrink-0 max-sm:w-full"
              />
              <CustomDropdown
                label="Gender"
                id="gender"
                options={['Male', 'Female']}
                value={data.gender}
                onChange={(v) => setField('gender', v)}
                className="w-[160px] shrink-0 max-sm:w-full"
              />
            </div>
            <FormInput
              label="User name"
              id="userName"
              required
              value={data.userName}
              onChange={(v) => setField('userName', v)}
              onBlur={() => handleBlur('userName')}
              error={hasError('userName')}
            />
            <FormInput
              label="Password"
              id="password"
              type="password"
              required
              value={data.password}
              onChange={(v) => setField('password', v)}
              onBlur={() => handleBlur('password')}
              error={hasError('password')}
            />
          </div>
        )}

        {/* Step 2 — Contact */}
        {step === 1 && (
          <div>
            <FormInput
              label="Email"
              id="email"
              type="email"
              required
              value={data.email}
              onChange={(v) => setField('email', v)}
              onBlur={() => handleBlur('email')}
              error={hasError('email')}
            />
            <FormInput
              label="Phone"
              id="phone"
              type="number"
              required
              value={data.phone}
              onChange={(v) => setField('phone', v)}
              onBlur={() => handleBlur('phone')}
              error={hasError('phone')}
            />
            <FormInput
              label="Address"
              id="address"
              required
              value={data.address}
              onChange={(v) => setField('address', v)}
              onBlur={() => handleBlur('address')}
              error={hasError('address')}
            />
            <CustomDropdown
              label="Country"
              id="country"
              options={['Australia', 'America']}
              value={data.country}
              onChange={(v) => setField('country', v)}
            />
          </div>
        )}

        {/* Step 3 — Official */}
        {step === 2 && (
          <div>
            <FormInput
              label="Employee ID"
              id="employeeId"
              required
              value={data.employeeId}
              onChange={(v) => setField('employeeId', v)}
              onBlur={() => handleBlur('employeeId')}
              error={hasError('employeeId')}
            />
            <FormInput
              label="Designation"
              id="designation"
              required
              value={data.designation}
              onChange={(v) => setField('designation', v)}
              onBlur={() => handleBlur('designation')}
              error={hasError('designation')}
            />
            <FormInput
              label="Department"
              id="department"
              required
              value={data.department}
              onChange={(v) => setField('department', v)}
              onBlur={() => handleBlur('department')}
              error={hasError('department')}
            />
            <FormInput
              label="Working hours"
              id="workHours"
              required
              value={data.workHours}
              onChange={(v) => setField('workHours', v)}
              onBlur={() => handleBlur('workHours')}
              error={hasError('workHours')}
            />
          </div>
        )}

        {/* Step 4 — Payment */}
        {step === 3 && (
          <div>
            <FormInput
              label="Bank Name"
              id="bankName"
              required
              value={data.bankName}
              onChange={(v) => setField('bankName', v)}
              onBlur={() => handleBlur('bankName')}
              error={hasError('bankName')}
            />
            <FormInput
              label="Holder Name"
              id="holderName"
              required
              value={data.holderName}
              onChange={(v) => setField('holderName', v)}
              onBlur={() => handleBlur('holderName')}
              error={hasError('holderName')}
            />
            <div className="mb-[15px] flex gap-4 max-sm:flex-col">
              <DateGroup
                day={data.expiryDay}
                month={data.expiryMonth}
                year={data.expiryYear}
                onDayChange={(v) => setField('expiryDay', v)}
                onMonthChange={(v) => setField('expiryMonth', v)}
                onYearChange={(v) => setField('expiryYear', v)}
                className="w-[266px] shrink-0 max-sm:w-full"
              />
              <CustomDropdown
                label="Payment type"
                id="paymentType"
                options={['Master Card', 'Visa Card']}
                value={data.paymentType}
                onChange={(v) => setField('paymentType', v)}
                className="w-[160px] shrink-0 max-sm:w-full"
              />
            </div>
            <div className="flex gap-4 max-sm:flex-col">
              <FormInput
                label="Card Number"
                id="cardNumber"
                type="number"
                required
                value={data.cardNumber}
                onChange={(v) => setField('cardNumber', v)}
                onBlur={() => handleBlur('cardNumber')}
                error={hasError('cardNumber')}
                className="flex-1"
              />
              <FormInput
                label="CVC"
                id="cvc"
                required
                value={data.cvc}
                onChange={(v) => setField('cvc', v)}
                onBlur={() => handleBlur('cvc')}
                error={hasError('cvc')}
                className="flex-1"
              />
            </div>
          </div>
        )}

        {/* Action row */}
        <div className="mt-[25px] flex justify-end gap-[10px]">
          {canGoBack && <ActionButton label="Previous" onClick={prev} variant="muted" />}
          {isLastStep ? (
            <ActionButton label="Submit" onClick={submit} variant="primary" />
          ) : (
            <ActionButton label="Next" onClick={next} variant="primary" />
          )}
        </div>
      </form>
    </div>
  )
}
