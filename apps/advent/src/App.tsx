import { useEffect } from 'react'
import { ComingSoon } from './components/ComingSoon'

export function App() {
  useEffect(() => {
    document.title = 'Advent — Coming Soon'
  }, [])

  return <ComingSoon />
}
