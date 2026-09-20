import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Programs } from './Programs'

describe('Programs', () => {
  it('renders the section heading', () => {
    render(<Programs />)
    expect(screen.getByRole('heading', { level: 2, name: 'Programs' })).toBeInTheDocument()
  })

  it('renders all schedule items', () => {
    render(<Programs />)
    const items = screen.getAllByRole('heading', { level: 3 })
    expect(items.length).toBe(6)
  })

  it('renders times for each item', () => {
    render(<Programs />)
    expect(screen.getByText('8:00 AM')).toBeInTheDocument()
    expect(screen.getByText('9:30 AM')).toBeInTheDocument()
    expect(screen.getByText('10:30 AM')).toBeInTheDocument()
  })

  it('renders speaker names', () => {
    render(<Programs />)
    expect(screen.getAllByText('Chris Mathews').length).toBeGreaterThanOrEqual(1)
  })

  it('has the schedule section id', () => {
    const { container } = render(<Programs />)
    expect(container.querySelector('#schedule')).toBeInTheDocument()
  })
})
