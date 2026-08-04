import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the brand, about blurb, link columns, contact details, socials, and copyright', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: /Petsitting/i })).toHaveAttribute('href', '#top')
    expect(screen.getByText(/far far away, behind the word mountains/i)).toBeInTheDocument()

    for (const column of ['Latest News', 'Quick Links', 'Have a Questions?']) {
      expect(screen.getByRole('heading', { name: column })).toBeInTheDocument()
    }

    expect(screen.getByText('+1 234 567 890')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'href',
      'https://github.com',
    )
    expect(screen.getByText(/copyright/i)).toBeInTheDocument()
  })
})
