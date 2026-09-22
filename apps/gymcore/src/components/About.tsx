import { Play } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
        {/* Image side */}
        <div className="relative">
          <img
            src="https://picsum.photos/seed/gymcore-about/600/450"
            alt="About our gym"
            className="w-full rounded-lg object-cover"
          />
          <button
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-white shadow-lg transition-transform hover:scale-110"
            aria-label="Play video"
          >
            <Play className="h-6 w-6 ml-1" />
          </button>
        </div>

        {/* Text side */}
        <div>
          <h2 className="mb-4 text-3xl font-semibold text-ink md:text-4xl">Story About Us</h2>
          <p className="mb-4 leading-relaxed text-mist">
            We are a passionate fitness community dedicated to helping you achieve your health and
            wellness goals. Our state-of-the-art facilities and expert trainers provide everything
            you need for a transformative fitness journey.
          </p>
          <p className="mb-6 leading-relaxed text-mist">
            Since our founding, we have helped thousands of members transform their lives through
            personalized training programs, group classes, and a supportive community that keeps you
            motivated every step of the way.
          </p>
          <Button variant="primary" className="rounded-full px-8 py-3 text-sm font-semibold">
            Read More
          </Button>
        </div>
      </div>
    </section>
  )
}
