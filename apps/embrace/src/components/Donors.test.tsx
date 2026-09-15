import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Donors } from './Donors'

describe('Donors', () => {
  it('renders section heading', () => {
    render(<Donors />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Latest Donations')
  })

  it('renders all four donor names', () => {
    render(<Donors />)
    expect(screen.getByText('Linda Reyez')).toBeInTheDocument()
    expect(screen.getByText('Chris Worth')).toBeInTheDocument()
    expect(screen.getByText('Janet Morris')).toBeInTheDocument()
    expect(screen.getByText('Jessa Sy')).toBeInTheDocument()
  })

  it('renders donation amounts', () => {
    render(<Donors />)
    expect(screen.getByText('$500.00')).toBeInTheDocument()
    expect(screen.getByText('$1,500.00')).toBeInTheDocument()
    expect(screen.getByText('$250.00')).toBeInTheDocument()
    expect(screen.getByText('$400.00')).toBeInTheDocument()
  })
})
