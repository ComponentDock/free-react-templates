import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'
import { describe, expect, it } from 'vitest'

describe('Stats', () => {
  it('renders all 4 stat items', () => {
    render(<Stats />)
    expect(screen.getByText('4,800')).toBeInTheDocument()
    expect(screen.getByText('14,000')).toBeInTheDocument()
    expect(screen.getByText('200')).toBeInTheDocument()
    expect(screen.getByText('71,650')).toBeInTheDocument()
  })

  it('renders stat labels', () => {
    render(<Stats />)
    expect(screen.getByText('Project Completed')).toBeInTheDocument()
    expect(screen.getByText('Employees')).toBeInTheDocument()
    expect(screen.getByText('Clients')).toBeInTheDocument()
    expect(screen.getByText('Awards')).toBeInTheDocument()
  })
})
