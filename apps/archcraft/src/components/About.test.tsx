import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders heading and description', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByText(/leading architecture and interior design firm/)).toBeInTheDocument()
    expect(screen.getByText(/great design starts/)).toBeInTheDocument()
  })
})
