import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the purple footer with brand, blurb, and social icons', () => {
    const { container } = render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer.className).toContain('bg-footer')
    expect(within(footer).getByRole('link', { name: 'Nebuly' })).toBeInTheDocument()
    expect(within(footer).getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
    for (const social of ['Twitter', 'Facebook', 'Instagram', 'LinkedIn']) {
      expect(within(footer).getByRole('link', { name: social })).toBeInTheDocument()
    }
    expect(container.querySelectorAll('svg').length).toBeGreaterThanOrEqual(4)
  })

  it('renders the three link columns', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Useful Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Navigational' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Office' })).toBeInTheDocument()
    for (const link of ['Company', 'Pricing', 'Leadership', 'Join Us', 'Terms & Condition']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
    expect(screen.getByText('203 Fake St. Mountain View')).toBeInTheDocument()
    expect(screen.getByText('+2 392 3929 210')).toBeInTheDocument()
    expect(screen.getByText('info@yourdomain.com')).toBeInTheDocument()
  })

  it('links to Component Dock in the copyright bar', () => {
    render(<Footer />)
    const dock = screen.getByRole('link', { name: 'More templates at Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByText(/Copyright ©/)).toBeInTheDocument()
  })
})
