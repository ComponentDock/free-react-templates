import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { PopularFoods } from './components/PopularFoods'
import { PopularDesserts } from './components/PopularDesserts'
import { Testimonials } from './components/Testimonials'
import { PhotoGallery } from './components/PhotoGallery'
import { Events } from './components/Events'
import { BookTable } from './components/BookTable'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PopularFoods />
      <PopularDesserts />
      <section
        id="gallery"
        className="relative bg-cover bg-center bg-fixed bg-no-repeat"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/feastcraft-testimonials/1920/800)',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-20">
          <div className="grid gap-12 md:grid-cols-2">
            <Testimonials />
            <PhotoGallery />
          </div>
        </div>
      </section>
      <Events />
      <BookTable />
      <Footer />
    </div>
  )
}
