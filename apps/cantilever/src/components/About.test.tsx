import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the welcome eyebrow, heading, and More About Us button', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /Welcome to Cantilever/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /unique stylish living alone/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /More About Us/i })).toBeInTheDocument()
    expect(screen.getByAltText(/studio/i)).toBeInTheDocument()
  })
})
