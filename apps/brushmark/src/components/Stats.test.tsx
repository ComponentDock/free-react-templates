import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders all three stat cards', () => {
    render(<Stats />)
    expect(screen.getByText('15k+')).toBeInTheDocument()
    expect(screen.getByText('Happy Customers')).toBeInTheDocument()
    expect(screen.getByText('12k+')).toBeInTheDocument()
    expect(screen.getByText('Ticket Solved')).toBeInTheDocument()
    expect(screen.getByText('9/10')).toBeInTheDocument()
    expect(screen.getByText('Average Rating')).toBeInTheDocument()
  })
})
