import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { LogoBar } from './components/LogoBar'
import { Features } from './components/Features'
import { Testimonial } from './components/Testimonial'
import { FeatureShowcase } from './components/FeatureShowcase'
import { Pricing } from './components/Pricing'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="font-sans text-ink">
      <Navbar />
      <Hero />
      <LogoBar />
      <Features />
      <Testimonial />
      <FeatureShowcase
        subtitle="Life Changing App"
        heading="Far far away, behind the word mountains"
        description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live."
        imageUrl="https://picsum.photos/seed/swiftly-rain/800/500"
        imageAlt="Payment illustration"
        reverse={false}
      />
      <FeatureShowcase
        subtitle="Life Changing App"
        heading="Far far away, behind the word mountains"
        description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live."
        imageUrl="https://picsum.photos/seed/swiftly-wallet/800/500"
        imageAlt="Wallet illustration"
        reverse={true}
      />
      <Pricing />
      <Blog />
      <Footer />
    </div>
  )
}
