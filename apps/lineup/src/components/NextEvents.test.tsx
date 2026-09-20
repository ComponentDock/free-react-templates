import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NextEvents } from './NextEvents'

describe('NextEvents', () => {
  it('renders section heading', () => {
    render(<NextEvents />)

    expect(screen.getByText('Our next events')).toBeInTheDocument()
  })

  it('renders all three event cards', () => {
    render(<NextEvents />)

    expect(screen.getByText('U2 Concert in Detroit')).toBeInTheDocument()
    expect(screen.getByText('TED Talk California')).toBeInTheDocument()
    expect(screen.getByText('Ultra Music Miami')).toBeInTheDocument()
  })

  it('displays ratings on each card', () => {
    render(<NextEvents />)

    expect(screen.getByText('8.9')).toBeInTheDocument()
    expect(screen.getByText('7.9')).toBeInTheDocument()
    expect(screen.getByText('9.9')).toBeInTheDocument()
  })

  it('renders Buy Tickets links', () => {
    render(<NextEvents />)

    const links = screen.getAllByText('Buy Tickets')
    expect(links.length).toBe(3)
  })

  it('displays event dates', () => {
    render(<NextEvents />)

    expect(screen.getByText('Jan 27, 2024')).toBeInTheDocument()
    expect(screen.getByText('Feb 15, 2024')).toBeInTheDocument()
    expect(screen.getByText('Mar 10, 2024')).toBeInTheDocument()
  })
})
