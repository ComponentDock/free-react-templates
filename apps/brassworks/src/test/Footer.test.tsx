import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from '../components/Footer'

describe('Footer', () => {
  it('links Component Dock as the attribution instead of any external credit', () => {
    render(<Footer />)

    const dock = screen.getByRole('link', { name: 'More templates at Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('carries the brand block, three link columns and the trade block', () => {
    render(<Footer />)

    expect(screen.getByText('Brassworks')).toHaveClass('text-white')
    for (const head of ['Catalogue', 'Company', 'Support', 'Trade accounts']) {
      expect(screen.getByRole('heading', { level: 2, name: head })).toHaveClass(
        'uppercase',
        'tracking-wider',
      )
    }
    expect(screen.getByRole('link', { name: 'Open a trade account' })).toHaveAttribute(
      'href',
      '#contact',
    )
  })

  it('keeps the three social discs labelled and non-navigating', () => {
    render(<Footer />)

    for (const label of ['Twitter', 'Instagram', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: label })).toHaveAttribute('href', '#')
    }
  })

  it('repeats the counter contact and the policy links in the bottom bar', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: '(555) 010-0231' })).toHaveAttribute(
      'href',
      'tel:5550100231',
    )
    expect(screen.getByRole('link', { name: 'counter@brassworks.example' })).toHaveAttribute(
      'href',
      'mailto:counter@brassworks.example',
    )
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Terms of Service' })).toBeInTheDocument()
    expect(screen.getByText(/© 2026 Brassworks Supply Co./)).toBeInTheDocument()
  })

  it('lists every footer column link', () => {
    render(<Footer />)

    const catalogueColumn = screen.getByRole('heading', { level: 2, name: 'Catalogue' })
      .parentElement as HTMLElement
    expect(within(catalogueColumn).getByRole('link', { name: 'Fixtures' })).toBeInTheDocument()
    expect(within(catalogueColumn).getByRole('link', { name: 'Tools' })).toBeInTheDocument()
  })
})
