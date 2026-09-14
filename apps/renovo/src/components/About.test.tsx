import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the main heading', () => {
    render(<About />)
    expect(screen.getByText(/We can fix all types/)).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<About />)
    expect(screen.getByText(/certified technicians/)).toBeInTheDocument()
  })

  it('renders Expert Services feature', () => {
    render(<About />)
    expect(screen.getByText('Expert Services')).toBeInTheDocument()
  })

  it('renders Great Support feature', () => {
    render(<About />)
    expect(screen.getByText('Great Support')).toBeInTheDocument()
  })

  it('renders about image with aria-label', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: /repair technician/i })).toBeInTheDocument()
  })
})
