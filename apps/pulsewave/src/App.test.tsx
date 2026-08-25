import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getAllByText('Pulsewave.').length).toBeGreaterThanOrEqual(2)
  })

  it('renders the main heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Boost Personal Productivity',
    )
  })

  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText('We Provide A Lot of Cool Services')).toBeInTheDocument()
    expect(screen.getByText('Pulsewave A Digital Agency Company')).toBeInTheDocument()
    expect(screen.getByText('Our Digital Experts Team')).toBeInTheDocument()
    expect(screen.getByText('Happy Customers')).toBeInTheDocument()
    expect(screen.getByText('Why Choose Us')).toBeInTheDocument()
    expect(screen.getByText('Our Awesome Work')).toBeInTheDocument()
    expect(screen.getByText('Choose Your Pricing Plan')).toBeInTheDocument()
    expect(screen.getByText('Recent Blog')).toBeInTheDocument()
    expect(screen.getByText(/Newsletter/)).toBeInTheDocument()
  })

  it('renders the Component Dock footer link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /component dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
