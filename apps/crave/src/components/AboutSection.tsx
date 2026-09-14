import { ButtonLink } from '@free-react-templates/ui'

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-10 md:flex-row">
          {/* Images */}
          <div className="relative w-full md:w-1/2">
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://picsum.photos/seed/crave-about1/500/350"
                alt="Restaurant interior"
                className="w-full object-cover"
                loading="lazy"
              />
            </div>
            <img
              src="https://picsum.photos/seed/crave-about2/250/180"
              alt="Plated dish"
              className="absolute -bottom-8 -right-4 w-2/5 rounded-lg object-cover shadow-lg sm:-right-8"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 md:pl-10">
            <h4 className="mb-3 font-heading text-2xl font-semibold text-brand">About Us</h4>
            <h2 className="mb-6 font-heading text-3xl font-bold text-heading sm:text-4xl lg:text-5xl">
              We speak the good food language
            </h2>
            <p className="mb-6 leading-relaxed text-gray-500">
              Our passion for authentic flavors drives everything we do. From farm-fresh ingredients
              to time-honored recipes, every dish tells a story of culinary excellence. We believe
              great food brings people together and creates lasting memories.
            </p>
            <ButtonLink
              href="#menu"
              size="md"
              className="rounded-full bg-primary-600 text-white hover:bg-primary-700 shadow-lg"
            >
              Learn More
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
