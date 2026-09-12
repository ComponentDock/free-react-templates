import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders three stat counters', () => {
    render(<Stats />)
    expect(screen.getByText('99,399')).toBeInTheDocument()
    expect(screen.getByText('199')).toBeInTheDocument()
    expect(screen.getByText('24')).toBeInTheDocument()
  })

  it('renders stat labels', () => {
    render(<Stats />)
    expect(screen.getByText('Number of Clients')).toBeInTheDocument()
    expect(screen.getByText('Number of Personnel')).toBeInTheDocument()
    expect(screen.getByText('Years of Experience')).toBeInTheDocument()
  })
})
