import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the welcome heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /Welcome to Aurae/i })).toBeInTheDocument()
  })

  it('renders all three feature cards', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /Full Rejuvenation/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Extension of Spring/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Against Aging/i })).toBeInTheDocument()
  })

  it('renders explore more links', () => {
    render(<About />)
    const links = screen.getAllByText(/Explore more/i)
    expect(links).toHaveLength(3)
  })
})
