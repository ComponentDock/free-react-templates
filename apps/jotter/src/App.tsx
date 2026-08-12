import { useEffect } from 'react'
import { Layout } from './components/Layout'

export function App() {
  useEffect(() => {
    document.title = 'Jotter — Personal Blog Template'
  }, [])

  return <Layout />
}
