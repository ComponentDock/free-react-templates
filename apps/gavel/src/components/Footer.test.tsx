import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { footer } from '../data'

describe('Footer', () => {
  it('renders the about widget with social icons', () => {
    render(<Footer />)
    expect(screen.getByText(footer.about)).toBeInTheDocument()
    for (const name of ['twitter', 'facebook', 'instagram'] as const) {
      expect(screen.getByRole('link', { name })).toHaveAttribute('href', '#top')
    }
  })

  it('renders the practice-area links with green arrows', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 2, name: 'Practice Areas' })).toBeInTheDocument()
    for (const link of footer.practiceLinks) {
      expect(screen.getByRole('link', { name: new RegExp(link) })).toHaveAttribute(
        'href',
        '#practice',
      )
    }
  })

  it('renders the business hours widget', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 2, name: 'Business Hours' })).toBeInTheDocument()
    for (const row of footer.hours) {
      expect(screen.getByText(row.label)).toBeInTheDocument()
      expect(screen.getByText(row.value)).toBeInTheDocument()
    }
  })

  it('renders the contact widget with address, phone, and email', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 2, name: 'Have a Questions?' })).toBeInTheDocument()
    expect(screen.getByText(footer.contact.address)).toBeInTheDocument()
    expect(screen.getByText(footer.contact.phone)).toBeInTheDocument()
    expect(screen.getByText(footer.contact.email)).toBeInTheDocument()
  })

  it('links to Component Dock in the copyright bar', () => {
    render(<Footer />)
    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
