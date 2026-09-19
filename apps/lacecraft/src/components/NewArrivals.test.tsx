import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NewArrivals } from './NewArrivals'

describe('NewArrivals', () => {
  it('renders the section heading', () => {
    render(<NewArrivals />)
    expect(screen.getByRole('heading', { level: 2, name: 'New Arrivals' })).toBeInTheDocument()
  })

  it('renders the Just Dropped badge', () => {
    render(<NewArrivals />)
    expect(screen.getByText('Just Dropped')).toBeInTheDocument()
  })

  it('renders the Shop New Arrivals link', () => {
    render(<NewArrivals />)
    expect(screen.getByRole('link', { name: /Shop New Arrivals/ })).toHaveAttribute(
      'href',
      '#new-arrivals-all',
    )
  })

  it('renders all four product names', () => {
    render(<NewArrivals />)
    expect(screen.getByText('Ultraboost Lite')).toBeInTheDocument()
    expect(screen.getByText('Retro Low Classic')).toBeInTheDocument()
    expect(screen.getByText('Stratus Walk')).toBeInTheDocument()
    expect(screen.getByText('Dunk Fury SE')).toBeInTheDocument()
  })

  it('displays NEW badges on each card', () => {
    render(<NewArrivals />)
    const badges = screen.getAllByText('NEW')
    expect(badges.length).toBe(4)
  })
})
