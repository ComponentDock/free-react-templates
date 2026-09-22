import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter', () => {
  it('renders all stat labels and values', () => {
    render(<Counter />)
    expect(screen.getByText('Happy Guests')).toBeInTheDocument()
    expect(screen.getByText('Rooms')).toBeInTheDocument()
    expect(screen.getByText('Staff')).toBeInTheDocument()
    expect(screen.getByText('Destinations')).toBeInTheDocument()
    expect(screen.getByText('8,500+')).toBeInTheDocument()
    expect(screen.getByText('200+')).toBeInTheDocument()
    expect(screen.getByText('500+')).toBeInTheDocument()
    expect(screen.getByText('100+')).toBeInTheDocument()
  })
})
