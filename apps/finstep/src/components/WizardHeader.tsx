import { cn } from '@free-react-templates/ui'

export function WizardHeader() {
  return (
    <div className={cn('mb-6 text-center')}>
      <h1 className="text-3xl font-bold tracking-tight text-heading">Sign Up To Financial</h1>
      <p className="mt-2 text-base text-muted">Fill all form field to go next step</p>
    </div>
  )
}
