import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

interface FormFieldProps {
  id: string
  label: string
  type?: string
  showToggle?: boolean
}

export function FormField({ id, label, type = 'text', showToggle = false }: FormFieldProps) {
  const [inputType, setInputType] = useState(type)

  const toggleVisibility = () => {
    setInputType((t) => (t === 'password' ? 'text' : 'password'))
  }

  return (
    <div className="relative">
      <input
        type={inputType}
        id={id}
        name={id}
        required
        className="block w-full border-0 border-b border-line box-border font-sans font-bold text-[24px] transition-[0.3s_ease] pt-[30px] pb-[5px] bg-transparent outline-none"
      />
      <label
        htmlFor={id}
        className="absolute left-0 top-[25px] text-[24px] font-bold text-label transition-[0.25s_ease] pointer-events-none"
      >
        {label}
      </label>
      {showToggle && (
        <button
          type="button"
          onClick={toggleVisibility}
          aria-label={inputType === 'password' ? 'Show password' : 'Hide password'}
          className="absolute right-0 top-[25px] z-10 text-muted hover:text-accent transition-colors"
        >
          {inputType === 'password' ? <Eye size={24} /> : <EyeOff size={24} />}
        </button>
      )}
    </div>
  )
}
