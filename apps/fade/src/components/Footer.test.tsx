import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders link columns, social links, and a copyright line', () => {
    render(<Footer />)

    for (const title of ['Services', 'Info', 'Shop', 'Contact Us']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }

    for (const label of ['GitHub', 'X', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }

    expect(screen.getByText(/© 2026 Fade/)).toBeInTheDocument()
  })
})
