import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the coral band with title and intro', () => {
    const { container } = render(<Contact />)
    const band = container.querySelector('section')
    expect(band).toHaveClass('bg-brand')
    expect(screen.getByRole('heading', { name: 'Contact Me' })).toBeInTheDocument()
  })

  it('shows the three contact boxes as plain text', () => {
    render(<Contact />)
    expect(screen.getByText('+44 2365 654 8962')).toBeInTheDocument()
    expect(screen.getByText('hello@artisandesign.co')).toBeInTheDocument()
    expect(screen.getByText('artisandesign.co')).toBeInTheDocument()
  })

  it('renders the white Hire Me button', () => {
    render(<Contact />)
    const cta = screen.getByRole('link', { name: 'Hire Me' })
    expect(cta).toHaveAttribute('href', 'mailto:hello@artisandesign.co')
    expect(cta.className).toContain('bg-white')
  })
})
