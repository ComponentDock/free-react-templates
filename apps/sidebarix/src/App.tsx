import { useEffect } from 'react'
import { ProfileSidebar } from './components/ProfileSidebar'
import { PostGrid } from './components/PostGrid'
import { CloseButton } from './components/CloseButton'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Sidebarix — Profile Sidebar Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-surface text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <div className="flex flex-1 flex-col lg:flex-row">
        <ProfileSidebar />
        <main className="relative flex-1 px-6 py-4">
          <CloseButton className="absolute left-4 top-4" />
          <PostGrid className="mt-10" />
        </main>
      </div>
      <Footer />
    </div>
  )
}
