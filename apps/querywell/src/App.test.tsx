import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the hero search and footer', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByRole('form', { name: /search form/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /component dock/i })).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('QueryWell — Search Form Template')
  })
})
