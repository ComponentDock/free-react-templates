import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders headline', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Build Your Financial Plan With Our Specialists',
    )
  })

  it('renders description text', () => {
    render(<Hero />)
    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
  })

  it('renders Get Started CTA link', () => {
    render(<Hero />)
    const cta = screen.getByText('Get Started')
    expect(cta).toBeInTheDocument()
    expect(cta.closest('a')).toHaveAttribute('href', '#contact')
  })

  it('applies custom className', () => {
    const { container } = render(<Hero className="extra" />)
    expect(container.firstElementChild).toHaveClass('extra')
  })
})
