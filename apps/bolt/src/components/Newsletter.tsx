import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'

export function Newsletter() {
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubscribed(true)
  }

  return (
    <section
      id="news"
      className="relative bg-cover bg-center py-20"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/bolt-2/1600/700)' }}
    >
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 sm:px-6 lg:flex-row lg:justify-between lg:px-8">
        <h2 className="text-center text-3xl font-bold text-white md:text-4xl lg:text-left">
          Subscribe to <span className="text-brand">newsletter</span>
        </h2>

        {subscribed ? (
          <p role="status" className="text-lg font-bold text-brand">
            Thanks for subscribing!
          </p>
        ) : (
          <form onSubmit={handleSubscribe} className="flex w-full max-w-md">
            <label htmlFor="newsletterEmail" className="sr-only">
              Email
            </label>
            <input
              id="newsletterEmail"
              name="email"
              type="email"
              required
              placeholder="Your e-mail here"
              className="h-14 w-full bg-white px-5 text-[#505050] focus:outline-none"
            />
            <Button
              type="submit"
              className="h-14 shrink-0 rounded-none bg-brand px-8 text-base font-bold text-[#353535] hover:bg-primary-400"
            >
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
