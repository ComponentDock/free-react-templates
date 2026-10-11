import { useEffect } from 'react'
import { ComingSoon } from './components/ComingSoon'

export function App() {
  useEffect(() => {
    document.title = 'Airborne — Coming Soon'
  }, [])

  return <ComingSoon />
}
