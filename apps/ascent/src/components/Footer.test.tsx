import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Footer } from './Footer'

const FOOTER_LINKS = ['About', 'Services', 'Portfolio', 'Pages', 'Blog', 'Contact']

describe('Footer', () => {
  it('renders the brand wordmark, menu links and social icons', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByRole('link', { name: /Ascent/ })).toBeInTheDocument()

    for (const label of FOOTER_LINKS) {
      expect(within(footer).getByRole('link', { name: label })).toBeInTheDocument()
    }

    expect(within(footer).getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(within(footer).getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(within(footer).getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  })

  it('links to Component Dock in the bottom bar', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByText(/More templates at/)).toBeInTheDocument()
    const dock = within(footer).getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
