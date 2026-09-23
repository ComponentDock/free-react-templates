import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Counter } from './Counter'

describe('Counter', () => {
  it('renders all four stat labels', () => {
    render(<Counter />)
    expect(screen.getByText('Qualified Lawyers')).toBeInTheDocument()
    expect(screen.getByText('Successful Cases')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('Awards & Honors')).toBeInTheDocument()
  })

  it('renders stat values', () => {
    render(<Counter />)
    expect(screen.getByText('1,500')).toBeInTheDocument()
    expect(screen.getByText('2,100')).toBeInTheDocument()
    expect(screen.getByText('2,700')).toBeInTheDocument()
    expect(screen.getByText('1,010')).toBeInTheDocument()
  })
})
