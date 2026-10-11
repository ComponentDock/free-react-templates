import { useEffect } from 'react'
import { ComingSoon } from './components/ComingSoon'

export function App() {
  useEffect(() => {
    document.title = 'Awaited — Coming Soon'
  }, [])

  return <ComingSoon className="min-h-screen" />
}
