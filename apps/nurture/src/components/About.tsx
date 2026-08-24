import { CheckCircle } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative">
            <img
              src="https://picsum.photos/seed/nurture-about/600/500"
              alt="Children learning in a classroom"
              className="w-full rounded-lg object-cover shadow-lg"
            />
            <div className="absolute -bottom-4 -right-4 rounded-lg bg-brand px-6 py-3 text-white shadow-lg">
              <span className="text-2xl font-bold">15+</span>
              <span className="block text-sm">Years Experience</span>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="mb-4 text-3xl font-bold text-ink md:text-4xl">About Us</h2>
            <p className="mb-6 text-mist">
              We are dedicated to providing the highest quality early childhood education. Our
              experienced teachers create a warm, nurturing environment where every child can thrive
              and reach their full potential.
            </p>
            <ul className="mb-8 space-y-3">
              {[
                'Qualified and caring teachers',
                'Safe and stimulating environment',
                'Age-appropriate curriculum',
                'Regular parent communication',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-ink">
                  <CheckCircle className="h-5 w-5 text-brand" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#courses"
              className="inline-block rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
