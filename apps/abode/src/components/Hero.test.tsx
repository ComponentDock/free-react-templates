import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, location, and play-reel button', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Homeownership never looked so affordable/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/SALT LAKE CITY, UNITED STATES/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /play reel/i })).toBeInTheDocument()
  })

  it('shows a hero image with descriptive alt text', () => {
    render(<Hero />)
    const img = screen.getByRole('img', { name: /architecture/i })
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
