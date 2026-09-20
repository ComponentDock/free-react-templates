import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter', () => {
  it('renders the next course title', () => {
    render(<Counter />)
    expect(screen.getByText(/next course/i)).toBeInTheDocument()
    expect(screen.getByText(/sales & marketing alignment/i)).toBeInTheDocument()
  })

  it('displays all countdown values', () => {
    render(<Counter />)
    expect(screen.getByText('20')).toBeInTheDocument()
    expect(screen.getByText('08')).toBeInTheDocument()
    expect(screen.getByText('40')).toBeInTheDocument()
    expect(screen.getByText('56')).toBeInTheDocument()
  })

  it('displays time labels', () => {
    render(<Counter />)
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('Hrs')).toBeInTheDocument()
    expect(screen.getByText('Mins')).toBeInTheDocument()
    expect(screen.getByText('Secs')).toBeInTheDocument()
  })
})
