import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getAllByText('Briefly').length).toBeGreaterThanOrEqual(1)
  })

  it('renders the hero heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/We Combine/)
  })

  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getAllByText('Briefly').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByText('Services Offered By Us')).toBeInTheDocument()
    expect(screen.getByText('Meet Our Experienced Team')).toBeInTheDocument()
    expect(screen.getByText('Latest From Our Blog Posts')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Briefly — Law Firm Template')
  })
})
