import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StatsCounter } from './StatsCounter'

describe('StatsCounter', () => {
  it('renders all four stats', () => {
    render(<StatsCounter />)
    expect(screen.getByText('5,890')).toBeInTheDocument()
    expect(screen.getByText('530')).toBeInTheDocument()
    expect(screen.getByText('4,029')).toBeInTheDocument()
    expect(screen.getByText('7,020')).toBeInTheDocument()
  })

  it('renders all labels', () => {
    render(<StatsCounter />)
    expect(screen.getByText('Rooms Available')).toBeInTheDocument()
    expect(screen.getByText('Nurse Staff')).toBeInTheDocument()
    expect(screen.getByText('Senior Living')).toBeInTheDocument()
    expect(screen.getByText('Happy People')).toBeInTheDocument()
  })

  it('has brand background', () => {
    const { container } = render(<StatsCounter />)
    expect(container.firstElementChild).toHaveClass('bg-brand')
  })
})
