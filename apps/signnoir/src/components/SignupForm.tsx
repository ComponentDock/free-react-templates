import { useState, type FormEvent } from 'react'

const fields = [
  { id: 'fullname', label: 'Full Name', placeholder: 'Full Name', type: 'text' },
  {
    id: 'email',
    label: 'Email Address',
    placeholder: 'johndoe@email.com',
    type: 'text',
  },
  { id: 'phone', label: 'Phone no.', placeholder: '+01', type: 'text' },
  { id: 'password', label: 'Password', placeholder: 'Password', type: 'password' },
  { id: 'website', label: 'Website', placeholder: 'Website', type: 'text' },
] as const

const inputClass =
  'h-[50px] w-[calc(100%_-_150px)] shrink-0 rounded-[4px] border-none bg-input-fill px-5 text-sm text-black placeholder:text-black/30 transition-colors focus:bg-input-fill-hover focus:outline-none'

function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault()
}

export function SignupForm() {
  const [agreed, setAgreed] = useState(true)

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.id} className="mb-3 flex w-full items-center">
          <label
            htmlFor={field.id}
            className="w-[150px] shrink-0 text-sm font-medium text-black/90"
          >
            {field.label}
          </label>
          <input
            id={field.id}
            type={field.type}
            placeholder={field.placeholder}
            className={inputClass}
          />
        </div>
      ))}

      <label className="mb-3 mt-4 flex cursor-pointer items-center gap-2 text-[15px] font-normal capitalize text-black/40">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="h-[18px] w-[18px] cursor-pointer accent-black"
        />
        I agree all statements in terms of service
      </label>

      <button
        type="submit"
        className="mt-2 inline-block cursor-pointer rounded-[40px] border border-black bg-black p-4 text-[15px] text-white shadow-btn transition-colors duration-300 hover:bg-transparent hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black/40"
      >
        Create an account
      </button>
    </form>
  )
}
