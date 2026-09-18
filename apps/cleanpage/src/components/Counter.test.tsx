import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter', () => {
  it('renders the heading', () => {
    render(<Counter />)
    expect(screen.getByText('Interesting Facts')).toBeInTheDocument()
  })

  it('renders the subheading', () => {
    render(<Counter />)
    expect(screen.getByText('Some')).toBeInTheDocument()
  })

  it('renders 4 counter items', () => {
    render(<Counter />)
    expect(screen.getByText('Done Works')).toBeInTheDocument()
    expect(screen.getByText('Happy Customers')).toBeInTheDocument()
    expect(screen.getByText('Coffee')).toBeInTheDocument()
    expect(screen.getByText('Work Hours')).toBeInTheDocument()
  })

  it('displays counter values', () => {
    render(<Counter />)
    expect(screen.getByText('2000')).toBeInTheDocument()
    expect(screen.getByText('300')).toBeInTheDocument()
    expect(screen.getByText('100')).toBeInTheDocument()
    expect(screen.getByText('1000')).toBeInTheDocument()
  })
})
