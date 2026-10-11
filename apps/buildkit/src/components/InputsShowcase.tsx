import { Mail, User } from 'lucide-react'
import { ShowcaseSection, SubHeading } from './section'

const FIELDS = [
  { id: 'buildkit-name', label: 'Full name', Icon: User },
  { id: 'buildkit-email', label: 'Email address', Icon: Mail },
]

const HELPER = "We'll never share your details with anyone else."

export function InputsShowcase() {
  return (
    <ShowcaseSection id="inputs" title="Inputs">
      <div>
        <SubHeading>With Floating Label</SubHeading>
        <div className="mt-6 grid max-w-3xl gap-6 md:grid-cols-2">
          {FIELDS.map(({ id, label, Icon }) => (
            <form key={id} className="space-y-1" onSubmit={(event) => event.preventDefault()}>
              <div className="relative">
                <input
                  id={id}
                  type="text"
                  placeholder=" "
                  className="peer h-12 w-full rounded border border-gray-200 bg-white px-4 text-body transition-colors focus:border-primary-600 focus:outline-none"
                />
                <label
                  htmlFor={id}
                  className="pointer-events-none absolute left-4 top-0 -translate-y-1/2 bg-white px-1 text-xs text-body transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary-600"
                >
                  {label}
                </label>
                <Icon
                  className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-300"
                  aria-hidden="true"
                />
              </div>
              <p className="text-sm text-body/80">{HELPER}</p>
            </form>
          ))}
        </div>
      </div>
    </ShowcaseSection>
  )
}
