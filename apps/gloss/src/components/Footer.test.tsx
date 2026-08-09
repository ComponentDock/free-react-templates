import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders contact details, social handle, and social icons', () => {
    render(<Footer />)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Contact' })).toBeInTheDocument()
    expect(screen.getByText(/509 Myrtle Ave, Brooklyn, NY 11205, USA/)).toBeInTheDocument()
    expect(screen.getByText('+1 718-783-1936')).toBeInTheDocument()
    expect(screen.getByText('+1 718-783-1966')).toBeInTheDocument()
    expect(screen.getByText('Makeup.artist@gmail.com')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Follow us on' })).toBeInTheDocument()
    expect(screen.getByText('@gloss')).toBeInTheDocument()
    for (const label of ['Twitter', 'Facebook', 'Instagram']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })
})
