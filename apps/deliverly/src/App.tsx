import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { InquiryCard } from './components/InquiryCard'
import { Pricing } from './components/Pricing'
import { ProofOnDisplay } from './components/ProofOnDisplay'
import { RecentBlog } from './components/RecentBlog'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'

/* Deliverly — logistics & delivery one-pager. Section order mirrors the
   recreated source design 1:1: transparent navbar over the hero, full-screen
   photo hero, floating business-inquiry card, proof section, pricing,
   services, testimonials, latest blog posts, light-gray footer. */
export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <InquiryCard />
        <ProofOnDisplay />
        <Pricing />
        <Services />
        <Testimonials />
        <RecentBlog />
      </main>
      <Footer />
    </>
  )
}
