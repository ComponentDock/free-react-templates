import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the section heading', () => {
    render(<Projects />)
    expect(screen.getByText('Our Latest Projects')).toBeInTheDocument()
  })

  it('renders all six project cards', () => {
    render(<Projects />)
    expect(screen.getByText('Ducting Design in Colorado')).toBeInTheDocument()
    expect(screen.getByText('Tanks Project In California')).toBeInTheDocument()
    expect(screen.getByText('Structural Design in New York')).toBeInTheDocument()
    expect(screen.getByText('Stacks Design')).toBeInTheDocument()
    expect(screen.getByText('Intercate Custom')).toBeInTheDocument()
    expect(screen.getByText('Banker Design')).toBeInTheDocument()
  })

  it('renders project images', () => {
    render(<Projects />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(6)
  })
})
