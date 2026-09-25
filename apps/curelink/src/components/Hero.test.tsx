import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline with Health keyword and both CTA buttons', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/most valuable thing is your/i)
    expect(screen.getByText('Health')).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Our Services' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Book Appointment' })).toBeInTheDocument()
  })

  it('shows a decorative hero image', () => {
    render(<Hero />)

    const image = screen.getByRole('img', { name: /medical facility/i })
    expect(image).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
