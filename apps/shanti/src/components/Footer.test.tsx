import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the mauve footer with brand, address and social links', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Shanti' })).toBeInTheDocument()
    expect(screen.getByText(/203 Fake St\. Mountain View/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument()
  })

  it('renders the bottom credit bar', () => {
    render(<Footer />)
    expect(screen.getByText(/free-react-templates/i)).toBeInTheDocument()
  })
})
