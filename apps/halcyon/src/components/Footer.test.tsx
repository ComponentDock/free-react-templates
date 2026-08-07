import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

const footerLinks = ['Home', 'About', 'Services', 'Contact'] as const

describe('Footer', () => {
  it('shows the serif wordmark "Halcyon"', () => {
    render(<Footer />)

    const wordmark = screen.getByRole('link', { name: /^Halcyon/ })
    expect(wordmark.className).toContain('font-serif')
  })

  it('shows footer links for Home, About, Services and Contact', () => {
    render(<Footer />)

    const nav = screen.getByRole('navigation', { name: 'Footer' })
    for (const label of footerLinks) {
      expect(within(nav).getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('shows circular social icons', () => {
    render(<Footer />)

    for (const name of ['Twitter', 'Instagram', 'Facebook', 'LinkedIn']) {
      expect(screen.getByRole('link', { name }).className).toContain('rounded-full')
    }
  })

  it('shows a copyright line in the bottom bar', () => {
    render(<Footer />)

    expect(screen.getByText(/© 2026 All rights reserved/i)).toBeInTheDocument()
  })
})
