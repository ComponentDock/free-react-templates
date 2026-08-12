import { features } from '../data'

export function WhyChooseUs() {
  return (
    <section
      aria-label="Why choose us"
      className="site-section bg-cover bg-fixed bg-center py-10 md:py-20"
      style={{
        backgroundImage: "url('https://picsum.photos/seed/benefact-why/1600/900')",
      }}
    >
      <div className="bg-black/60">
        <div className="mx-auto max-w-7xl px-4 py-10 md:py-20">
          <h2 className="font-script text-4xl text-white md:text-5xl">Why Choose Us</h2>
          <p className="mt-4 max-w-2xl font-light text-white/90">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem modi, quaerat laborum id
            fugit blanditiis ratione delectus assumenda, ea voluptates dignissimos possimus quos.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.number} className="feature-29012 flex items-start gap-6">
                <div className="flex h-20 w-20 flex-none items-center justify-center rounded-full border-2 border-white text-2xl text-white">
                  {feature.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  <p className="mt-2 font-light text-white/85">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
