import { useEffect } from 'react'
import { Pending } from './components/Pending'

export function App() {
  useEffect(() => {
    document.title = 'Pending — Not Long'
  }, [])

  return <Pending />
}
