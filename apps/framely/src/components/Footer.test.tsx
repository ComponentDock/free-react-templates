import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows a centered copyright bar with the repo-standard credit', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveTextContent(/©/)
    expect(footer).toHaveTextContent(/Framely/)
    expect(footer).toHaveTextContent(/All rights reserved/)
    expect(footer).toHaveTextContent(/made with/i)
    expect(footer).toHaveTextContent(/React & Tailwind CSS/i)
  })

  it('renders the heart icon in the accent red', () => {
    render(<Footer />)
    const heart = document.querySelector('svg[aria-label="heart"]')
    expect(heart).toBeInTheDocument()
    expect(heart?.getAttribute('class')).toContain('text-heart')
  })
})
