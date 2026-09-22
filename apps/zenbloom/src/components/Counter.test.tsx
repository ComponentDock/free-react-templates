import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter', () => {
  it('renders 4 statistics', () => {
    render(<Counter />)
    expect(screen.getByText('150')).toBeInTheDocument()
    expect(screen.getByText('1,000')).toBeInTheDocument()
    expect(screen.getByText('65')).toBeInTheDocument()
    expect(screen.getByText('71,650')).toBeInTheDocument()
    expect(screen.getByText(/Yoga Classes/)).toBeInTheDocument()
    expect(screen.getByText(/Yoga Conducted/)).toBeInTheDocument()
    expect(screen.getByText(/Years Experienced/)).toBeInTheDocument()
    expect(screen.getByText(/Happy Customers/)).toBeInTheDocument()
  })
})
