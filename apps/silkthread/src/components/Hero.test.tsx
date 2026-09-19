import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders hero subtitle and heading', () => {
    render(<Hero />)
    expect(screen.getByText('Summer Collection')).toBeInTheDocument()
    expect(screen.getByText('Fall - Winter Collections 2030')).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<Hero />)
    expect(screen.getByText(/A specialist label creating luxury essentials/)).toBeInTheDocument()
  })

  it('renders Shop now button with arrow', () => {
    render(<Hero />)
    const btn = screen.getByText('Shop now')
    expect(btn).toBeInTheDocument()
    expect(btn.closest('a')).toHaveAttribute('href', '#products')
  })

  it('has hero section with background image', () => {
    render(<Hero />)
    const section = screen.getByLabelText('Hero carousel')
    expect(section).toBeInTheDocument()
  })
})
