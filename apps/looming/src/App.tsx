import { useEffect } from 'react'
import { Looming } from './components/Looming'

export function App() {
  useEffect(() => {
    document.title = 'Looming — Landing Soon'
  }, [])

  return <Looming />
}
