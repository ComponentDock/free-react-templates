import { User } from 'lucide-react'

export function UserIcon() {
  return (
    <div
      role="img"
      aria-label="User icon"
      className="mx-auto mb-[10px] flex h-[80px] w-[80px] items-center justify-center rounded-full bg-brand"
    >
      <User className="h-[30px] w-[30px] text-white" strokeWidth={1.5} />
    </div>
  )
}
