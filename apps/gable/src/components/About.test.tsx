import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading and three feature cards', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /About Gable Architecture/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Perfectly Design/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Carefully Planned/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Smartly Execute/i })).toBeInTheDocument()
  })

  it('renders stat counters with numbers and labels', () => {
    render(<About />)
    expect(screen.getByText('18')).toBeInTheDocument()
    expect(screen.getByText(/Years of Experienced/i)).toBeInTheDocument()
    expect(screen.getByText('351')).toBeInTheDocument()
    expect(screen.getByText(/Happy Clients/i)).toBeInTheDocument()
    expect(screen.getByText('564')).toBeInTheDocument()
    expect(screen.getByText(/Finished Projects/i)).toBeInTheDocument()
  })
})
