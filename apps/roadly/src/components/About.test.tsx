import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the kicker, heading, and search CTA', () => {
    render(<About />)
    expect(screen.getByText(/About us/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Choose A Perfect Car/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Search Vehicle/i })).toBeInTheDocument()
  })
})
