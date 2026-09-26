import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Exceed Expectations/)
  })

  it('renders the description', () => {
    render(<About />)
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
  })

  it('renders the About Me button', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: /about me/i })).toBeInTheDocument()
  })
})
