import { PasswordInput } from './PasswordInput'

function handleSubmit(e: React.FormEvent) {
  e.preventDefault()
}

export function SignupForm() {
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="fullname"
          className="mb-2 block text-xs font-bold uppercase tracking-[1px] text-white"
        >
          Full Name
        </label>
        <input
          id="fullname"
          type="text"
          placeholder="John Doe"
          className="h-[52px] w-full rounded-[40px] border border-input-border bg-transparent px-5 text-base text-white placeholder:text-placeholder focus:border-input-border-focus focus:outline-none"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="mb-2 block text-xs font-bold uppercase tracking-[1px] text-white"
        >
          Email Address
        </label>
        <input
          id="email"
          type="text"
          placeholder="johndoe@gmail.com"
          className="h-[52px] w-full rounded-[40px] border border-input-border bg-transparent px-5 text-base text-white placeholder:text-placeholder focus:border-input-border-focus focus:outline-none"
        />
      </div>

      <div className="mb-4">
        <PasswordInput />
      </div>

      <button
        type="submit"
        className="h-[52px] w-full rounded-[40px] border border-accent bg-accent text-[15px] text-white transition-colors hover:bg-transparent hover:text-accent"
      >
        Sign Up
      </button>
    </form>
  )
}
