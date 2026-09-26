import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Counters from './Counters'

describe('Counters', () => {
  it('renders all three stats', () => {
    render(<Counters />)
    expect(screen.getByText('520+')).toBeInTheDocument()
    expect(screen.getByText('244')).toBeInTheDocument()
    expect(screen.getByText('95%')).toBeInTheDocument()
  })

  it('renders stat labels', () => {
    render(<Counters />)
    expect(screen.getByText('Total Projects')).toBeInTheDocument()
    expect(screen.getByText('Ongoing Projects')).toBeInTheDocument()
    expect(screen.getByText('Job Success')).toBeInTheDocument()
  })
})
