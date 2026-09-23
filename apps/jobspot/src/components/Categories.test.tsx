import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Categories } from './Categories'

describe('Categories', () => {
  it('renders the section heading', () => {
    render(<Categories />)
    expect(screen.getByRole('heading', { name: /Explore by Category/i })).toBeInTheDocument()
  })

  it('renders category cards', () => {
    render(<Categories />)
    expect(screen.getByText('Website & Software')).toBeInTheDocument()
    const eduCards = screen.getAllByText('Education & Training')
    expect(eduCards.length).toBe(2)
    expect(screen.getByText('Graphic & UI/UX Design')).toBeInTheDocument()
    expect(screen.getByText('Accounting & Finance')).toBeInTheDocument()
    expect(screen.getByText('Restaurant & Food')).toBeInTheDocument()
    expect(screen.getByText('Health & Hospital')).toBeInTheDocument()
  })

  it('displays open position counts', () => {
    render(<Categories />)
    const counts = screen.getAllByText('143')
    expect(counts.length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('300')).toBeInTheDocument()
  })
})
