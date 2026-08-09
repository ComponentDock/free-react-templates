import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the kicker, headline, supporting copy, and two CTAs', () => {
    render(<Hero />)

    expect(screen.getByText('Welcome to Slick')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: "WE'RE THE LAST OF BREED." })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Book Now' })).toHaveAttribute('href', '#prices')
    expect(screen.getByRole('link', { name: 'Free Quote' })).toHaveAttribute('href', '#about')
    expect(screen.getAllByRole('paragraph').length).toBeGreaterThan(0)
  })

  it('shows a hero photograph', () => {
    render(<Hero />)

    const image = screen.getByRole('img', { name: /fade/ })
    expect(image).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
