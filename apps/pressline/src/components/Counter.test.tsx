import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter', () => {
  it('renders all 4 stat items', () => {
    render(<Counter />)
    expect(screen.getByText('Active Readers')).toBeInTheDocument()
    expect(screen.getByText('Total Pages')).toBeInTheDocument()
    expect(screen.getByText('Cups of Coffee')).toBeInTheDocument()
    expect(screen.getByText('Facebook Fans')).toBeInTheDocument()
  })

  it('displays stat values', () => {
    render(<Counter />)
    expect(screen.getByText('12,400')).toBeInTheDocument()
    expect(screen.getByText('8,750')).toBeInTheDocument()
    expect(screen.getByText('1,020')).toBeInTheDocument()
    expect(screen.getByText('5,320')).toBeInTheDocument()
  })
})
