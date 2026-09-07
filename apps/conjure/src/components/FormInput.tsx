import { cn } from '@free-react-templates/ui'

interface FormInputProps {
  label: string
  placeholder: string
  className?: string
}

export function FormInput({ label, placeholder, className }: FormInputProps) {
  return (
    <div className={cn('flex flex-col', className)}>
      <label htmlFor={label} className="sr-only">
        {label}
      </label>
      <input
        id={label}
        type="text"
        placeholder={placeholder}
        className="h-[37px] border-b-2 border-line bg-transparent px-0 text-[15px] text-input placeholder-text outline-none transition-colors focus:border-sand"
      />
    </div>
  )
}
