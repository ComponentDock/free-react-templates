import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading, description, and CTA button', () => {
    render(<Hero />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Enjoy Your Food at Foodnest',
    )
    expect(screen.getByText(/discover the finest dining experience/i)).toBeInTheDocument()

    const cta = screen.getByRole('link', { name: 'Get Started' })
    expect(cta).toHaveAttribute('href', '#services')
  })

  it('applies background image style', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')
    expect(section).toHaveAttribute('style', expect.stringContaining('picsum.photos'))
  })
})
