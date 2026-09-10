import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders the section heading', () => {
    render(<Stats />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'About Our Statistics' }),
    ).toBeInTheDocument()
  })

  it('renders all four stat items with values and labels', () => {
    render(<Stats />)

    expect(screen.getByText('All Projects')).toBeInTheDocument()
    expect(screen.getByText('Projects Completed')).toBeInTheDocument()
    expect(screen.getByText('Happy Customers')).toBeInTheDocument()
    expect(screen.getByText('Awards Won')).toBeInTheDocument()

    const values = screen.getAllByText('560')
    expect(values).toHaveLength(4)
  })
})
