import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders logo and description', () => {
    render(<Footer />)
    expect(screen.getByText('Eco')).toBeInTheDocument()
    expect(screen.getByText('Pulse')).toBeInTheDocument()
    expect(screen.getByText(/Dedicated to protecting/)).toBeInTheDocument()
  })

  it('renders social media icons', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('renders link columns', () => {
    render(<Footer />)
    expect(screen.getByText('Our Solutions')).toBeInTheDocument()
    expect(screen.getByText('Company')).toBeInTheDocument()
    // "Contact Us" appears as both heading and link, use getAllByText
    expect(screen.getAllByText('Contact Us').length).toBeGreaterThanOrEqual(2)
  })

  it('renders solution links', () => {
    render(<Footer />)
    expect(screen.getByText('Clean Water')).toBeInTheDocument()
    expect(screen.getByText('Renewable Energy')).toBeInTheDocument()
    expect(screen.getByText('Wildlife Protection')).toBeInTheDocument()
    expect(screen.getByText('Reforestation')).toBeInTheDocument()
  })

  it('renders company links', () => {
    render(<Footer />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Our Team')).toBeInTheDocument()
    expect(screen.getByText('Careers')).toBeInTheDocument()
    expect(screen.getByText('Press')).toBeInTheDocument()
  })

  it('renders contact links', () => {
    render(<Footer />)
    expect(screen.getByText('Support')).toBeInTheDocument()
    expect(screen.getByText('Volunteer')).toBeInTheDocument()
    expect(screen.getByText('Donate')).toBeInTheDocument()
  })

  it('renders copyright and Component Dock link', () => {
    render(<Footer />)
    expect(screen.getByText(/EcoPulse\. All rights reserved/)).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('Component Dock links to componentdock.com', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
