import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand name and tagline', () => {
    render(<Footer />)

    expect(screen.getByText('Lenslide')).toBeInTheDocument()
    expect(screen.getByText(/testimonial carousel templates/i)).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)

    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
