import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Reviews } from './Reviews'

describe('Reviews', () => {
  it('renders the section title', () => {
    render(<Reviews />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/what kind of coffee/i)
  })

  it('renders reviewer names', () => {
    render(<Reviews />)
    expect(screen.getByText('Florence Holmes')).toBeInTheDocument()
    expect(screen.getByText('Elmer Luna')).toBeInTheDocument()
  })

  it('renders stat counters', () => {
    render(<Reviews />)
    expect(screen.getByText('2536')).toBeInTheDocument()
    expect(screen.getByText('7562')).toBeInTheDocument()
    expect(screen.getByText('2013')).toBeInTheDocument()
    expect(screen.getByText('10536')).toBeInTheDocument()
  })

  it('renders stat labels', () => {
    render(<Reviews />)
    expect(screen.getByText('Happy Client')).toBeInTheDocument()
    expect(screen.getByText('Total Projects')).toBeInTheDocument()
    expect(screen.getByText('Cups Coffee')).toBeInTheDocument()
    expect(screen.getByText('Total Submitted')).toBeInTheDocument()
  })
})
