import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Intro } from './Intro'

describe('Intro', () => {
  it('renders the Aerobics Program feature', () => {
    render(<Intro />)
    expect(screen.getByRole('heading', { name: 'Aerobics Program' })).toBeInTheDocument()
  })

  it('renders the Train Hard feature', () => {
    render(<Intro />)
    expect(screen.getByRole('heading', { name: 'Train Hard' })).toBeInTheDocument()
  })

  it('renders the Basic Program feature', () => {
    render(<Intro />)
    expect(screen.getByRole('heading', { name: 'Basic Program' })).toBeInTheDocument()
  })

  it('renders three feature cards', () => {
    render(<Intro />)
    const headings = screen.getAllByRole('heading', {
      level: 3,
    })
    expect(headings).toHaveLength(3)
  })

  it('renders feature descriptions', () => {
    render(<Intro />)
    expect(screen.getByText(/boost your cardiovascular health/i)).toBeInTheDocument()
    expect(screen.getByText(/access world-class equipment/i)).toBeInTheDocument()
    expect(screen.getByText(/perfect for beginners/i)).toBeInTheDocument()
  })
})
