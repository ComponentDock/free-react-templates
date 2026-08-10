import { useEffect } from 'react'
import { Layout } from './components/Layout'

export function App() {
  useEffect(() => {
    document.title = 'Memoir — Lifestyle Blog'
  }, [])

  return <Layout />
}
