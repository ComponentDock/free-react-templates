import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter', () => {
  it('renders stat numbers', () => {
    render(<Counter />)
    expect(screen.getByText('245')).toBeInTheDocument()
    expect(screen.getByText('535')).toBeInTheDocument()
    expect(screen.getByText('288')).toBeInTheDocument()
    expect(screen.getByText('750')).toBeInTheDocument()
  })

  it('renders stat labels', () => {
    render(<Counter />)
    expect(screen.getByText('Projects Done')).toBeInTheDocument()
    expect(screen.getByText('Houses Built')).toBeInTheDocument()
    expect(screen.getByText('Staff Members')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
  })
})
