import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('shows the about heading and descriptive text', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Welcome to Pepperoni/i)
    expect(screen.getByText(/On her way she met a copy/i)).toBeInTheDocument()
  })
})
