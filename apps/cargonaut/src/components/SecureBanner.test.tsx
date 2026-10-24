import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SecureBanner } from './SecureBanner'

describe('SecureBanner', () => {
  it('renders the secure-and-safe claim with a phone call to action', () => {
    render(<SecureBanner />)
    expect(screen.getByRole('heading', { name: /100% secure and safe/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /\+10 672 457 356/i })).toHaveAttribute(
      'href',
      'tel:+10672457356',
    )
    expect(screen.getByAltText(/forklift loading a container/i)).toBeInTheDocument()
  })
})
