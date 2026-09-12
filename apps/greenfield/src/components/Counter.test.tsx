import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter', () => {
  it('renders all stat values', () => {
    render(<Counter />)
    expect(screen.getByText('4,800')).toBeInTheDocument()
    expect(screen.getByText('14,000')).toBeInTheDocument()
    expect(screen.getByText('200')).toBeInTheDocument()
    expect(screen.getByText('71,650')).toBeInTheDocument()
  })

  it('renders all stat labels', () => {
    render(<Counter />)
    expect(screen.getByText('Project Completed')).toBeInTheDocument()
    expect(screen.getByText('Total Products')).toBeInTheDocument()
    expect(screen.getByText('Services Provided')).toBeInTheDocument()
    expect(screen.getByText('Satisfied Customers')).toBeInTheDocument()
  })
})
