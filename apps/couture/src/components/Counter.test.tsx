import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter', () => {
  it('renders the four stats', () => {
    render(<Counter />)
    expect(screen.getByText('10000+')).toBeInTheDocument()
    expect(screen.getByText('Happy Customers')).toBeInTheDocument()
    expect(screen.getAllByText('100+').length).toBe(2)
    expect(screen.getByText('Branches')).toBeInTheDocument()
    expect(screen.getByText('1000+')).toBeInTheDocument()
    expect(screen.getByText('Partner')).toBeInTheDocument()
    expect(screen.getByText('Awards')).toBeInTheDocument()
  })
})
