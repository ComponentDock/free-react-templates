import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Counter } from './Counter'

describe('Counter', () => {
  it('renders all four stats', () => {
    render(<Counter />)
    expect(screen.getByText('45+')).toBeDefined()
    expect(screen.getByText('8500+')).toBeDefined()
    expect(screen.getByText('30+')).toBeDefined()
    expect(screen.getByText('2342+')).toBeDefined()
  })

  it('renders stat labels', () => {
    render(<Counter />)
    expect(screen.getByText('Years of Experience')).toBeDefined()
    expect(screen.getByText('Projects Completed')).toBeDefined()
    expect(screen.getByText('Qualified Staff')).toBeDefined()
    expect(screen.getByText('Happy Clients')).toBeDefined()
  })
})
