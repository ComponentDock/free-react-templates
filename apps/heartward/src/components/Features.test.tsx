import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the section heading', () => {
    render(<Features />)
    expect(screen.getByText('How Could You Help')).toBeInTheDocument()
  })

  it('renders all three feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Give Donation')).toBeInTheDocument()
    expect(screen.getByText('Give Inspiration')).toBeInTheDocument()
    expect(screen.getByText('Become Volunteer')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    expect(
      screen.getByText(/Make a difference with your generous contribution/),
    ).toBeInTheDocument()
    expect(screen.getByText(/Share stories of hope/)).toBeInTheDocument()
    expect(screen.getByText(/Join our team of dedicated volunteers/)).toBeInTheDocument()
  })
})
