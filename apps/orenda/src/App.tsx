import { useEffect } from 'react'
import { Header } from './components/Header'
import { HeroSlider } from './components/HeroSlider'
import { Categories } from './components/Categories'
import { Stats } from './components/Stats'
import { PopularCourses } from './components/PopularCourses'
import { Faculty } from './components/Faculty'
import { AboutSection } from './components/AboutSection'
import { Testimonials } from './components/Testimonials'
import { BlogSection } from './components/BlogSection'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Orenda — Online Education Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-gray-800 antialiased dark:bg-gray-950">
      <Header />
      <main className="flex-1">
        <HeroSlider />
        <Categories />
        <Stats />
        <PopularCourses />
        <Faculty />
        <AboutSection />
        <Testimonials />
        <BlogSection />
        <section id="contact" aria-label="Contact" className="bg-lilac py-16 dark:bg-gray-900">
          <div className="mx-auto max-w-2xl px-4 text-center">
            <h2 className="font-display text-3xl font-bold text-title dark:text-white">
              Ready to start learning?
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Reach out and our team will help you pick the right course for your goals.
            </p>
            <a
              href="mailto:needhelp@gmail.com"
              className="mt-6 inline-block bg-brand px-10 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-sweep"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
