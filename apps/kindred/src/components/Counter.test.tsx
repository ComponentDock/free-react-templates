import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter', () => {
  it('renders the four campaign statistics', () => {
    render(<Counter />)
    expect(screen.getByText('705')).toBeInTheDocument()
    expect(screen.getByText('Days in Campaign')).toBeInTheDocument()
    expect(screen.getByText('809')).toBeInTheDocument()
    expect(screen.getByText('Dedicated Donors')).toBeInTheDocument()
    expect(screen.getByText('335')).toBeInTheDocument()
    expect(screen.getByText('Winning Awards')).toBeInTheDocument()
    expect(screen.getByText('35')).toBeInTheDocument()
    expect(screen.getByText('Fun Raised')).toBeInTheDocument()
  })
})
