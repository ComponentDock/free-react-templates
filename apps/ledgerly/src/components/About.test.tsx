import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the about heading and description', () => {
    render(<About />)
    expect(screen.getByText(/the world/)).toBeInTheDocument()
    expect(screen.getByText(/financial freedom/i)).toBeInTheDocument()
  })

  it('renders the about image and Read More button', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: /about ledgerly/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Read More' })).toBeInTheDocument()
  })
})
