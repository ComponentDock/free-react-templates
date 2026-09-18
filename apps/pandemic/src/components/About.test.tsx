import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument()
  })

  it('renders the description paragraph', () => {
    render(<About />)
    expect(screen.getByText(/free health information template/i)).toBeInTheDocument()
  })
})
