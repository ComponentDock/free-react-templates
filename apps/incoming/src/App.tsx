import { useEffect } from 'react'
import { UnderConstruction } from './components/UnderConstruction'

export function App() {
  useEffect(() => {
    document.title = 'Incoming — Under Construction'
  }, [])

  return <UnderConstruction />
}
