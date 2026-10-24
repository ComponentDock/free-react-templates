import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counters } from './Counters'

describe('Counters', () => {
  it('renders all four counters with their labels', () => {
    render(<Counters />)
    expect(screen.getByText('Countries Covered')).toBeInTheDocument()
    expect(screen.getByText('Business Success')).toBeInTheDocument()
    expect(screen.getByText('Happy Client')).toBeInTheDocument()
    expect(screen.getByText('Business Done')).toBeInTheDocument()
  })

  it('renders the value with the optional orange suffix', () => {
    render(<Counters />)
    expect(screen.getByText('42').textContent).toBe('42+')
    expect(screen.getByText('2342').textContent).toBe('2342')
  })
})
