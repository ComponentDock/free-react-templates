import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the agency heading and description', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Roost Real Estate Agency')
    expect(screen.getByText(/A small river named Duden/)).toBeInTheDocument()
  })

  it('renders Book now and Contact us buttons', () => {
    render(<About />)
    expect(screen.getByRole('button', { name: /book now/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /contact us/i })).toBeInTheDocument()
  })
})
