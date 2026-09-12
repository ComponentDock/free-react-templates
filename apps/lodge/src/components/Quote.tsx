export function Quote() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
        <blockquote
          className="mb-8 text-xl font-light leading-relaxed text-lodge-700 md:text-2xl"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          &ldquo;Customers may forget what you said but they will never forget how you made them
          feel.&rdquo;
        </blockquote>
        <div className="grid gap-6 md:grid-cols-2">
          <p className="text-sm leading-relaxed text-lodge-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus libero mauris, bibendum
            eget sapien ac, ultrices rhoncus ipsum. Donec nec sapien in urna fermentum ornare. Morbi
            vel ultrices leo.
          </p>
          <p className="text-sm leading-relaxed text-lodge-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at vulputate est. Donec
            tempor felis at nibh eleifend malesuada. Nullam suscipit lobortis aliquam. Phasellus
            rutrum magna.
          </p>
        </div>
      </div>
    </section>
  )
}
