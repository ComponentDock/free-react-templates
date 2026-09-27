import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Portfolio from './Portfolio'

describe('Portfolio', () => {
  it('renders the heading and description', () => {
    render(<Portfolio />)
    expect(screen.getByText('Latest Works')).toBeInTheDocument()
    expect(screen.getByText(/looking at blank cassettes/)).toBeInTheDocument()
  })

  it('renders all filter buttons', () => {
    render(<Portfolio />)
    expect(screen.getByRole('button', { name: 'All Categories' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Branding' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Creative Work' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Web Design' })).toBeInTheDocument()
  })

  it('renders 8 project cards', () => {
    render(<Portfolio />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(8)
  })

  it('shows project titles', () => {
    render(<Portfolio />)
    expect(screen.getByText('2D Vinyl Design')).toBeInTheDocument()
    expect(screen.getByText('Brand Identity')).toBeInTheDocument()
    expect(screen.getByText('UI Mockup')).toBeInTheDocument()
  })
})
