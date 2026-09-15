import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the hero heading and subtitle', () => {
    render(<Hero />)
    expect(screen.getByText('Winter Fashion')).toBeInTheDocument()
    expect(screen.getByText('Fashion Collection 2024')).toBeInTheDocument()
  })

  it('renders the Shop Now button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'Shop Now' })).toHaveAttribute('href', '#shop')
  })
})
