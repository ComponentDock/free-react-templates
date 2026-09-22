import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Rooms } from './Rooms'

describe('Rooms', () => {
  it('renders the heading', () => {
    render(<Rooms />)
    expect(screen.getByText('Rooms & Suites')).toBeInTheDocument()
  })

  it('renders room cards with prices', () => {
    render(<Rooms />)
    expect(screen.getByText('$99')).toBeInTheDocument()
    expect(screen.getByText('$199')).toBeInTheDocument()
    expect(screen.getByText('$249')).toBeInTheDocument()
  })

  it('renders Book now buttons', () => {
    render(<Rooms />)
    const buttons = screen.getAllByText('Book now!')
    expect(buttons.length).toBeGreaterThan(0)
  })

  it('has View all rooms link', () => {
    render(<Rooms />)
    expect(screen.getByText('View all rooms →')).toBeInTheDocument()
  })
})
