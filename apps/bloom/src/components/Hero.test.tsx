import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the kicker, headline, supporting copy, and two CTAs', () => {
    render(<Hero />)

    expect(screen.getByText('Skin & Beauty Care')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Beauty Salon' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'View Our Services' })).toHaveAttribute(
      'href',
      '#services',
    )
    expect(screen.getByRole('link', { name: 'Book Now' })).toHaveAttribute('href', '#appointment')
    expect(screen.getAllByRole('paragraph').length).toBeGreaterThan(0)
  })

  it('shows a hero photograph', () => {
    render(<Hero />)

    const image = screen.getByRole('img', { name: /stylist/ })
    expect(image).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
