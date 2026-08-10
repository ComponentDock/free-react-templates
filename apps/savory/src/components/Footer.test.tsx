import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the copyright line with the current year and a heart', () => {
    render(<Footer />)

    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`© ${year} All rights reserved`))).toBeInTheDocument()
    expect(screen.getByText('♥')).toBeInTheDocument()
  })

  it('shows the footer navigation links', () => {
    render(<Footer />)

    for (const link of ['Home', 'Recipes', 'About Us', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })
})
