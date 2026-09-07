import { CheckCircle } from 'lucide-react'

export function SuccessPanel() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <CheckCircle size={64} className="mb-6 text-brand" />
      <h2 className="mb-2 text-2xl font-bold uppercase">Account Created</h2>
      <p className="text-[13px] text-focus">
        Your employee account has been successfully registered.
      </p>
    </div>
  )
}
