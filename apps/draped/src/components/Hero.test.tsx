import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Madewell')
  })

  it('renders subtitle', () => {
    render(<Hero />)
    expect(screen.getByText('Summer Collection')).toBeInTheDocument()
  })

  it('renders pricing with strikethrough original', () => {
    render(<Hero />)
    expect(screen.getByText('1,499')).toBeInTheDocument()
    expect(screen.getByText('$1,999')).toBeInTheDocument()
  })

  it('renders Shop Now buttons', () => {
    render(<Hero />)
    const shopLinks = screen.getAllByText('Shop Now')
    expect(shopLinks).toHaveLength(2)
  })

  it('renders product image', () => {
    render(<Hero />)
    expect(screen.getByAltText(/featured summer collection product/i)).toBeInTheDocument()
  })
})
