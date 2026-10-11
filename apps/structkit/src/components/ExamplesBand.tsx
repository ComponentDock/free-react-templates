import { Lock, Mail, User } from 'lucide-react'
import { FacebookIcon, InstagramIcon, TwitterIcon } from './BrandIcons'
import { KitButton } from './KitButton'

const SOCIALS = [
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'Twitter', Icon: TwitterIcon },
  { label: 'Instagram', Icon: InstagramIcon },
]

/**
 * The closing marketing band: a centred "three pre-built pages" intro over a
 * photographic band that carries the kit's login card.
 */
export function ExamplesBand() {
  return (
    <>
      <section className="px-4 py-[6em] text-center sm:px-6">
        <div className="mx-auto w-full max-w-3xl">
          <h2 className="mb-4 text-[30px] font-normal text-heading">Completed with examples</h2>
          <p>
            The kit comes with three pre-built pages to help you get started faster. Change the text
            and images and you are good to go — the examples show what you can build with this kit.
          </p>
        </div>
      </section>

      <section
        className="relative px-4 py-[6em] sm:px-6"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/structkit-login/1920/900)' }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-60 bg-[linear-gradient(to_bottom,#f44336_0%,#f44336_44%,#1f0000_100%)]"
        />
        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <div className="w-full max-w-sm md:mx-auto">
            <form
              aria-label="Card Login"
              onSubmit={(event) => event.preventDefault()}
              className="overflow-hidden rounded bg-white shadow-raised"
            >
              <div className="bg-primary px-4 py-6 text-center text-white">
                <h4 className="text-2xl font-normal text-white">Card Login</h4>
                <div className="mt-4 flex justify-center gap-2">
                  {SOCIALS.map(({ label, Icon }) => (
                    <button
                      key={label}
                      type="button"
                      aria-label={label}
                      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white text-primary"
                    >
                      <Icon className="h-4 w-4" />
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-3 p-4">
                {[
                  { id: 'first-name', placeholder: 'First Name...', Icon: User },
                  { id: 'login-email', placeholder: 'Email...', Icon: Mail },
                  { id: 'login-password', placeholder: 'Password...', Icon: Lock },
                ].map(({ id, placeholder, Icon }) => (
                  <div key={id} className="flex items-stretch">
                    <span className="flex items-center rounded-l border border-r-0 border-line bg-light px-3 text-body">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <input
                      id={id}
                      aria-label={placeholder.replace('...', '')}
                      type={id === 'login-password' ? 'password' : 'text'}
                      placeholder={placeholder}
                      className="w-full rounded-r border border-line px-3 py-[6px] text-input outline-none placeholder:text-placeholder focus:border-primary"
                    />
                  </div>
                ))}
              </div>
              <div className="pb-6 text-center">
                <KitButton type="submit" color="primary" variant="white" size="md" className="px-6">
                  Get Started
                </KitButton>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
