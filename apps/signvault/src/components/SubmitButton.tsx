import { Send } from 'lucide-react'

interface SubmitButtonProps {
  onClick: () => void
}

export function SubmitButton({ onClick }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      aria-label="Submit"
      onClick={onClick}
      className="absolute -bottom-7 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-lg shadow-brand/40 transition-all hover:bg-brand-dark hover:shadow-xl hover:shadow-brand/40"
    >
      <Send className="h-5 w-5" />
    </button>
  )
}
