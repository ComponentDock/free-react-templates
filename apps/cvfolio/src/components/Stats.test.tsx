import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders all four stat values', () => {
    render(<Stats />)

    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText('25')).toBeInTheDocument()
    expect(screen.getByText('311')).toBeInTheDocument()
    expect(screen.getByText('732')).toBeInTheDocument()
  })

  it('renders all four stat labels', () => {
    render(<Stats />)

    expect(screen.getByText('Coder Degrees')).toBeInTheDocument()
    expect(screen.getByText('Project Completed')).toBeInTheDocument()
    expect(screen.getByText('Satisfied Clients')).toBeInTheDocument()
    expect(screen.getByText('Finished Projects')).toBeInTheDocument()
  })
})
