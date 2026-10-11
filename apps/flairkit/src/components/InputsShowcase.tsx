import type { InputHTMLAttributes } from 'react'
import { Lock, Mail, User } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { Band, SectionHeading } from './Band'
import { IconField } from './IconField'

type FieldState = 'default' | 'valid' | 'invalid'

const stateClasses: Record<FieldState, string> = {
  default: 'border-gray-300',
  valid: 'border-flair-success',
  invalid: 'border-flair-danger',
}

function TextField({
  state = 'default',
  shape = 'plain',
  className,
  ...props
}: {
  state?: FieldState
  shape?: 'plain' | 'pill'
  className?: string
} & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        'm-1 h-10 border bg-white px-3 text-[0.9rem] outline-none focus:border-flair-primary focus:ring-0',
        shape === 'pill' ? 'rounded-[30px]' : 'rounded',
        stateClasses[state],
        className,
      )}
      {...props}
    />
  )
}

/** The four labeled input styles: plain, pill, transparent icons, underline. */
export function InputsShowcase() {
  return (
    <Band>
      <SectionHeading className="mb-4">Inputs</SectionHeading>

      <div className="space-y-6">
        <div>
          <h3 className="text-[1.5rem] leading-none text-heading-slate">
            <small className="text-[0.9rem] text-[#888]">Inputs Style 1</small>
          </h3>
          <div className="mt-2 grid gap-3 md:grid-cols-3">
            <TextField placeholder="Default" aria-label="Default" />
            <TextField
              state="valid"
              placeholder="First name"
              aria-label="Valid first name"
              defaultValue="Mark"
            />
            <TextField
              state="invalid"
              placeholder="First name"
              aria-label="Invalid first name"
              defaultValue="Error Input"
            />
          </div>
        </div>

        <div>
          <h3 className="text-[1.5rem] leading-none text-heading-slate">
            <small className="text-[0.9rem] text-[#888]">Inputs Style 2</small>
          </h3>
          <div className="mt-2 grid gap-3 md:grid-cols-3">
            <TextField shape="pill" placeholder="Default" aria-label="Default pill" />
            <TextField
              shape="pill"
              state="valid"
              placeholder="First name"
              aria-label="Valid first name pill"
              defaultValue="Mark"
            />
            <TextField
              shape="pill"
              state="invalid"
              placeholder="First name"
              aria-label="Invalid first name pill"
              defaultValue="Error Input"
            />
          </div>
        </div>

        <div>
          <h3 className="text-[1.5rem] leading-none text-heading-slate">
            <small className="text-[0.9rem] text-[#888]">Inputs Style 3</small>
          </h3>
          <div className="mt-2 grid gap-4 md:grid-cols-3">
            <IconField
              icon={<Lock className="h-4 w-4" />}
              type="password"
              placeholder="Password"
              aria-label="Password"
            />
            <IconField
              icon={<User className="h-4 w-4" />}
              shape="pill"
              placeholder="Username"
              aria-label="Username with icon"
            />
            <IconField
              icon={<User className="h-4 w-4" />}
              iconPosition="end"
              placeholder="Email address"
              aria-label="Email address with icon"
            />
          </div>
        </div>

        <div>
          <h3 className="text-[1.5rem] leading-none text-heading-slate">
            <small className="text-[0.9rem] text-[#888]">Inputs Style 4</small>
          </h3>
          <div className="mt-2 grid gap-4 md:grid-cols-3">
            <IconField
              icon={<User className="h-4 w-4" />}
              shape="underline"
              placeholder="Username"
              aria-label="Underline username"
            />
            <IconField
              icon={<Lock className="h-4 w-4" />}
              shape="underline"
              type="password"
              placeholder="Password"
              aria-label="Underline password"
            />
            <IconField
              icon={<Mail className="h-4 w-4" />}
              shape="underline"
              type="email"
              placeholder="Email"
              aria-label="Underline email"
            />
          </div>
        </div>
      </div>
    </Band>
  )
}
