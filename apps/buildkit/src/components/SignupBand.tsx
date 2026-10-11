import { AtSign, Lock, User } from 'lucide-react'
import { Button, ButtonLink } from '@free-react-templates/ui'
import { FacebookIcon, GoogleIcon, TwitterIcon } from './BrandIcons'

const SOCIALS = [
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'Twitter', Icon: TwitterIcon },
  { label: 'Google', Icon: GoogleIcon },
]

const LOGIN_FIELDS = [
  { id: 'buildkit-login-name', label: 'First name', type: 'text', Icon: User },
  { id: 'buildkit-login-email', label: 'Email', type: 'text', Icon: AtSign },
  { id: 'buildkit-login-password', label: 'Password', type: 'password', Icon: Lock },
]

const FEATURE_CARDS = [
  {
    id: 'default-featured',
    header: 'Default Featured',
    text: 'With supporting text below as a natural lead-in to additional content. A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    footer: '',
  },
  {
    id: 'special-title',
    header: 'Featured',
    text: 'A paradisematic country, in which roasted parts of sentences fly into your mouth.',
    footer: '',
  },
  {
    id: 'card-with-footer',
    header: 'Card with footer',
    text: 'With supporting text below as a natural lead-in to additional content.',
    footer: '2 days ago',
  },
]

export function SignupBand() {
  return (
    <section
      id="signup"
      className="bg-cover bg-center px-4 py-24 sm:px-6"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/buildkit-signup-bg/1920/1200)' }}
    >
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_2fr]">
        <form
          noValidate
          onSubmit={(event) => event.preventDefault()}
          className="card-login-gradient rounded p-6 text-center shadow-material"
        >
          <h3 className="text-xl text-white">Card Login</h3>
          <div className="mt-4 flex justify-center gap-2">
            {SOCIALS.map(({ label, Icon }) => (
              <a
                key={label}
                href="#signup"
                aria-label={`Sign in with ${label}`}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary-600"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <div className="mt-6 space-y-3 text-left">
            {LOGIN_FIELDS.map(({ id, label, type, Icon }) => (
              <div key={id} className="flex items-center gap-3 rounded bg-white px-3">
                <Icon className="h-4 w-4 text-gray-400" aria-hidden="true" />
                <input
                  id={id}
                  type={type}
                  aria-label={label}
                  placeholder={`${label}...`}
                  className="h-12 w-full text-body focus:outline-none"
                />
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Button type="submit" className="rounded bg-primary-600 px-[18px] py-3 text-white">
              Get Started
            </Button>
          </div>
        </form>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURE_CARDS.map((card) => (
            <div key={card.id} className="flex flex-col rounded bg-white shadow-material">
              <h5 className="border-b border-gray-100 px-5 py-4 text-lg text-heading">
                {card.header}
              </h5>
              <div className="flex-1 px-5 py-4">
                <h6 className="text-base text-heading">Special title treatment</h6>
                <p className="mt-2 text-sm text-body">{card.text}</p>
                <ButtonLink href="#signup" className="mt-4">
                  Go somewhere
                </ButtonLink>
              </div>
              {card.footer && (
                <div className="border-t border-gray-100 px-5 py-3 text-sm text-body/70">
                  {card.footer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
