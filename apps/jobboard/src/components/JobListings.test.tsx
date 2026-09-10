import { render, screen } from '@testing-library/react'
import { JobListings } from './JobListings'

describe('JobListings', () => {
  it('renders section heading with count', () => {
    render(<JobListings />)
    expect(screen.getByRole('heading', { name: /43,167.*Job.*Listed/ })).toBeInTheDocument()
  })

  it('renders all job cards', () => {
    render(<JobListings />)
    const titles = [
      'Product Designer',
      'Digital Marketing Director',
      'Back-end Engineer (Python)',
      'Senior Art Director',
      'Frontend Developer',
      'UX Researcher',
    ]
    for (const title of titles) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }
  })

  it('renders company names', () => {
    render(<JobListings />)
    const companies = ['Spotify', 'Google', 'Stripe', 'Adobe', 'Meta', 'Apple']
    for (const name of companies) {
      expect(screen.getAllByText(name).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders location info', () => {
    render(<JobListings />)
    expect(screen.getByText('New York, NY')).toBeInTheDocument()
    expect(screen.getByText('London, UK')).toBeInTheDocument()
  })

  it('renders View More Jobs button', () => {
    render(<JobListings />)
    expect(screen.getByText('View More Jobs')).toBeInTheDocument()
  })

  it('renders job logos', () => {
    render(<JobListings />)
    const logos = screen.getAllByRole('img')
    expect(logos.length).toBeGreaterThanOrEqual(6)
  })
})
