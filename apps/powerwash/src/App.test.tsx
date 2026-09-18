import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getByText('PowerWash')).toBeInTheDocument()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('PowerWash — Pressure Washing Services')
  })

  it('renders all main sections', () => {
    render(<App />)
    expect(screen.getAllByText(/Professional/).length).toBeGreaterThan(0)
    expect(screen.getByText('Why Choose Us?')).toBeInTheDocument()
    expect(screen.getByText('We Provide Free Quotation')).toBeInTheDocument()
    expect(screen.getByText('Pressure Washing Services')).toBeInTheDocument()
    expect(screen.getByText('Before & After Services')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients & Feedbacks')).toBeInTheDocument()
    expect(screen.getByText('Latest news from our blog')).toBeInTheDocument()
    expect(screen.getAllByText('Free Consultation').length).toBeGreaterThanOrEqual(1)
  })
})
