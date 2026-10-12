import { useEffect } from 'react'
import { Foretaste } from './components/Foretaste'

export function App() {
  useEffect(() => {
    document.title = 'Foretaste — Almost Here'
  }, [])

  return <Foretaste />
}
