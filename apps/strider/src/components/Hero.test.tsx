import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByText(/Stride Into/)).toBeInTheDocument()
  })

  it('renders the description paragraph', () => {
    render(<Hero />)
    expect(screen.getByText(/Discover the latest trends/)).toBeInTheDocument()
  })

  it('renders the Shop Now button', () => {
    render(<Hero />)
    expect(screen.getByText('Shop Now')).toBeInTheDocument()
  })

  it('renders the hero image', () => {
    render(<Hero />)
    const img = screen.getByAltText('Fashion sneaker showcase')
    expect(img).toBeInTheDocument()
  })
})
