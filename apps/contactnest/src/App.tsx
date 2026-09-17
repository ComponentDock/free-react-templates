import { useEffect } from 'react'
import { ModalCard } from './components/ModalCard'

export function App() {
  useEffect(() => {
    document.title = 'ContactNest — Contact Form Template'
  }, [])

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gray-900">
      {/* Dark map background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 grayscale"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/contactnest-map/1920/1080)',
        }}
        aria-hidden="true"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      {/* Modal card */}
      <ModalCard />
    </div>
  )
}
