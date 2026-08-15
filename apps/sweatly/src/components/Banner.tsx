interface BannerProps {
  image: string
  heading: string
  lead: string
}

export function Banner({ image, heading, lead }: BannerProps) {
  return (
    <section
      className="relative flex min-h-[500px] items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <h2 className="text-3xl font-bold text-white md:text-5xl">{heading}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-xl text-white">{lead}</p>
      </div>
    </section>
  )
}
