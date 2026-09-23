import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the author name and bio text', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Dr. Travor James')
    expect(screen.getByText(/bestselling author/i)).toBeInTheDocument()
  })

  it('renders the author portrait image', () => {
    render(<About />)
    expect(screen.getByAltText(/Author portrait/i)).toBeInTheDocument()
  })

  it('renders the signature SVG', () => {
    render(<About />)
    expect(screen.getByLabelText(/Author signature/i)).toBeInTheDocument()
  })
})
