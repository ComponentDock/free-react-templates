import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { navLinks, socialLabels, socialLinks } from '../data'

describe('Footer', () => {
  it('shows the site name, navigation links, social icons and a copyright line', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByRole('link', { name: 'Marginalia' })).toBeInTheDocument()
    const nav = within(footer).getByRole('navigation', { name: 'Footer' })
    for (const link of navLinks) {
      expect(within(nav).getByRole('link', { name: link })).toBeInTheDocument()
    }
    for (const name of socialLinks) {
      expect(within(footer).getByRole('link', { name: socialLabels[name] })).toBeInTheDocument()
    }
    expect(within(footer).getByText(/Copyright © 2026/)).toBeInTheDocument()
  })
})
