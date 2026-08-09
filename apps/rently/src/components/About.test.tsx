import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading, copy, and search CTA', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /Welcome to Rently/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Search Vehicle/i })).toBeInTheDocument()
  })
})
