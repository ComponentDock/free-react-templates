import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WorkProcess } from './WorkProcess'

describe('WorkProcess', () => {
  it('renders section heading', () => {
    render(<WorkProcess />)
    expect(screen.getByText('Our Working Process')).toBeInTheDocument()
  })

  it('renders all 4 steps', () => {
    render(<WorkProcess />)
    expect(screen.getByText('Detect problem')).toBeInTheDocument()
    expect(screen.getByText('Split solution into parts')).toBeInTheDocument()
    expect(screen.getByText('Analyzing method')).toBeInTheDocument()
    expect(screen.getByText('Final result comes out')).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<WorkProcess />)
    expect(screen.getByText(/systematic approach/)).toBeInTheDocument()
  })
})
