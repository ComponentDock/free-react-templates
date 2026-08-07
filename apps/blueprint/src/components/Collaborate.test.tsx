import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Collaborate } from './Collaborate'

describe('Collaborate', () => {
  it('shows the heading, intro copy, and a play-demo link', () => {
    render(<Collaborate />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Collaborate with your design team in a new way',
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Even the all-powerful Pointing has no control/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Play demo video' })).toBeInTheDocument()
  })
})
