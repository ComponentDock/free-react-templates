import { useState, type FormEvent } from 'react'
import { FacebookIcon, InstagramIcon, TwitterIcon } from './BrandIcons'
import { KitButton } from './KitButton'
import { fieldErrors, loginSchema, type LoginField, type LoginValues } from '../lib/login'

const SOCIALS = [
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'Twitter', Icon: TwitterIcon },
  { label: 'Instagram', Icon: InstagramIcon },
]

const INPUT =
  'h-12 w-full rounded border-2 border-gray-200 bg-white px-4 text-input focus:border-primary-500 focus:outline-none'

const INITIAL: LoginValues = { username: '', password: '', terms: false }

/** The photo-backed signup band with its validated card login form. */
export function SignupBand() {
  const [values, setValues] = useState<LoginValues>(INITIAL)
  const [errors, setErrors] = useState<Partial<Record<LoginField, string>>>({})
  const [created, setCreated] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = loginSchema.safeParse(values)
    if (!result.success) {
      setErrors(fieldErrors(result.error))
      return
    }
    setErrors({})
    setCreated(true)
  }

  return (
    <section
      id="signup"
      className="bg-cover bg-center px-4 py-24 sm:px-6"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/sorbet-signup/1920/1200)' }}
    >
      <div className="mx-auto max-w-md">
        <form
          noValidate
          onSubmit={handleSubmit}
          className="rounded bg-white px-8 py-10 text-center shadow-card"
        >
          <h3 className="text-2xl text-heading">Card Login</h3>

          <div className="mt-6 flex justify-center gap-3">
            {SOCIALS.map(({ label, Icon }) => (
              <a
                key={label}
                href="#signup"
                aria-label={`Sign in with ${label}`}
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-200 bg-white text-primary-500 hover:border-primary-500"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <div className="mt-6 space-y-4 text-left">
            <div>
              <label htmlFor="sorbet-login-username" className="text-sm text-heading">
                Username
              </label>
              <input
                id="sorbet-login-username"
                type="text"
                placeholder="Username..."
                value={values.username}
                onChange={(event) =>
                  setValues((current) => ({ ...current, username: event.target.value }))
                }
                className={`mt-1 ${INPUT}`}
              />
              {errors.username && (
                <p role="alert" className="mt-1 text-sm text-danger">
                  {errors.username}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="sorbet-login-password" className="text-sm text-heading">
                Password
              </label>
              <input
                id="sorbet-login-password"
                type="password"
                placeholder="Password..."
                value={values.password}
                onChange={(event) =>
                  setValues((current) => ({ ...current, password: event.target.value }))
                }
                className={`mt-1 ${INPUT}`}
              />
              {errors.password && (
                <p role="alert" className="mt-1 text-sm text-danger">
                  {errors.password}
                </p>
              )}
            </div>

            <label
              htmlFor="sorbet-login-terms"
              className="flex items-center gap-2 text-sm text-body"
            >
              <input
                id="sorbet-login-terms"
                type="checkbox"
                checked={values.terms}
                onChange={(event) =>
                  setValues((current) => ({ ...current, terms: event.target.checked }))
                }
                className="h-4 w-4 cursor-pointer accent-primary-500"
              />
              I Agree to the terms and conditions.
            </label>
            {errors.terms && (
              <p role="alert" className="text-sm text-danger">
                {errors.terms}
              </p>
            )}
          </div>

          <div className="mt-8">
            <KitButton
              color="primary"
              variant="white"
              size="lg"
              type="submit"
              className="border-gray-200 text-primary-500"
            >
              Get Started
            </KitButton>
          </div>

          {created && (
            <p role="status" className="mt-4 text-sm text-success">
              Welcome aboard — your account is ready.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
