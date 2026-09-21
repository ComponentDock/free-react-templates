import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the full template', () => {
    render(<App />)
    expect(screen.getAllByText('Sartorial').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('heading', { level: 1 }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('What We Offer')).toBeInTheDocument()
    expect(screen.getByText('The Art of Tailoring')).toBeInTheDocument()
    expect(screen.getByText('What Our Clients Say')).toBeInTheDocument()
    expect(screen.getByText('Visit Our Tailor')).toBeInTheDocument()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe("Sartorial — Men's Tailor Shop Template")
  })
})
