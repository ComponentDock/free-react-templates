import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders subheading, title, description, and CTA button', () => {
    render(<Hero />)

    expect(screen.getByText('Best Seller Book Of The Week')).toBeInTheDocument()
    expect(screen.getByText(/An Incredibly Easy Way To Read/)).toBeInTheDocument()
    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Buy Now' })).toBeInTheDocument()
  })

  it('displays the book illustration', () => {
    render(<Hero />)

    expect(screen.getByRole('img', { name: 'Book illustration' })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
