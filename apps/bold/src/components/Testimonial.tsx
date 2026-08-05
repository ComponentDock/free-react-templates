import { Quote } from 'lucide-react'

export function Testimonial() {
  return (
    <section className="bg-mist py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Quote className="mx-auto h-10 w-10 text-primary-500" aria-hidden="true" />
        <h2 className="mt-6 font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
          Join over 1M+ people who enjoy using our app
        </h2>
        <blockquote className="mt-6 text-lg leading-relaxed text-muted dark:text-gray-300">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts — and yet the app still works beautifully for everyone.
        </blockquote>

        <img
          src="https://picsum.photos/seed/bold-customer/96/96"
          alt="Kayla Bryant avatar"
          className="mx-auto mt-8 h-16 w-16 rounded-full border-2 border-primary-500 object-cover"
        />
        <h3 className="mt-4 font-display text-lg font-semibold text-ink dark:text-white">
          Kayla Bryant
        </h3>
        <p className="mt-1 text-sm text-muted dark:text-gray-400">Social Media Manager</p>
      </div>
    </section>
  )
}
