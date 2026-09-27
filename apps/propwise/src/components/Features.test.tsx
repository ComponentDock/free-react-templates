import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Features } from './Features'

describe('Features', () => {
  it('renders the section heading', () => {
    render(<Features />)
    expect(screen.getByText('Why we are the best')).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Features />)
    expect(screen.getByText(/eco friendly system/i)).toBeInTheDocument()
  })

  it('renders three feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Expert Technicians')).toBeInTheDocument()
    expect(screen.getByText('Professional Service')).toBeInTheDocument()
    expect(screen.getByText('Great Support')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    const descriptions = screen.getAllByText(/usage of the internet/i)
    expect(descriptions).toHaveLength(3)
  })
})
