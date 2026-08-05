import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders link columns, social links, and a copyright line', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { level: 2, name: 'About Ecobit' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Quick Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'My Account' })).toBeInTheDocument()

    for (const label of ['Home', 'Features', 'Pricing', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }

    expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'X' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()

    expect(screen.getByText(/Copyright © \d{4} Ecobit/)).toBeInTheDocument()
  })
})
