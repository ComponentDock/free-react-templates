import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, blurb, and both CTA buttons', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/IT Solution for.*Your Business/)

    expect(screen.getByRole('link', { name: 'Get Started' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Our Services' })).toBeInTheDocument()
  })

  it('shows a decorative hero image', () => {
    render(<Hero />)

    const image = screen.getByRole('img', { name: /digital agency team/i })
    expect(image).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
