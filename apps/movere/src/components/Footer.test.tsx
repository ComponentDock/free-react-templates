import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand, contact details, and link columns', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Movere home' })).toBeInTheDocument()
    expect(screen.getByText('4820 Move Lane, Chicago, IL 60601')).toBeInTheDocument()
    expect(screen.getByText('(555) 890-1234')).toBeInTheDocument()
    expect(screen.getByText('hello@moveremoving.com')).toBeInTheDocument()

    for (const heading of ['Services', 'Company', 'Support']) {
      const nav = screen.getByRole('navigation', { name: heading })
      expect(within(nav).getByRole('heading', { name: heading })).toBeInTheDocument()
      expect(within(nav).getAllByRole('link').length).toBeGreaterThanOrEqual(4)
    }
  })

  it('renders social links and the legal row', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Movere on Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Movere on X' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Movere on Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Movere on LinkedIn' })).toBeInTheDocument()
    expect(screen.getByText('© 2026 Movere. All rights reserved.')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Privacy Policy' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: 'Terms of Service' }).length).toBeGreaterThanOrEqual(
      1,
    )
    expect(screen.getAllByRole('link', { name: 'Style Guide' }).length).toBeGreaterThanOrEqual(1)
  })
})
