import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders all four stat items', () => {
    render(<Stats />)
    expect(screen.getByText('45')).toBeInTheDocument()
    expect(screen.getByText('8,500')).toBeInTheDocument()
    expect(screen.getByText('2,342')).toBeInTheDocument()
    expect(screen.getByText('30')).toBeInTheDocument()
  })

  it('displays stat labels', () => {
    render(<Stats />)
    expect(screen.getByText('Years of Experience')).toBeInTheDocument()
    expect(screen.getByText('Projects Completed')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('Business Partners')).toBeInTheDocument()
  })
})
