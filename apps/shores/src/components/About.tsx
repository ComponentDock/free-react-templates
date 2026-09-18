import { Button } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Image */}
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://picsum.photos/seed/shores-about/800/600"
              alt="Nonprofit team working together"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          {/* Text */}
          <div>
            <h2 className="mb-6 text-3xl font-bold leading-tight text-ink">
              We are nonprofit team
              <br />
              and work worldwide
            </h2>
            <p className="mb-4 text-mist">
              For over a decade, our team has been dedicated to improving lives across the globe.
              From building schools in rural communities to providing healthcare in underserved
              areas, we believe in the power of collective action.
            </p>
            <p className="mb-8 text-mist">
              Our mission is to create lasting change through education, healthcare, and sustainable
              development. Every program we run is designed with the community at its center,
              ensuring that our impact is both meaningful and enduring.
            </p>
            <Button variant="primary">Learn more</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
