import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { navLinks, socialLinks } from '../data'

const year = new Date().getFullYear()

describe('Footer', () => {
  it('renders the footer menu with all anchor links', () => {
    render(<Footer />)
    const footerNav = screen.getByRole('navigation', { name: 'Footer' })
    for (const link of navLinks) {
      expect(footerNav.querySelector(`a[href="${link.href}"]`)).toHaveTextContent(link.label)
    }
  })

  it('renders a social icon link for every social', () => {
    render(<Footer />)
    for (const social of socialLinks) {
      const link = screen.getByRole('link', { name: social.name })
      expect(link).toHaveAttribute('href', social.href)
      expect(link.querySelector('svg')).toBeInTheDocument()
    }
  })

  it('renders the copyright line with the Component Dock link', () => {
    render(<Footer />)
    expect(screen.getByText(new RegExp(`© ${year} All rights reserved`))).toBeInTheDocument()
    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(dock).toHaveAttribute('target', '_blank')
  })
})
