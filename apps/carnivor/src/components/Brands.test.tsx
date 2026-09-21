import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Brands } from './Brands'

describe('Brands', () => {
  it('renders the heading', () => {
    render(<Brands />)
    expect(screen.getByRole('heading', { name: /in association with/i })).toBeInTheDocument()
  })

  it('renders all brand names', () => {
    render(<Brands />)
    expect(screen.getByText('Prime Cuts Co')).toBeInTheDocument()
    expect(screen.getByText('Flame & Fork')).toBeInTheDocument()
    expect(screen.getByText('The Butcher Guild')).toBeInTheDocument()
    expect(screen.getByText('Smoke Haus')).toBeInTheDocument()
    expect(screen.getByText('Grill Masters')).toBeInTheDocument()
  })
})
