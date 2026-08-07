import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, blurb, and both call-to-action buttons', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Drive More Customers\s+Through Digital/)

    expect(screen.getByRole('link', { name: 'Get Started' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Sign up for free' })).toBeInTheDocument()
  })

  it('shows a decorative hero image', () => {
    render(<Hero />)

    const image = screen.getByRole('img', { name: /app dashboard/i })
    expect(image).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
