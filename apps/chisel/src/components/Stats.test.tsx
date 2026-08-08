import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders the four counters with their labels', () => {
    render(<Stats />)
    const section = screen.getByRole('region', { name: /company stats/i })
    expect(section).toBeInTheDocument()
    expect(screen.getByText('1087')).toBeInTheDocument()
    expect(screen.getByText('Number of Projects')).toBeInTheDocument()
    expect(screen.getByText('57')).toBeInTheDocument()
    expect(screen.getByText('Year of Experience')).toBeInTheDocument()
    expect(screen.getByText('670')).toBeInTheDocument()
    expect(screen.getByText('Number of Employees')).toBeInTheDocument()
    expect(screen.getByText('900')).toBeInTheDocument()
    expect(screen.getByText('Number of Clients')).toBeInTheDocument()
  })
})
