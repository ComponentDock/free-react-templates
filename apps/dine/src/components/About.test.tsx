import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: 'The Restaurant' })).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<About />)
    expect(screen.getByText(/tempor incididunt/i)).toBeInTheDocument()
  })
})
