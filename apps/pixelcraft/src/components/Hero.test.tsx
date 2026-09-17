import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and subtitle', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /We Craft Awesome Web And Graphic Design Solutions/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Support bright students today for a better tomorrow/i),
    ).toBeInTheDocument()
  })

  it('renders the background image with an accessible name', () => {
    render(<Hero />)
    expect(screen.getByRole('img', { name: 'Creative agency workspace' })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
