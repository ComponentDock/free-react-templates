import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the About column with social icons and a Component Dock link', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'About Forge' })).toBeInTheDocument()
    const socials = screen.getByRole('list', { name: 'Social links' })
    for (const name of ['Twitter', 'Facebook', 'LinkedIn', 'Instagram']) {
      expect(within(socials).getByRole('link', { name })).toHaveAttribute(
        'href',
        expect.stringMatching(/^https:\/\//),
      )
    }
    expect(screen.getByRole('link', { name: /Component Dock/ })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('renders Contact Info and Quick Links columns', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Contact Info' })).toBeInTheDocument()
    expect(screen.getByText(/34 Street Name/i)).toBeInTheDocument()
    expect(screen.getByText(/\+1 242 4942 290/i)).toBeInTheDocument()
    expect(screen.getByText('info@yourdomain.com')).toBeInTheDocument()

    const quickLinks = screen.getByRole('list', { name: 'Quick links' })
    for (const label of ['About', 'Terms of Use', 'Disclaimers', 'Contact']) {
      expect(within(quickLinks).getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders a copyright bar with a heart', () => {
    render(<Footer />)

    const bar = screen.getByText(/All Rights Reserved/i)
    expect(bar.querySelector('svg')).toHaveClass('text-red-500')
    expect(bar).toHaveTextContent(/Forge/)
  })
})
