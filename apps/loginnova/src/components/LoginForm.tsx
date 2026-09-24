import { type FormEvent, type ChangeEvent, useState } from 'react'
import { AlertCircle } from 'lucide-react'

interface FieldErrors {
  username?: string
  password?: string
}

export function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<FieldErrors>({})
  const [touched, setTouched] = useState({ username: false, password: false })

  function validate(): FieldErrors {
    const next: FieldErrors = {}
    if (!username.trim()) next.username = 'Username is required'
    if (!password) next.password = 'Password is required'
    return next
  }

  function handleBlur(field: 'username' | 'password') {
    setTouched((prev) => ({ ...prev, [field]: true }))
    setErrors(validate())
  }

  function handleChange(field: 'username' | 'password', value: string) {
    if (field === 'username') setUsername(value)
    else setPassword(value)

    if (touched[field]) {
      setErrors(validate())
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    setTouched({ username: true, password: true })
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <span className="block w-full pb-[43px] pt-5 text-center font-sans text-[30px] uppercase leading-[1.2] text-[var(--color-heading)]">
        Account Login
      </span>

      {/* Username field */}
      <div
        className="relative flex h-[75px] w-1/2 items-end border border-[var(--color-input-border)] border-b-0 border-r-0 bg-white transition-all has-val:h-[55px] sm:focus-within:h-[55px]"
        style={{ borderTopLeftRadius: 12 }}
      >
        <input
          id="username"
          name="username"
          type="text"
          autoComplete="username"
          required
          value={username}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('username', e.target.value)}
          onBlur={() => handleBlur('username')}
          className="h-full w-full bg-transparent px-[30px] font-bold text-[var(--color-input)] transition-all"
          placeholder=" "
        />
        <label
          htmlFor="username"
          className="pointer-events-none absolute left-0 top-[28px] w-full pl-[30px] font-bold text-[15px] leading-[1.2] text-[var(--color-input)] transition-all duration-400 has-val:top-[10px] has-val:text-[13px] has-val:text-[var(--color-label-focus)] peer-focus:top-[10px] peer-focus:text-[13px] peer-focus:text-[var(--color-label-focus)]"
        >
          Username
        </label>
      </div>

      {/* Password field */}
      <div
        className="relative flex h-[75px] w-1/2 items-end border border-[var(--color-input-border)] border-b-0 bg-white transition-all has-val:h-[55px] sm:focus-within:h-[55px]"
        style={{ borderTopRightRadius: 12 }}
      >
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('password', e.target.value)}
          onBlur={() => handleBlur('password')}
          className="peer h-full w-full bg-transparent px-[30px] font-bold text-[var(--color-input)] transition-all"
          placeholder=" "
        />
        <label
          htmlFor="password"
          className="pointer-events-none absolute left-0 top-[28px] w-full pl-[30px] font-bold text-[15px] leading-[1.2] text-[var(--color-input)] transition-all duration-400 peer-focus:top-[10px] peer-focus:text-[13px] peer-focus:text-[var(--color-label-focus)]"
        >
          Password
        </label>
      </div>

      {/* Validation errors */}
      {touched.username && errors.username && (
        <p className="flex items-center gap-1 px-[30px] pt-1 text-[13px] text-[var(--color-error)]">
          <AlertCircle size={14} />
          {errors.username}
        </p>
      )}
      {touched.password && errors.password && (
        <p className="flex items-center gap-1 px-[30px] pt-1 text-[13px] text-[var(--color-error)]">
          <AlertCircle size={14} />
          {errors.password}
        </p>
      )}

      {/* Sign in button */}
      <div className="mt-5 flex w-full flex-wrap justify-center">
        <button
          type="submit"
          className="relative flex h-[70px] w-full cursor-pointer items-center justify-center overflow-hidden border-none bg-[var(--color-button)] px-5 text-[15px] font-bold uppercase leading-[1.2] text-white transition-all duration-400 hover:bg-transparent hover:before:opacity-100"
          style={{
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12,
            zIndex: 1,
          }}
        >
          {/* Gradient overlay on hover */}
          <span
            className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-400"
            style={{
              background:
                'linear-gradient(to right, var(--color-gradient-start), var(--color-gradient-end))',
            }}
            aria-hidden="true"
          />
          <span className="peer-focus:opacity-100">Sign In</span>
        </button>
      </div>
    </form>
  )
}
