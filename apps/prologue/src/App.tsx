import { useEffect } from 'react'
import { Prologue } from './components/Prologue'

export function App() {
  useEffect(() => {
    document.title = 'Prologue — Nearly There'
  }, [])

  return <Prologue />
}
