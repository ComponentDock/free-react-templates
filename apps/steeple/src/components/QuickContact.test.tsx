import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { QuickContact } from './QuickContact'

describe('QuickContact', () => {
  it('shows a Location column with an address', () => {
    render(<QuickContact />)
    expect(screen.getByRole('heading', { level: 2, name: /location/i })).toBeInTheDocument()
    expect(screen.getByText('New York - 2398')).toBeInTheDocument()
    expect(screen.getByText('10 Hadson Carl Street')).toBeInTheDocument()
  })

  it('shows a Service Times column with weekly times', () => {
    render(<QuickContact />)
    expect(screen.getByRole('heading', { level: 2, name: /service times/i })).toBeInTheDocument()
    expect(screen.getByText('Wednesdays at 6:30PM - 7:30PM')).toBeInTheDocument()
    expect(screen.getByText('Fridays at Sunset - 7:30PM')).toBeInTheDocument()
    expect(screen.getByText('Saturdays at 8:00AM - Sunset')).toBeInTheDocument()
  })

  it('shows a Get In Touch column with an email and phone number', () => {
    render(<QuickContact />)
    expect(screen.getByRole('heading', { level: 2, name: /get in touch/i })).toBeInTheDocument()
    expect(screen.getByText('Email: info@yoursite.com')).toBeInTheDocument()
    expect(screen.getByText('Phone: (123) 3240-345-9348')).toBeInTheDocument()
  })

  it('renders an icon next to each column heading', () => {
    render(<QuickContact />)
    const headings = screen.getAllByRole('heading', { level: 2 })
    expect(headings).toHaveLength(3)
    for (const heading of headings) {
      expect(heading.querySelector('svg')).toBeInTheDocument()
    }
  })
})
