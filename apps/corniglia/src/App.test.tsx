import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the carousel section and footer', () => {
    render(<App />)
    expect(screen.getByText('Carousel #19')).toBeInTheDocument()
    expect(screen.getByText(/Component Dock/)).toBeInTheDocument()
  })

  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Corniglia — Testimonials Carousel')
  })
})
