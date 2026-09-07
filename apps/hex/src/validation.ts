import { z } from 'zod'

export const step1Schema = z
  .object({
    email: z.string().min(1, 'Email is required').email('Please enter a valid email'),
    username: z.string().min(1, 'Username is required'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string().min(1, 'Please confirm your password'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export const step2Schema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  gender: z.string().min(1, 'Gender is required'),
  day: z.string().min(1, 'Day is required'),
  month: z.string().min(1, 'Month is required'),
  year: z.string().min(1, 'Year is required'),
  phone: z.string().min(1, 'Phone number is required'),
  address: z.string().min(1, 'Address is required'),
})

export const step3Schema = z.object({
  paymentMethod: z.string().min(1, 'Payment method is required'),
  holderName: z.string().min(1, 'Holder name is required'),
  cardNumber: z
    .string()
    .min(1, 'Card number is required')
    .regex(/^\d{16}$/, 'Card number must be 16 digits'),
  cvc: z
    .string()
    .min(1, 'CVC is required')
    .regex(/^\d{3}$/, 'CVC must be 3 digits'),
  expiryMonth: z.string().min(1, 'Expiry month is required'),
  expiryYear: z.string().min(1, 'Expiry year is required'),
})

type Step1Data = z.infer<typeof step1Schema>
type Step2Data = z.infer<typeof step2Schema>
type Step3Data = z.infer<typeof step3Schema>

export type StepErrors = Partial<
  Record<keyof Step1Data | keyof Step2Data | keyof Step3Data, string>
>

function extractErrors(issues: z.ZodIssue[]): StepErrors {
  const result: StepErrors = {}
  const seen = new Set<string>()
  for (const issue of issues) {
    const key = issue.path[0] as keyof StepErrors
    const keyStr = key as string
    if (!seen.has(keyStr)) {
      seen.add(keyStr)
      result[key] = issue.message
    }
  }
  return result
}

export function validateStep(step: number, data: Record<string, string>): StepErrors {
  if (step === 1) {
    const parsed = step1Schema.safeParse(data)
    if (!parsed.success) return extractErrors(parsed.error.issues)
  } else if (step === 2) {
    const parsed = step2Schema.safeParse(data)
    if (!parsed.success) return extractErrors(parsed.error.issues)
  } else if (step === 3) {
    const parsed = step3Schema.safeParse(data)
    if (!parsed.success) return extractErrors(parsed.error.issues)
  }
  return {}
}
