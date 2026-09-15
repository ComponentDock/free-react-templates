import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('displays church name', () => {
    render(<Footer />)
    expect(screen.getByText('Compassion Church')).toBeInTheDocument()
  })

  it('displays church description', () => {
    render(<Footer />)
    expect(screen.getByText(/A community of faith/)).toBeInTheDocument()
  })

  it('displays social media icons', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('displays The Church links', () => {
    render(<Footer />)
    expect(screen.getByText('The Church')).toBeInTheDocument()
    for (const link of ['About Us', 'Organizational Chart', 'Events', 'Contact']) {
      expect(screen.getByText(link)).toBeInTheDocument()
    }
  })

  it('displays Messages links', () => {
    render(<Footer />)
    expect(screen.getByText('Messages', { selector: 'h4' })).toBeInTheDocument()
    for (const link of ['Audio Sermons', 'Past Messages', 'Bible Reading', 'End Time Prophecies']) {
      expect(screen.getByText(link)).toBeInTheDocument()
    }
  })

  it('displays contact information', () => {
    render(<Footer />)
    expect(screen.getByText('Visit or Talk to Us')).toBeInTheDocument()
    expect(screen.getByText('123 Faith Street, Grace City, CA 90210')).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
    expect(screen.getByText('info@compassionchurch.org')).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noreferrer')
  })

  it('displays copyright year', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`${year}`))).toBeInTheDocument()
  })

  it('does not reference colorlib', () => {
    const { container } = render(<Footer />)
    expect(container.innerHTML).not.toMatch(/colorlib/i)
  })
})
