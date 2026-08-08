import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counters } from './Counters'

describe('Counters', () => {
  it('renders the three stats with labels', () => {
    render(<Counters />)
    expect(screen.getByText('1990')).toBeInTheDocument()
    expect(screen.getByText(/Projects done/i)).toBeInTheDocument()
    expect(screen.getByText('50+')).toBeInTheDocument()
    expect(screen.getByText(/Expert Members/i)).toBeInTheDocument()
    expect(screen.getByText('25+')).toBeInTheDocument()
    expect(screen.getByText(/Achievements/i)).toBeInTheDocument()
  })
})
