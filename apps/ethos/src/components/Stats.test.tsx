import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders the section heading', () => {
    render(<Stats />)
    expect(screen.getByRole('heading', { name: 'Education is Life' })).toBeInTheDocument()
  })

  it('renders all four stat values and labels', () => {
    render(<Stats />)
    expect(screen.getByText('1250')).toBeInTheDocument()
    expect(screen.getByText('Students')).toBeInTheDocument()
    expect(screen.getByText('45')).toBeInTheDocument()
    expect(screen.getByText('Schools')).toBeInTheDocument()
    expect(screen.getByText('3200')).toBeInTheDocument()
    expect(screen.getByText('Books')).toBeInTheDocument()
    expect(screen.getByText('890')).toBeInTheDocument()
    expect(screen.getByText('Graduates')).toBeInTheDocument()
  })
})
