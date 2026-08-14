import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders four stats with indigo values and labels', () => {
    render(<Stats />)
    const rows = screen.getAllByRole('listitem')
    expect(rows).toHaveLength(4)
    expect(screen.getByText('1050+')).toBeInTheDocument()
    expect(screen.getByText('Topics')).toBeInTheDocument()
    expect(screen.getByText('7800+')).toBeInTheDocument()
    expect(screen.getByText('Students')).toBeInTheDocument()
    expect(screen.getByText('420+')).toBeInTheDocument()
    expect(screen.getByText('95+')).toBeInTheDocument()
  })
})
