import { useEffect } from 'react'
import { ComingSoon } from './components/ComingSoon'

export function App() {
  useEffect(() => {
    document.title = 'Debut — Coming Soon'
  }, [])

  return <ComingSoon />
}
