import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the kicker, headline, supporting copy, and two CTAs', () => {
    render(<Hero />)

    expect(screen.getByText('Welcome to Sienna')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'We Specialize In All Phase Of Hair' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Book Now' })).toHaveAttribute('href', '#pricing')
    expect(screen.getByRole('link', { name: 'Learn More' })).toHaveAttribute('href', '#about')
    expect(screen.getAllByRole('paragraph').length).toBeGreaterThan(0)
  })

  it('shows a hero photograph', () => {
    render(<Hero />)

    const image = screen.getByRole('img', { name: /Barber trimming/ })
    expect(image).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
