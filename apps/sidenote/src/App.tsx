import { useEffect, useState } from 'react'
import { NewsletterSidebar } from './components/NewsletterSidebar'
import { PostGrid } from './components/PostGrid'
import { CloseButton } from './components/CloseButton'
import { Footer } from './components/Footer'

export function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const toggleSidebar = () => setSidebarOpen((prev) => !prev)

  useEffect(() => {
    document.title = 'Sidenote — Newsletter Sidebar Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-content-bg text-body-text transition-colors dark:bg-gray-950 dark:text-white">
      <div className="flex flex-1 flex-col lg:flex-row">
        <main className="relative flex-1 p-6">
          <CloseButton
            className="absolute right-4 top-4"
            isOpen={sidebarOpen}
            onToggle={toggleSidebar}
          />
          <PostGrid className="mt-10" />
        </main>
        {sidebarOpen && <NewsletterSidebar />}
      </div>
      <Footer />
    </div>
  )
}
