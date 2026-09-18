import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter', () => {
  it('renders mission statement', () => {
    render(<Counter />)
    expect(screen.getByText(/We're on a mission/)).toBeInTheDocument()
  })

  it('renders all stat values', () => {
    render(<Counter />)
    expect(screen.getByText('1,005,000')).toBeInTheDocument()
    expect(screen.getByText('65,000')).toBeInTheDocument()
    expect(screen.getByText('500,000')).toBeInTheDocument()
    expect(screen.getByText('50')).toBeInTheDocument()
  })

  it('renders all stat labels', () => {
    render(<Counter />)
    expect(screen.getByText('Members')).toBeInTheDocument()
    expect(screen.getByText('Pastors')).toBeInTheDocument()
    expect(screen.getByText('Donations')).toBeInTheDocument()
    expect(screen.getByText('Churches')).toBeInTheDocument()
  })
})
