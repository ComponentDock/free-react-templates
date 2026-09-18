import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Safe Industry Solutions/i)
  })

  it('renders descriptive text', () => {
    render(<About />)
    expect(screen.getByText(/Logisti Group is a representative/i)).toBeInTheDocument()
  })

  it('renders an image', () => {
    render(<About />)
    const img = screen.getByRole('img', { name: /industrial facility/i })
    expect(img).toBeInTheDocument()
  })
})
