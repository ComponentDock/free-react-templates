import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter', () => {
  it('renders all four stat items', () => {
    render(<Counter />)
    expect(screen.getByText('750')).toBeInTheDocument()
    expect(screen.getByText('568')).toBeInTheDocument()
    expect(screen.getByText('478')).toBeInTheDocument()
    expect(screen.getByText('10')).toBeInTheDocument()
  })

  it('renders stat labels', () => {
    render(<Counter />)
    expect(screen.getByText('Project Complete')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('Cups of Coffee')).toBeInTheDocument()
    expect(screen.getByText('Years Experienced')).toBeInTheDocument()
  })
})
