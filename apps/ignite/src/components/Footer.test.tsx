import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the service times block', () => {
    render(<Footer />)

    expect(screen.getByText('Elevate Night')).toBeInTheDocument()
    expect(screen.getByText('6:30 PM')).toBeInTheDocument()
    expect(screen.getByText('MS Hangout')).toBeInTheDocument()
    expect(screen.getByText('9:00 AM')).toBeInTheDocument()
    expect(screen.getByText('HS Connect')).toBeInTheDocument()
    expect(screen.getByText('11:00 AM')).toBeInTheDocument()
  })

  it('renders the link columns', () => {
    render(<Footer />)

    for (const column of ['Get Involved', 'Resources', 'Connect']) {
      expect(screen.getByRole('navigation', { name: column })).toBeInTheDocument()
    }
    for (const link of ['Upcoming Events', 'Find a Group', 'Watch Messages', 'Instagram']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('renders the contact email and phone number', () => {
    render(<Footer />)

    expect(screen.getByText('youth@igniteyouth.church')).toBeInTheDocument()
    expect(screen.getByText('(555) 789-0123')).toBeInTheDocument()
  })
})
