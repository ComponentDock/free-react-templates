import Header from './components/Header'
import Hero from './components/Hero'
import Courses from './components/Courses'
import Instructors from './components/Instructors'
import Register from './components/Register'
import Events from './components/Events'
import Blog from './components/Blog'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Courses />
        <Instructors />
        <Register />
        <Events />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
