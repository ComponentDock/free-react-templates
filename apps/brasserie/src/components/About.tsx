export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-heading text-center text-3xl font-bold uppercase tracking-wide text-black">
          About Us
        </h2>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          {/* Restaurant Style */}
          <div className="flex flex-col gap-6">
            <h3 className="font-heading text-xl font-semibold uppercase tracking-wide text-brand-red">
              Restaurant Style
            </h3>
            <p className="text-sm leading-relaxed text-gray-600">
              A refined dining experience where classic flavors meet modern elegance. Our chefs
              craft each dish with precision, using the finest seasonal ingredients sourced from
              local purveyors.
            </p>
            <img
              src="https://picsum.photos/seed/brasserie-about1/600/400"
              alt="Restaurant interior"
              className="w-full rounded object-cover"
            />
          </div>

          {/* Our Chef */}
          <div className="flex flex-col gap-6">
            <h3 className="font-heading text-xl font-semibold uppercase tracking-wide text-brand-red">
              Our Chef
            </h3>
            <p className="text-sm leading-relaxed text-gray-600">
              With over two decades of culinary expertise, our head chef brings passion and
              innovation to every plate. Trained in Paris and Tokyo, blending traditions with
              contemporary technique.
            </p>
            <img
              src="https://picsum.photos/seed/brasserie-about2/600/400"
              alt="Our chef at work"
              className="w-full rounded object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
