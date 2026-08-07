import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, blurb, call to action, and dashboard image', () => {
    const { container } = render(<Hero />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'Boost Productivity with Boost' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/all-in-one productivity suite/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Try it for free' })).toHaveAttribute(
      'href',
      '#pricing',
    )
    const image = container.querySelector('img')
    expect(image).not.toBeNull()
    expect(image).toHaveAttribute('src', expect.stringContaining('picsum.photos/seed/boost-hero'))
  })
})
