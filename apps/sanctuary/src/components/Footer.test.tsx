import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the brand blurb and social icon links', () => {
    render(<Footer />)

    expect(
      screen.getByText(/A welcoming community of faith helping people know God/),
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'YouTube' })).toBeInTheDocument()
  })

  it('shows the Connect, Grow and Resources link columns', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { level: 3, name: 'Connect' })).toBeInTheDocument()
    for (const label of ['Plan Your Visit', 'Service Times', 'Small Groups', 'Contact Us']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }

    expect(screen.getByRole('heading', { level: 3, name: 'Grow' })).toBeInTheDocument()
    for (const label of ['Sermons', 'Events', 'Ministries', 'Give Online']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }

    expect(screen.getByRole('heading', { level: 3, name: 'Resources' })).toBeInTheDocument()
    for (const label of ['About Us', 'Our Beliefs', 'Leadership', 'Prayer Request']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('shows service times and contact details', () => {
    render(<Footer />)

    expect(screen.getByText('Sunday: 9:00 AM & 11:00 AM')).toBeInTheDocument()
    expect(screen.getByText('Wednesday: 7:00 PM')).toBeInTheDocument()
    expect(screen.getByText('info@gracecommunity.church')).toBeInTheDocument()
    expect(screen.getByText('(512) 555-1234')).toBeInTheDocument()
    expect(screen.getByText('1200 Faith Avenue, Austin, TX 78701')).toBeInTheDocument()
  })

  it('shows the copyright bar with legal links', () => {
    render(<Footer />)

    expect(screen.getByText(/© 2026 Sanctuary/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Terms of Service' })).toBeInTheDocument()
  })
})
