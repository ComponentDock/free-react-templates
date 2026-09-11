import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('shows about heading and join button', () => {
    render(<About />)
    expect(
      screen.getByRole('heading', {
        name: /A Platform for Exchange/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Join us/i })).toBeInTheDocument()
  })
})
