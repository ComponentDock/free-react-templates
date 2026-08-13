import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { describe, expect, it } from 'vitest'

describe('Hero', () => {
  it('renders the full-viewport hero with heading and CTA', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')
    expect(section).toHaveStyle({ backgroundImage: expect.stringContaining('picsum.photos') })
    expect(
      screen.getByRole('heading', { level: 1, name: /Worldwide Freight Services/ }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get Started!' })).toHaveAttribute('href', '#quote')
  })
})
