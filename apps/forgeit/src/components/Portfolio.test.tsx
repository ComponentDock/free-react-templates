import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders section heading', () => {
    render(<Portfolio />)
    expect(screen.getByText('Our Works')).toBeInTheDocument()
  })

  it('renders six portfolio items', () => {
    render(<Portfolio />)
    expect(screen.getByText('Bonzai Tree')).toBeInTheDocument()
    expect(screen.getByText('Simple Woman')).toBeInTheDocument()
    expect(screen.getByText('Fruits')).toBeInTheDocument()
    expect(screen.getByText('Design Material')).toBeInTheDocument()
    expect(screen.getByText('Handy Food')).toBeInTheDocument()
    expect(screen.getByText('Cat With Cup')).toBeInTheDocument()
  })

  it('renders portfolio categories', () => {
    render(<Portfolio />)
    expect(screen.getAllByText('Web Application').length).toBe(2)
    expect(screen.getAllByText('Branding').length).toBe(2)
    expect(screen.getAllByText('Website').length).toBe(2)
  })
})
