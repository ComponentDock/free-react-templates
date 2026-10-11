import { cn } from '@free-react-templates/ui'
import { Band, DemoPanel, GroupLabel } from './Band'

const FIELD =
  'w-full rounded border border-gray-300 bg-white px-3 py-2 text-[0.9rem] text-body outline-none transition-colors focus:border-kit-primary'

const FIELD_SHADOW = cn(FIELD, 'border-transparent shadow-kit-input')

export function FormsShowcase() {
  return (
    <Band
      title="Forms"
      lead="Custom input styles for actions in forms, dialogs, and more, with the kit's focus treatment and shadowed variant."
    >
      <DemoPanel>
        <GroupLabel className="text-[1.25rem]">Input</GroupLabel>
        <form onSubmit={(event) => event.preventDefault()} className="grid max-w-xl gap-4">
          <label className="block">
            <span className="mb-1 block text-[0.9rem]">Name</span>
            <input type="text" name="name" placeholder="Full name" className={FIELD} />
          </label>
          <label className="block">
            <span className="mb-1 block text-[0.9rem]">Email</span>
            <input type="email" name="email" placeholder="you@example.com" className={FIELD} />
          </label>
          <label className="block">
            <span className="mb-1 block text-[0.9rem]">Datetime Picker</span>
            <input type="datetime-local" name="datetime" className={FIELD} />
          </label>
        </form>
      </DemoPanel>

      <div>
        <GroupLabel>Input Shadow</GroupLabel>
        <form onSubmit={(event) => event.preventDefault()} className="grid max-w-xl gap-4">
          <label className="block">
            <span className="mb-1 block text-[0.9rem]">Name</span>
            <input type="text" name="username" placeholder="Username" className={FIELD_SHADOW} />
          </label>
          <label className="block">
            <span className="mb-1 block text-[0.9rem]">Email</span>
            <input type="email" name="shadow-email" placeholder="Email" className={FIELD_SHADOW} />
          </label>
          <label className="block">
            <span className="mb-1 block text-[0.9rem]">Password</span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={FIELD_SHADOW}
            />
          </label>
        </form>
      </div>
    </Band>
  )
}
