import { Button } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" className="bg-white py-16 sm:py-20" data-testid="about">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        {/* Left: Image with counter overlay */}
        <div className="relative">
          <img
            src="https://picsum.photos/seed/zenbloom-about/600/500"
            alt="Yoga practitioner in meditation pose"
            className="w-full rounded-lg object-cover shadow-lg"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 rounded-tr-lg bg-sage-400 px-6 py-4 text-white shadow-lg">
            <p className="text-3xl font-bold">42</p>
            <p className="text-sm font-medium">Years Experience</p>
          </div>
        </div>

        {/* Right: Text */}
        <div>
          <p className="mb-1 font-display text-2xl text-ember-400">About Our Studio</p>
          <h2 className="mb-6 text-3xl font-bold text-gray-900">Life in Divine Yoga</h2>
          <p className="mb-4 text-gray-500 leading-relaxed">
            Zenbloom has been guiding people on their yoga journey for over four decades. Our studio
            blends traditional techniques with modern wellness practices to create a transformative
            experience for every student.
          </p>
          <blockquote className="mb-6 border-l-4 border-sage-400 pl-4 text-gray-600 italic">
            &ldquo;Yoga is the journey of the self, through the self, to the self.&rdquo;
          </blockquote>
          <Button variant="primary" className="bg-sage-400 hover:bg-sage-500">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
