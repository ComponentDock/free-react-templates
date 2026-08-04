import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the brand, about blurb, link columns, contact details, socials, and copyright', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: /Petvet/ }).textContent).toContain('Pet Care')
    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Menu' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Have a Questions?' })).toBeInTheDocument()
    expect(
      screen.getByText('203 Fake St. Mountain View, San Francisco, California, USA'),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '+2 392 3929 210' })).toHaveAttribute(
      'href',
      'tel:+23923929210',
    )
    expect(screen.getByRole('link', { name: 'info@yourdomain.com' })).toHaveAttribute(
      'href',
      'mailto:info@yourdomain.com',
    )
    expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'X' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })
})
