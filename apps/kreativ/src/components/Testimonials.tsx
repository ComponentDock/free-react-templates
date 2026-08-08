interface Testimonial {
  quote: string
  name: string
  role: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      '"Pixel Studio transformed our brand completely. They didn\'t just design a logo—they created an entire identity that resonates with our customers."',
    name: 'David Kim',
    role: 'CEO, Nova Financial',
    avatar: 'https://picsum.photos/seed/kreativ-avatar-1/100/100',
  },
  {
    quote:
      '"Working with Pixel Studio was a game-changer. Their attention to detail and understanding of our vision exceeded every expectation."',
    name: 'Lisa Thompson',
    role: 'Founder, Mindful Inc.',
    avatar: 'https://picsum.photos/seed/kreativ-avatar-2/100/100',
  },
  {
    quote:
      '"The team at Pixel Studio exceeded all expectations. They delivered a platform that\'s beautiful, fast, and incredibly easy to use."',
    name: 'Michael Torres',
    role: 'Marketing Director, Urban Eats',
    avatar: 'https://picsum.photos/seed/kreativ-avatar-3/100/100',
  },
]

export function Testimonials() {
  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-900 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
            What Clients Say
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about
            working with us.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="relative rounded-2xl bg-white p-8 shadow-sm dark:bg-gray-800"
            >
              <blockquote className="text-gray-700 dark:text-gray-300">
                <p className="leading-relaxed">{testimonial.quote}</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
