import { cn } from '@free-react-templates/ui'

interface FloatingInputProps {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  error?: string
  type?: string
}

export function FloatingInput({
  id,
  label,
  value,
  onChange,
  error,
  type = 'text',
}: FloatingInputProps) {
  const hasValue = value.length > 0

  return (
    <div className="relative mb-6">
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder=" "
        className={cn(
          'peer w-full border-0 border-b-2 bg-transparent pb-2 pt-5 text-lg font-bold outline-none transition-colors',
          error ? 'border-red-500' : 'border-[#e5e5e5] focus:border-[#24c1e8]',
          'text-[#333]',
        )}
      />
      <label
        htmlFor={id}
        className={cn(
          'pointer-events-none absolute left-0 top-5 text-base font-normal transition-all',
          'peer-focus:-translate-y-3.5 peer-focus:scale-[0.8] peer-focus:text-[#24c1e8]',
          hasValue && !error ? '-translate-y-3.5 scale-[0.8] text-[#24c1e8]' : '',
          hasValue && error ? '-translate-y-3.5 scale-[0.8] text-red-500' : '',
          !hasValue && !error ? 'text-[#666]' : '',
        )}
      >
        {label}
      </label>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  )
}
