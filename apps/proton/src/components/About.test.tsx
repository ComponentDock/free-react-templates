import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading and two-column text', () => {
    render(<About />)
    expect(
      screen.getByRole('heading', { level: 2, name: /Good Design is a Good Start/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Every great website begins/i)).toBeInTheDocument()
    expect(screen.getByText(/From clean interfaces/i)).toBeInTheDocument()
  })
})
