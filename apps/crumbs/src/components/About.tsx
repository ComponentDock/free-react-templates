import { Button } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" className="bg-white pb-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
          <div className="w-full lg:w-1/2">
            <img
              src="https://picsum.photos/seed/crumbs-about/600/500"
              alt="Cakes from our bakery"
              className="w-full rounded-lg object-cover"
              loading="lazy"
            />
          </div>
          <div className="w-full lg:w-5/12">
            <div className="mb-8">
              <span className="font-dm-sans text-sm uppercase tracking-[0.2em] text-orange-600">
                Fresh &amp; Delicious
              </span>
              <h2 className="mt-3 font-quicksand text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                A Simple Way to
                <br />
                Eating Delicious
              </h2>
            </div>
            <p className="mb-10 text-gray-600 leading-relaxed">
              We believe that every cake should be a masterpiece. From selecting the finest
              ingredients to the final decorative touch, our artisans pour their heart into every
              creation. Taste the difference that passion and quality make.
            </p>
            <Button className="rounded-full bg-orange-600 px-8 py-3 font-quicksand text-sm font-semibold text-white shadow-md hover:bg-orange-700">
              Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
