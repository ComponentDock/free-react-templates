import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the hero heading, description, shop button, and product image', () => {
    render(<Hero />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Best quality pillow')
    expect(screen.getByText(/Discover premium pillows/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Shop Now' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Quality pillow on a bed' })).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/plumhero/600/400',
    )
  })
})
