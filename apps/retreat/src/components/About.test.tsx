import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('shows section heading', () => {
    render(<About />)
    expect(screen.getByText(/Welcome to/)).toBeInTheDocument()
  })

  it('shows manager name', () => {
    render(<About />)
    expect(screen.getByText('Michen Taylor')).toBeInTheDocument()
  })

  it('shows about description', () => {
    render(<About />)
    expect(screen.getByText(/340 hotels worldwide/)).toBeInTheDocument()
  })
})
