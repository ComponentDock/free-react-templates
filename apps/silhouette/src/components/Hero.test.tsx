import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders headline, subtext, and CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Define Your.*Own Style/)
    expect(screen.getByText(/latest trends/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /shop now/i })).toBeInTheDocument()
  })

  it('renders the hero image', () => {
    render(<Hero />)
    const img = screen.getByRole('img', { name: /fashion model/i })
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
