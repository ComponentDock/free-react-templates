import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the search card and footer', () => {
    render(<App />)
    expect(screen.getByRole('form', { name: /search form/i })).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Seekgate — Advanced Search Form')
  })
})
