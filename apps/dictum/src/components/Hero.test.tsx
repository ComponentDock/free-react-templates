import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'We Are The Best Consulting Agency',
    )
  })

  it('renders descriptive text', () => {
    render(<Hero />)
    expect(screen.getByText(/Far far away/)).toBeInTheDocument()
  })

  it('renders Get Started CTA button', () => {
    render(<Hero />)
    const cta = screen.getByText('Get Started')
    expect(cta).toBeInTheDocument()
    expect(cta.closest('a')).toHaveAttribute('href', '#contact-section')
  })

  it('has a background image', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')
    expect(section?.getAttribute('style')).toContain('picsum.photos')
  })
})
