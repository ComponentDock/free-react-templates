import { z } from 'zod'

export const loginSchema = z.object({
  username: z.string().trim().min(1, 'Please enter your username'),
  password: z.string().trim().min(1, 'Please enter your password'),
  terms: z.boolean().refine((accepted) => accepted, {
    message: 'Please accept the terms and conditions',
  }),
})

export type LoginValues = z.infer<typeof loginSchema>

export type LoginField = keyof LoginValues

export function fieldErrors(error: z.ZodError): Partial<Record<LoginField, string>> {
  const errors: Partial<Record<LoginField, string>> = {}
  for (const issue of error.issues) {
    errors[issue.path[0] as LoginField] = issue.message
  }
  return errors
}
