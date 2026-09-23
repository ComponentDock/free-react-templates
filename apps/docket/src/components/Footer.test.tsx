import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders brand name', () => {
    render(<Footer />)
    expect(screen.getByText('Docket')).toBeInTheDocument()
  })

  it('renders company description', () => {
    render(<Footer />)
    expect(screen.getByText(/Providing exceptional legal services/)).toBeInTheDocument()
  })

  it('renders social media icons', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('Dribbble')).toBeInTheDocument()
  })

  it('renders practice area links', () => {
    render(<Footer />)
    const areas = [
      'Business Law',
      'Family Law',
      'Criminal Law',
      'Real Estate Law',
      'Personal Injury',
      'Judicial Law',
    ]
    areas.forEach((area) => {
      expect(screen.getByText(area)).toBeInTheDocument()
    })
  })

  it('renders service links', () => {
    render(<Footer />)
    const services = [
      'Legal Consultation',
      'Case Evaluation',
      'Court Representation',
      'Legal Documentation',
      'Mediation Services',
      'Appeals',
    ]
    services.forEach((service) => {
      expect(screen.getByText(service)).toBeInTheDocument()
    })
  })

  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText('+00 1234 567')).toBeInTheDocument()
    expect(screen.getByText('youremail@email.com')).toBeInTheDocument()
    expect(screen.getByText(/123 Legal Street/)).toBeInTheDocument()
  })

  it('renders copyright with Component Dock link', () => {
    render(<Footer />)
    const copyright = screen.getByText(/© 2026 All rights reserved/)
    expect(copyright).toBeInTheDocument()
    const dockLink = screen.getByRole('link', { name: /component dock/i })
    expect(dockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
