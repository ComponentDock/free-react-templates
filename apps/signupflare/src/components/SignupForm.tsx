import { PasswordInput } from './PasswordInput'

const fieldClass =
  'h-[52px] w-full rounded-[40px] border-none bg-input-bg px-5 text-base text-black placeholder:text-placeholder focus:outline-none'

function handleSubmit(e: React.FormEvent) {
  e.preventDefault()
}

export function SignupForm() {
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="fullname" className="sr-only">
          Full name
        </label>
        <input id="fullname" type="text" placeholder="John Doe" className={fieldClass} />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input id="email" type="text" placeholder="johndoe@gmail.com" className={fieldClass} />
      </div>

      <div className="mb-4">
        <PasswordInput />
      </div>

      <button
        type="submit"
        className="h-[52px] w-full rounded-[40px] border border-accent bg-[linear-gradient(135deg,#f75959_0%,#f35587_100%)] text-[15px] text-white transition-colors hover:bg-none hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        Continue
      </button>
    </form>
  )
}
