import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ContactInfo from './components/ContactInfo'
import Welcome from './components/Welcome'
import Services from './components/Services'
import Doctors from './components/Doctors'
import Testimonials from './components/Testimonials'
import Stats from './components/Stats'
import AppointmentForm from './components/AppointmentForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <ContactInfo />
        <Welcome />
        <Services />
        <Doctors />
        <Testimonials />
        <Stats />
        <AppointmentForm />
      </main>
      <Footer />
    </div>
  )
}
