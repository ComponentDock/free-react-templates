import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading, underline bar, paragraphs and CTA', () => {
    render(<About />)
    const heading = screen.getByRole('heading', {
      level: 3,
      name: /Best template for dental specialist/i,
    })
    const section = heading.closest('section')
    expect(section).not.toBeNull()
    expect(within(section!).getByText(/The clinic was founded/i)).toBeInTheDocument()
    expect(within(section!).getByRole('link', { name: /Make an Appointment/i })).toBeInTheDocument()
    expect(section!.querySelector('.bg-mint')).toBeInTheDocument()
  })

  it('renders the photo panel', () => {
    render(<About />)
    const img = document.querySelector('img[alt*="dentist"]')
    expect(img).toBeInTheDocument()
    expect(img?.getAttribute('src')).toContain('picsum.photos')
  })

  it('renders the three clinic contact blocks', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: 'PHONE' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'WORKING TIME' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'OUR CLINIC ADDRESS' })).toBeInTheDocument()
    expect(screen.getByText(/09:00 AM/i)).toBeInTheDocument()
    expect(screen.getByText(/Saturday Off/i)).toBeInTheDocument()
  })

  it('builds the phone href at runtime from a spaced display string', () => {
    render(<About />)
    const phoneLink = screen.getByRole('link', { name: /986/ })
    expect(phoneLink).toHaveAttribute('href', 'tel:+39863832293')
  })
})
