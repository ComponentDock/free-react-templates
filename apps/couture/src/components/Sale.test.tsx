import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Sale } from './Sale'

describe('Sale', () => {
  it('renders the Summer Sale heading', () => {
    render(<Sale />)
    expect(screen.getByRole('heading', { name: /Summer Sale/ })).toBeInTheDocument()
  })

  it('renders the sale photo', () => {
    render(<Sale />)
    expect(screen.getByRole('img', { name: /Summer sale fashion/ })).toBeInTheDocument()
  })
})
