import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders all four stat items', () => {
    render(<Stats />)
    expect(screen.getByText('3,297')).toBeInTheDocument()
    expect(screen.getByText('378')).toBeInTheDocument()
    expect(screen.getByText('400')).toBeInTheDocument()
    expect(screen.getByText('30')).toBeInTheDocument()
  })

  it('shows stat labels', () => {
    render(<Stats />)
    expect(screen.getByText('Satisfied Customer')).toBeInTheDocument()
    expect(screen.getByText('Hospitals')).toBeInTheDocument()
    expect(screen.getByText('Qualified Doctor')).toBeInTheDocument()
    expect(screen.getByText('Departments')).toBeInTheDocument()
  })

  it('has the dark background', () => {
    render(<Stats />)
    const section = screen.getByText('3,297').closest('section')
    expect(section).toHaveClass('bg-dark')
  })
})
