import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the kicker, a level-1 headline, and both call-to-action buttons', () => {
    render(<Hero />)

    expect(screen.getByText('Feel Like Home')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: 'Good Look Guaranteed' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Book Now/ })).toHaveAttribute('href', '#appointment')
    expect(screen.getByRole('link', { name: /Contact Us/ })).toHaveAttribute('href', '#contact')
  })

  it('shows a hero photograph', () => {
    render(<Hero />)

    const image = screen.getByRole('img', { name: /Barber styling a client/ })
    expect(image).toHaveAttribute('src', expect.stringContaining('picsum.photos/seed/stylely-hero'))
  })
})
