import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the about blurb, link columns, contact details, socials, and copyright', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: /petcare/i })).toHaveAttribute('href', '#top')
    expect(screen.getByText(/far far away, behind the word mountains/i)).toBeInTheDocument()

    for (const column of ['Company', 'Services', 'Get in Touch']) {
      expect(screen.getByRole('heading', { name: column })).toBeInTheDocument()
    }

    expect(screen.getByText('01654.066.456')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'href',
      'https://github.com',
    )
    expect(screen.getByText(/copyright/i)).toBeInTheDocument()
  })
})
