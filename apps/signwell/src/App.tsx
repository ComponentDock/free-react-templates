import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { SocialLogin } from './components/SocialLogin'
import { Divider } from './components/Divider'
import { LoginForm } from './components/LoginForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'SignWell — Login Form Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-surface text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="flex w-full max-w-4xl flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
          <div className="w-full max-w-xs md:w-1/2">
            <SocialLogin />
          </div>

          <div className="hidden w-px self-stretch bg-gray-300 dark:bg-gray-600 md:block" />
          <div className="w-full md:hidden">
            <Divider />
          </div>

          <div className="w-full md:w-1/2">
            <LoginForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
