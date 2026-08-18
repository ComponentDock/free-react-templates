import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Footer } from './Footer'
import { componentDockUrl } from '../data'

describe('Footer', () => {
  it('renders the brand, pera text, and the three link widgets', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByText('Hiredly')).toBeInTheDocument()

    expect(within(footer).getByRole('heading', { name: 'Quick Links' })).toBeInTheDocument()
    expect(within(footer).getByRole('heading', { name: 'For Employers' })).toBeInTheDocument()
    expect(within(footer).getByRole('heading', { name: 'For Candidates' })).toBeInTheDocument()

    for (const link of ['Work', 'Services', 'Products', 'Air freight', 'Browse Jobs']) {
      expect(within(footer).getByText(link)).toBeInTheDocument()
    }
  })

  it('shows the copyright bar and the mandatory Component Dock link', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByText(/© 2026 Hiredly/i)).toBeInTheDocument()

    const dockLink = within(footer).getByRole('link', { name: /component dock/i })
    expect(dockLink).toHaveAttribute('href', componentDockUrl)
  })

  it('renders social icons as links', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    for (const network of ['Facebook', 'X', 'LinkedIn', 'Instagram']) {
      expect(within(footer).getByRole('link', { name: `${network} profile` })).toBeInTheDocument()
    }
  })
})
