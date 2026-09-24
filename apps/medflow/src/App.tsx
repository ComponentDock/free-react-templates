import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Welcome from './components/Welcome'
import Departments from './components/Departments'
import Doctors from './components/Doctors'
import BookAppointment from './components/BookAppointment'
import QualityHealth from './components/QualityHealth'
import EmergencyContact from './components/EmergencyContact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Welcome />
      <Departments />
      <Doctors />
      <BookAppointment />
      <QualityHealth />
      <EmergencyContact />
      <Footer />
    </div>
  )
}
