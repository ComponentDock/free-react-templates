import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /verdant/i })).toBeInTheDocument()
    expect(screen.getByText(/plants exist in the weather/i)).toBeInTheDocument()
    expect(screen.getByText(/our services/i)).toBeInTheDocument()
    expect(screen.getByText(/about us/i)).toBeInTheDocument()
    expect(screen.getByText(/our portfolio/i)).toBeInTheDocument()
    expect(screen.getByText(/testimonial/i)).toBeInTheDocument()
    expect(screen.getByText(/new arrivals/i)).toBeInTheDocument()
    expect(screen.getByText(/latest news/i)).toBeInTheDocument()
    expect(screen.getByText(/join the newsletter/i)).toBeInTheDocument()
    expect(screen.getByText(/get in touch/i)).toBeInTheDocument()
    expect(screen.getByText(/component dock/i)).toBeInTheDocument()
  })

  it('sets document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Verdant — Gardening & Landscaping Template')
  })
})
