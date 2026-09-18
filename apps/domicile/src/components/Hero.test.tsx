import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { describe, expect, it } from 'vitest'
describe('Hero', () => {
  it('renders property heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('853 S Lucerne Blvd')
  })
  it('renders price', () => {
    render(<Hero />)
    expect(screen.getByText('$2,250,500')).toBeInTheDocument()
  })
  it('renders location', () => {
    render(<Hero />)
    expect(screen.getByText('Los Angeles, CA 90005')).toBeInTheDocument()
  })
})
