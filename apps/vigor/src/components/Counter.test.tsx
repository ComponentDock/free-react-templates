import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter', () => {
  it('renders all 4 stats', () => {
    render(<Counter />)
    expect(screen.getByText('1,200')).toBeDefined()
    expect(screen.getByText('8,500')).toBeDefined()
    expect(screen.getByText('45')).toBeDefined()
    expect(screen.getByText('120')).toBeDefined()
  })

  it('renders stat labels', () => {
    render(<Counter />)
    expect(screen.getByText('Trainers')).toBeDefined()
    expect(screen.getByText('Members')).toBeDefined()
    expect(screen.getByText('Programs')).toBeDefined()
    expect(screen.getByText('Awards')).toBeDefined()
  })
})
