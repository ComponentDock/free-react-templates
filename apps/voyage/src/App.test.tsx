import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)

    expect(screen.getAllByText(/Voyage/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/It is Better to Travel Well/)).toBeInTheDocument()
    expect(screen.getByText(/Explore All Corners/)).toBeInTheDocument()
    expect(screen.getByText(/We Provide Top Destinations/)).toBeInTheDocument()
    expect(screen.getByText(/Happy Customer/)).toBeInTheDocument()
    expect(screen.getByText(/Frequently Asked Questions/)).toBeInTheDocument()
    expect(screen.getByText(/Recent Posts/)).toBeInTheDocument()
    expect(screen.getByText(/Begin your adventurous journey/)).toBeInTheDocument()
    expect(screen.getByText(/Component Dock/)).toBeInTheDocument()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('Voyage — Travel & Tourism Template')
  })

  it('renders navbar with navigation links', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: /Home/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /About Us/ })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /Services/ }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: /Blog/ }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: 'Contact Us' }).length).toBeGreaterThanOrEqual(1)
  })
})
