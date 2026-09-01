import { TestimonialCarousel } from './components/TestimonialCarousel'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl font-bold text-dark mb-12">What Our Clients Say</h2>
          <TestimonialCarousel />
        </div>
      </section>
      <Footer />
    </div>
  )
}
