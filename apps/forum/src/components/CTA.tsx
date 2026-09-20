export interface CTAProps {
  className?: string
}

export function CTA({ className }: CTAProps) {
  return (
    <section
      className={`relative bg-cover bg-center bg-no-repeat py-20 md:py-28 ${className ?? ''}`}
      style={{
        backgroundImage:
          'linear-gradient(rgba(4,9,30,0.85), rgba(4,9,30,0.85)), url(https://picsum.photos/seed/forum-cta/1920/800)',
      }}
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          Huge Transaction in last Week
        </h2>
        <p className="mb-8 text-sm leading-relaxed text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <a
          href="#"
          className="inline-block rounded-full bg-[#8ab92d] px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-[#76a025]"
        >
          Become a Member
        </a>
      </div>
    </section>
  )
}
