import { ChevronDown } from 'lucide-react'

export const TLDS = ['.io', '.com', '.net'] as const
export type Tld = (typeof TLDS)[number]

export interface TldSelectProps {
  value: Tld
  onChange: (value: Tld) => void
}

/**
 * The violet chip on the right half of the domain search bar. It is a labelled
 * native select — keyboard, Escape and screen-reader behaviour come from the
 * platform — dressed with the reference's chevron and 24 px label.
 */
export function TldSelect({ value, onChange }: TldSelectProps) {
  return (
    <div className="absolute inset-y-0 right-0 flex h-[60px] w-[141px] items-center rounded-r-[12px] bg-plum-bright max-[991px]:h-[50px] max-[575px]:h-[40px]">
      <label htmlFor="tld" className="sr-only">
        Top-level domain
      </label>
      <select
        id="tld"
        value={value}
        onChange={(event) => onChange(event.target.value as Tld)}
        className="h-full w-full appearance-none rounded-r-[12px] bg-transparent pl-[19px] text-[24px] font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-mint max-[991px]:text-[20px] max-[575px]:text-[16px]"
      >
        {TLDS.map((tld) => (
          <option key={tld} value={tld} className="text-ink">
            {tld}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none mr-[19px] h-4 w-4 text-white" aria-hidden="true" />
    </div>
  )
}
