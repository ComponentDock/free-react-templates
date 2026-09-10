import { CheckCircle } from 'lucide-react'

export function SuccessState() {
  return (
    <div className="flex flex-col items-center py-8 text-center">
      <CheckCircle size={64} className="mb-4 text-accent" />
      <h3 className="mb-2 text-lg font-bold uppercase text-text-primary">Onboarding Complete!</h3>
      <p className="text-sm text-text-secondary">Your account has been set up successfully.</p>
    </div>
  )
}
