import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the site name, about blurb, link columns, social links, and copyright', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { level: 3, name: 'Applab' })).toBeInTheDocument()
    expect(screen.getByText(/Firmament morning sixth subdue darkness/)).toBeInTheDocument()

    for (const title of ['Services', 'Useful Links', 'Downloads']) {
      expect(screen.getByRole('heading', { level: 4, name: title })).toBeInTheDocument()
    }

    for (const link of [
      'Team management',
      'Collaboration',
      'Todo',
      'Events',
      'Pricing',
      'Features',
      'Blog',
      'Contact',
      'Download from Apple Store',
      'Download from Play Store',
    ]) {
      expect(screen.getByRole('link', { name: link })).toHaveAttribute('href', '#home')
    }

    for (const social of ['GitHub', 'X', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: social })).toHaveAttribute('target', '_blank')
    }

    expect(screen.getByText(/Copyright ©/)).toBeInTheDocument()
  })
})
