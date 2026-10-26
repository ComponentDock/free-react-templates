import { Check } from 'lucide-react'
import { TOAST } from '../data/hero'

/**
 * The toast hanging off the mock's lower-left corner, bobbing on a 5 s loop.
 * `aria-hidden` because it repeats no information the mock's label lacks.
 */
export function FloatingToast() {
  return (
    <div
      aria-hidden="true"
      className="hero-toast absolute flex animate-[bob_5s_ease-in-out_infinite] items-center gap-3 rounded-[14px] border border-line bg-surface py-3 pr-4 pl-3 text-[14px] shadow-[0_20px_40px_-18px_rgba(18,18,41,.35)]"
    >
      <span className="grid h-[34px] w-[34px] place-items-center rounded-[10px] bg-success text-white">
        <Check className="h-4 w-4" />
      </span>
      <span className="grid leading-[1.35]">
        <strong className="font-bold">{TOAST.title}</strong>
        <span className="text-[12.5px] text-muted">{TOAST.detail}</span>
      </span>
    </div>
  )
}
