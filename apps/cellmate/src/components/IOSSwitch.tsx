import { cn } from '@free-react-templates/ui'

export interface IOSSwitchProps {
  checked: boolean
  onChange: () => void
  label: string
}

export function IOSSwitch({ checked, onChange, label }: IOSSwitchProps) {
  return (
    <label className="relative mr-2.5 inline-flex shrink-0 cursor-pointer items-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        aria-label={label}
        className="peer absolute h-0 w-0 opacity-0"
      />
      <span
        className={cn(
          'relative block h-5 w-8 rounded-full border-2 transition-colors duration-300 peer-focus-visible:ring-2 peer-focus-visible:ring-accent/50',
          checked ? 'border-switch-on bg-switch-on' : 'border-switch-border bg-white',
        )}
      >
        <span
          className={cn(
            'absolute top-[2px] block h-4 w-4 rounded-full bg-white shadow-[0_0_2px_#aaa,0_2px_5px_#999] transition-all duration-300',
            checked ? 'left-[14px]' : 'left-[2px]',
          )}
        />
      </span>
    </label>
  )
}
