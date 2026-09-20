import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { EventInfo } from './EventInfo'

describe('EventInfo', () => {
  it('renders all four info cards', () => {
    render(<EventInfo />)
    expect(screen.getByText('Date')).toBeInTheDocument()
    expect(screen.getByText('Location')).toBeInTheDocument()
    expect(screen.getByText('Speakers')).toBeInTheDocument()
    expect(screen.getByText('Tickets')).toBeInTheDocument()
  })

  it('renders detail text for each card', () => {
    render(<EventInfo />)
    expect(screen.getByText('March 15-17, 2026')).toBeInTheDocument()
    expect(screen.getByText('San Francisco, CA')).toBeInTheDocument()
    expect(screen.getByText('8+ Industry Leaders')).toBeInTheDocument()
    expect(screen.getByText('From $65')).toBeInTheDocument()
  })

  it('has a section landmark', () => {
    render(<EventInfo />)
    expect(document.querySelector('section')).toBeInTheDocument()
  })

  it('has proper heading structure', () => {
    render(<EventInfo />)
    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings).toHaveLength(4)
  })
})
