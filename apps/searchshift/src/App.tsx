import { useEffect } from 'react'
import { SearchForm } from './components/SearchForm'

export function App() {
  useEffect(() => {
    document.title = 'SearchShift — Cinematic Search Form'
  }, [])

  return <SearchForm />
}
